'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styles from './page.module.css';

import FAQTabs from '@/faq/components/FAQTabs';
import FAQSearch from '@/faq/components/FAQSearch';
import FAQSubTabs from '@/faq/components/FAQSubTabs';
import FAQList from '@/faq/components/FAQList';
import FAQInquiry from '@/faq/components/FAQInquiry';
import FAQProcess from "@/faq/components/FAQProcess";
import FAQAppDownload from "@/faq/components/FAQAppDownload";

import { debounce } from "next/dist/server/utils";

const itemsPerPage = 10; // 페이지 당 데이터 수
const categoryMap = {
    '서비스 상품': 'PRODUCT',
    '도입 상담': 'COUNSELING',
    '계약': 'CONTRACT',
    '전체': '',
};
const usageCategoryMap = {
    '가입문의': 'SIGN_UP',
    '비즈니스(업무용)': 'BUSINESS',
    '사고/보험': 'ACCIDENT',
    '예약/결제': 'RESERVATION',
    '차량문의': 'VEHICLE',
    '충전': 'REFUEL',
    '쿠폰/기타': 'COUPON',
    '전체': '',
};

export default function Page() {
    const [selectedTab, setSelectedTab] = useState('Introduction');
    const [selectedCategory, setSelectedCategory] = useState('전체');
    const [selectedSubCategory, setSelectedSubCategory] = useState('전체');
    const [categories, setCategories] = useState([]);
    const [faqData, setFaqData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    const [totalCount, setTotalCount] = useState(0);
    const [isSearchActive, setIsSearchActive] = useState(false);

    // 카테고리 이름 → ID 매핑 함수
    const getCategoryID = (categoryName, tab) =>
        tab === 'Introduction' ? categoryMap[categoryName] || '' : usageCategoryMap[categoryName] || '';

    // API 호출 함수
    const fetchFAQ = useCallback(
        debounce(async (options = {}) => {
            if (isLoading) return;
            setIsLoading(true);
            console.log("@@")
            const { limit = itemsPerPage, offset = (currentPage - 1) * itemsPerPage, injectSearchText, injectCategory } = options;

            const queryParams = new URLSearchParams({
                limit,
                offset,
                tab: selectedTab,
            });

            const effectiveSearchText = injectSearchText !== undefined ? injectSearchText : searchText;
            const effectiveCategory = injectCategory ?? selectedCategory;

            if (effectiveCategory !== '전체') {
                queryParams.append('faqCategoryID', getCategoryID(effectiveCategory, selectedTab));
            }
            if (effectiveSearchText) {
                queryParams.append('question', effectiveSearchText);
                setIsSearchActive(true);
            } else {
                setIsSearchActive(false);
            }

            try {
                const response = await fetch(`/api/faq?${queryParams}`);
                const data = await response.json();

                setFaqData((prevData) =>
                    offset === 0 ? data.items : [...prevData, ...data.items]
                );
                setTotalCount(data.total);
            } catch (error) {
                console.error('Failed to fetch FAQ data:', error);
            } finally {
                setIsLoading(false);
            }
        }, 0),
        [selectedTab, selectedCategory, searchText, currentPage]
    );

    // 카테고리 데이터 로드
    const fetchCategories = useCallback(async () => {
        try {
            const response = await fetch(`/api/categories?tab=${selectedTab}`);
            const data = await response.json();
            setCategories(data.categories || []);
            setSelectedCategory('전체');
            setSelectedSubCategory('전체');
        } catch (error) {
            console.error('Failed to fetch categories:', error);
        }
    }, [selectedTab]);

    // 초기화 및 상태 변경 시 데이터 로드
    useEffect(() => {
        setCurrentPage(1);
        setFaqData([]);
        fetchFAQ({ offset: 0 ,injectSearchText: null});
    }, [selectedTab, selectedCategory, selectedSubCategory]);

    useEffect(() => {
        if (currentPage > 1) fetchFAQ();
    }, [currentPage]);

    useEffect(() => {
        fetchCategories();
    }, [selectedTab]);

    // 더보기 버튼 핸들러
    const handleLoadMore = () => setCurrentPage((prev) => prev + 1);

    // 검색 핸들러
    const handleSearch = () => {
        setFaqData([]);
        setCurrentPage(1);
        fetchFAQ({ offset: 0 });
    };

    // 검색 초기화 핸들러
    const handleReset = async () => {
        setSearchText('');
        setSelectedCategory('전체');
        setCurrentPage(1);
        setFaqData([]);
        fetchFAQ({ offset: 0, injectSearchText: null });
    };

    if (isLoading && currentPage === 1) {
        return (
            <div className={styles.spinner_container}>
                <div className={styles.spinner}></div>
            </div>
        );
    }

    return (
        <div>
            <FAQTabs
                tabs={[
                    { key: 'Introduction', label: '서비스 도입' },
                    { key: 'Usage', label: '서비스 이용' },
                ]}
                selectedTabKey={selectedTab}
                onTabChange={(key) => {
                    if (key !== selectedTab) {
                        setSelectedTab(key);
                    }
                }}
            />
            <FAQSearch
                searchText={searchText}
                setSearchText={setSearchText}
                onSearch={handleSearch}
                resultCount={totalCount}
                onSearchReset={handleReset}
                isSearchActive={isSearchActive}
            />
            <FAQSubTabs
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={(category) => {
                    setSelectedCategory(category);
                    setSelectedSubCategory('전체');
                }}
                subCategories={
                    selectedTab === 'Usage' && selectedCategory !== '전체'
                        ? faqData
                            .filter((item) => item.categoryName === selectedCategory)
                            .map((item) => item.subCategoryName)
                        : []
                }
                selectedSubCategory={selectedSubCategory}
                onSubCategoryChange={setSelectedSubCategory}
            />
            <FAQList items={faqData} />
            {faqData.length >= itemsPerPage && (
                <button className={styles.load_more_button} onClick={handleLoadMore}>
                    + 더보기
                </button>
            )}
            <FAQInquiry />
            <FAQProcess />
            <FAQAppDownload />
        </div>
    );
}
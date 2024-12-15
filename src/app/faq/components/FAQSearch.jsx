import React from 'react';
import styles from './styles/FAQSearch.module.scss';

export default function FAQSearch({ searchText, setSearchText, onSearch, resultCount, onSearchReset, isSearchActive }) {

    const handleSearch = () => {
        if (onSearch) {
            onSearch(10 , 0 , null, null); // 상위 컴포넌트로 검색어 전달
        }
    };

    const handleClearSearch = () => {
        setSearchText('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch(); // 엔터 키로 검색 실행
        }
    };


    return (
        <>
            <div className={styles.search_container}>
                <div className={styles.search_input_wrapper}>
                    <input
                        type="text"
                        className={styles.search_input}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="검색어를 입력하세요"
                    />
                    {searchText && (
                        <img
                            src="/assets/icon_clear.svg"
                            alt="Clear"
                            className={styles.search_clear}
                            onClick={handleClearSearch}
                        />
                    )}
                    <img
                        src="/assets/icon_search.svg"
                        alt="Search"
                        className={styles.search_icon}
                        onClick={handleSearch}
                    />
                </div>
            </div>
            {isSearchActive && (
                <div className={styles.reset_container}>
                    <p className={styles.search_result_count}>
                        검색결과 총 {resultCount}건
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src="/assets/icon_init.svg"
                            alt="검색초기화"
                            className={styles.reset_icon}
                            onClick={onSearchReset} // 초기화 버튼 클릭 시 상위 핸들러 호출
                        />
                        <span className={styles.reset_text} onClick={onSearchReset}>검색초기화</span>
                    </div>
                </div>
            )}

        </>
    );
}
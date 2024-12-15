import { rest } from 'msw';
import faqData from './data/faq.json';

export const handlers = [
    rest.get('/api/faq', (req, res, ctx) => {
        const limit = Number(req.url.searchParams.get('limit')) || 10;
        const offset = Number(req.url.searchParams.get('offset')) || 0;
        const tab = req.url.searchParams.get('tab'); // 'Introduction', 'Usage'
        const faqCategoryID = req.url.searchParams.get('faqCategoryID'); // 카테고리 ID
        const question = req.url.searchParams.get('question'); // 검색어

        let selectedData = [];
        let total = 0;

        if (tab === 'Introduction') {
            // `serviceIntroduction` 데이터 가져오기
            selectedData = faqData.serviceIntroduction.items;

            // FAQ 카테고리 필터링
            if (faqCategoryID) {
                selectedData = selectedData.filter(
                    (item) =>
                        faqData.serviceIntroduction.serviceIntroductionCategories.find(
                            (category) => category.categoryID === faqCategoryID
                        )?.name === item.subCategoryName
                );
            }
        } else if (tab === 'Usage') {
            // `serviceUsage` 데이터 가져오기
            if (faqCategoryID) {
                const category = faqData.serviceUsage.serviceUsageCategories.find(
                    (cat) => cat.categoryID === faqCategoryID
                );
                if (category) {
                    selectedData = faqData.serviceUsage.items.filter(
                        (item) => item.categoryName === category.name
                    );
                }
            } else {
                selectedData = faqData.serviceUsage.items; // 전체 데이터
            }
        }
        // 검색어 필터링 추가
        if (question) {
            selectedData = selectedData.filter((item) =>
                item.question.toLowerCase().includes(question.toLowerCase())
            );
        }

        // 총 데이터 수 계산
        total = selectedData.length;

        // 페이징 처리
        const start = offset;
        const end = start + limit;
        const pagedData = selectedData.slice(start, end);

        // 응답 반환
        return res(
            ctx.status(200),
            ctx.json({
                items: pagedData,
                total,
            })
        );
    }),
    // 카테고리 데이터를 가져오는 핸들러
    rest.get('/api/categories', (req, res, ctx) => {
        const tab = req.url.searchParams.get('tab');

        let categories = [];
        if (tab === 'Introduction') {
            categories = faqData.serviceIntroduction.serviceIntroductionCategories || [];
        } else if (tab === 'Usage') {
            categories = faqData.serviceUsage.serviceUsageCategories || [];
        }

        return res(
            ctx.status(200),
            ctx.json({
                categories,
            })
        );
    }),
];
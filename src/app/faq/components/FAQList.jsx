import React from 'react';
import FAQExpansion from './FAQExpansion';
import styles from './styles/FAQList.module.scss';

export default function FAQList({ items, selectedCategory }) {
    return (
        <div className={styles.faq_list}>
            {items.length > 0 ? (
                // 데이터가 있는 경우
                items.map((item,index) => (
                    <FAQExpansion
                        key={`${item.id}-${index}`} // 고유한 key 생성
                        categoryName={item.categoryName} // 중분류 전달
                        subCategoryName={item.subCategoryName} // 소분류 전달
                        question={item.question}
                        answer={item.answer}
                    />
                ))
            ) : (
                // 데이터가 없는 경우
                <div className={styles.no_data}>
                    <img
                        src="/assets/icon_nodata.svg" // public 폴더에 있는 정적 파일 경로
                        alt="No Data"
                        className={styles.no_data_icon}
                    />
                    <p className={styles.no_data_text}>검색결과가 없습니다.</p>
                </div>
            )}
        </div>
    );
}
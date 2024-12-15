# wiblebiz-demo

## 주요 기능
- **FAQ 시스템**: 자주 묻는 질문(FAQ)을 관리하고 표시하는 기능.


## 파일 구조
```
├── README.md                # 프로젝트 설명
├── package.json             # 의존성 및 스크립트 정의
├── next.config.mjs          # Next.js 설정 파일
├── jsconfig.json            # JavaScript 설정 파일
├── src/                     # 소스 코드 디렉토리
│   ├── app/                 # 주요 앱 코드
│   │   ├── layout.jsx       # 레이아웃 설정
│   │   ├── page.jsx         # 메인 페이지
│   │   ├── faq/             # FAQ 관련 코드
│   │   ├── mocks/           # msw 관련 코드
│   │   ├── styles/          # 글로벌 및 모듈 스타일
│   │   └── components/      # 공통 컴포넌트
└── public/                  # 정적 파일
```

## 주요 기술
- **프론트엔드 프레임워크**: Next.js
- **스타일링**: SCSS 및 CSS 모듈
- **데이터 관리**: JSON 기반 Mock 데이터(msw)
- **컴포넌트 관리**: React 기반 컴포넌트 구조


## 설치 및 실행 방법
### 필수 사항
- npm

### 설치
```bash
# Git Clone
git clone https://

# 의존성 설치
npm install
```

### 실행
```bash
# 개발 서버 실행
npm run dev

# 빌드 및 실행
npm run build
npm start
```

## 주요 파일 설명
- `package.json`: 프로젝트 의존성과 스크립트가 정의되어 있습니다.
- `next.config.mjs`: Next.js 설정 파일로, 추가적인 구성 요소를 설정할 수 있습니다.
- `src/app`: 주요 코드 디렉토리로, 페이지 및 컴포넌트가 포함되어 있습니다.
- `src/app/faq`: FAQ 관련 컴포넌트 및 데이터.
- `src/app/mocks`: msw 관련 파일 및 목업 데이터.
- `src/app/styles`: 글로벌 스타일과 모듈 스타일 파일.

## 개발 가이드
### 스타일 가이드
- SCSS를 사용하여 스타일을 작성.
- 글로벌 스타일은 `src/app/styles/globals.scss`에서 관리.

### 컴포넌트 구성
- 공통적으로 사용되는 컴포넌트는 `src/app/components/common`에 위치.
- 페이지별 컴포넌트는 해당 페이지 디렉토리에서 관리.




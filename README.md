## Ver. 1.4.0 (2025.04.13)

- Index 페이지
  - 모든 영화 컴포넌트에 3초의 delay 함수 및 스트리밍 적용
  - 추천 영화 컴포넌트에 1.5초의 delay 함수 및 스트리밍 적용
- Search 페이지
  - 1초의 delay 함수 및 스트리밍으로 변경
  - 트리거 적용

## Ver. 1.3.0 (2025.04.10)

- Search 페이지 : 3초의 delay 함수 및 스트리밍 적용

## Ver. 1.2.0 (2025.04.09)

- Search 페이지를 제외한 모든 페이지를 static 페이지로 설정
- Movie 페이지
  - 빌드 타임에 존재하는 모든 영화의 상세 페이지를 생성
  - 빌드 타임에 생성하지 못한 페이지에 대해서는 404를 return 하도록 설정

## Ver. 1.1.1 (2025.04.09)

- Search 페이지 : 캐시 옵션을 "force-cache"로 수정

## Ver. 1.1.0 (2025.04.09)

- 각 페이지 데이터 패칭 기능 구현
- 캐시 옵션 설정
  - Index 페이지
    - 지금 가장 추천하는 영화 컴포넌트 : "revalidate: 60"
    - 등록된 모든 영화 컴포넌트 : "no-store"로 설정
  - Search 페이지 : 캐시 옵션을 "reload"로 설정
  - Movie 페이지 : 캐시 옵션을 "force-cache"로 설정

## Ver. 1.0.0 (2025.04.06)

### 1단계

- 프로젝트 생성
  - App Route로 생성 완료
- 라우팅 설정
  - Index, Search, Movie 페이지 라우팅 설정완료
- 레이아웃 설정
  - Global Layout : Index, Search, Movie 페이지에 적용
  - SearchBar Layout : Index, Search 페이지에 적용

### 2단계

- 서치바 컴포넌트 생성
  - 검색어를 입력하면 search?q={검색어} 페이지로 이동
  - 검색 버튼을 클릭하거나 입력창에 Enter 키를 눌러도 동일한 기능을 가짐

### 3단계

- 더미데이터 설정
  - src/dummy.json 파일 생성
- 데이터 타입 정의
  - src/types.ts 파일 생성
- 각 페이지 UI 구현

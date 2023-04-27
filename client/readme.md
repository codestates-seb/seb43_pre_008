# 🐯 코드스테이츠 Pre-Project client

## 😎 Preview

<html>
<table>
  <tr>
    <th>
      회원 가입 페이지
    </th>
    <th>
      로그인 페이지
    </th>
  </tr>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/118884127/234739375-e6b6ad03-f92c-4ed9-b459-239474d59381.png"  alt="signup page" width = 100% >
    </td>
    <td>
      <img src="https://user-images.githubusercontent.com/118884127/234739380-670cd6d5-9e06-4bc6-bd35-9dccc76b51ee.png" alt="login page" width = 100%>
    </td>
   </tr> 
  <tr>
    <th>
      메인 페이지
    </th>
    <th>
      질문 작성 페이지
    </th>
  </tr>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/118884127/234738779-38f6f8cf-00e4-48c6-ae6a-d352eb23d912.gif"  alt="main page" width = 100%>
    </td>
    <td>
      <img src="https://user-images.githubusercontent.com/118884127/234738521-fbcd776b-1208-44e3-ad96-ab1d0d829637.gif" alt="write page" width = 100%>
    </td>
   </tr>
   <tr>
    <th>
      마이 페이지
    </th> 
    <th>
      답변 페이지
    </th>
  </tr>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/118884127/234738910-16f1f72d-e3d5-4f01-8260-b8a15faf8379.gif" alt="my info page" width = 100%>
    </td>
    <td>
      <img src="https://user-images.githubusercontent.com/118884127/234739484-5a7fe983-a0e3-4522-ab45-46249e1234e3.gif" alt="404 page" width = 100%>
    </td>
  </tr> 
  <tr>
    <th>
      검색결과 없음
    </th>
  </tr>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/118884127/234739529-2c30bb6a-da97-4e87-bf3f-6b3729e098ee.png" alt="my info page" width = 100%>
    </td
  </tr>
</table>
</html>

<br/>

## 💻 제작환경
1. `Window 11` & `Mac`
1. `Git` & `GitHub`
1. `Node` & `npm`
1. `VSCode`

## ⚒️ 기술 스택
1. `eslint`, `prettier`
1. `React.js`
1. `styled-components`
1. `redux-toolkit`
1. `axios`

## 🫗 폴더 구조

+ `public`: 정적 파일
+ `eslintrc.json`: 코드 규칙 명시
+ `prettierrc.json`: 코드 작성 규칙 명시
+ `package.json`: 핵심 파일
+ `src`: 소스 코드
  + `components`: 컴포넌트들
  + `hooks`: 사용자 정의 훅들
  + `share`: 전체 레이아웃 ( `Header`, `Footer`, `Nav`, `SideBar` )
  + `style`: GlobalStyle, theme 등 전역 스타일드 컴포넌트
  + `pages`: 페이지 컴포넌트들
  + `app`: `store` 세팅을 위한 폴더
  + `features`:`redux-toolkit`을 정의를 위한 폴더

```
├─client
│  ├─public
│  ├─eslintrc.json
│  ├─prettierrc.json
│  ├─package.json
│  └─src
│      ├─components
│      ├─hooks
│      └─share
│      │   ├─Footer
│      │   ├─Header       
│      │   ├─SideBar
│      │   └─Nav
│      ├─pages
│      └─app
│      ├─style  
│      ├─features
│          └─Counter
│           
```

## 🕹️ 실행 & 빌드

+ 실행

```bash
# 폴더 진입
cd client

# 패키지 설치 ( "node" 필요 )
npm install

# 개발용 실행
npm start
```

+ 빌드

```bash
# 폴더 진입
cd client

# 패키지 설치 ( "node" 필요 )
npm install

# 개발용 실행
npm run build

# "build"폴더가 생성되고 빌드된 파일이 들어가 있음
```

## 📜 코드 작성 규칙

### 0️⃣ JSDoc
특정 함수나 변수에 `JSDoc` 작성

```jsx
/** 2023/04/13 - 로그인한 유저 데이터 - by bumpist */
const [user, setUser] = useState(null);

/** 2023/04/13 - 로그인 핸들러 - by bumpist */
const onLogIn = () => {
  // ... 대충 로그인 처리
}
```

### 1️⃣ styled-components

+ 규칙
  1. 전역에서 쓰일 수 있는 css는 App.css에서 관리
  1. 해당 컴포넌트나 페이지에서만 사용되는건 `styled-components`사용해서 관리


### 2️⃣ branch
> 브랜치는 항상 `PR`을 통해 병합하고, 각 팀의 2인의 인원이 허용해야합니다.<br />

+ `main`: 배포 브랜치
+ `dev`: `fe`/`be` 작업 테스트 병합 브랜치
+ `frontend`/`backend`: 개발 브랜치
+ `feat/기능명` `|` `feat/페이지명`: 상세 개발 브랜치


### 3️⃣ commit 컨벤션
> commit 컨벤션은 최대한 사용 시점 예시에 맞춰서 사용 부탁드립니다.<br />

+ `Commit 컨벤션`: 사용 시점
+ `feat`: 새로운 기능 추가
+ `fix`: 버그 수정
+ `docs`: 문서 수정
+ `style`: 코드 스타일 변경 (코드 포매팅, 세미콜론 누락 등)기능 수정이 없는 경우
+ `design`: 사용자 UI 디자인 변경 (CSS 등)
+ `refactor`: 코드 리팩토링
+ `build`: 빌드 파일 수정
+ `rename`: 빌드 업무 수정, 패키지 매니저 수정 (gitignore 수정 등), 설정을 변경(코드의 수정 없이)
+ `remove`: 파일을 삭제만 한 경우




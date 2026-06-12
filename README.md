# 개인 포트폴리오 웹사이트

## 프로젝트 소개

이 프로젝트는 웹프로그래밍 기말 과제로 제작한 개인 포트폴리오 웹사이트입니다.

단순히 화려한 디자인을 만드는 것보다, 제가 직접 소스코드를 이해하고 발표에서 설명할 수 있는 구조로 구현하는 것을 목표로 했습니다.

웹사이트는 크게 두 가지 내용을 보여줍니다.

1. 현재의 나
2. 4학년 2학기 때의 나

현재의 나 페이지에서는 지금의 학교생활, 공부 중인 내용, 진행 중인 프로젝트, 알바 경험, 취미와 일상을 소개합니다.

4학년 2학기 때의 나 페이지에서는 제가 4학년 2학기 학생이라고 가정하고, 그동안 수행한 프로젝트, 보유 기술, 정보보호 학습 경험, 문제 해결 경험, 협업 및 기록 방식을 포트폴리오 형태로 정리했습니다.

---

## 개발 목적

이 프로젝트의 가장 큰 목적은 HTML, CSS, JavaScript와 Spring Boot의 기본 구조를 직접 사용해보는 것입니다.

프론트엔드에서는 HTML로 화면 구조를 만들고, CSS로 디자인을 적용했으며, JavaScript로 스크롤 등장 효과와 TOP 버튼 기능을 구현했습니다.

백엔드에서는 Spring Boot Controller를 사용해 URL 요청을 처리하고, Thymeleaf를 사용해 Controller에서 전달한 데이터를 화면에 출력했습니다.

또한 Lombok을 사용해 간단한 DTO 클래스의 코드를 줄였습니다.

---

## 주요 기능

### 1. 메인 페이지

메인 페이지에서는 두 개의 카드를 통해 페이지를 이동할 수 있습니다.

* 현재의 나
* 4학년 2학기 때의 나

각 카드는 클릭하면 해당 페이지로 이동하며, 마우스를 올리면 카드에 포함된 주요 항목들이 미리보기 목록으로 나타납니다.

---

### 2. 현재의 나 페이지

현재의 나 페이지는 현재 대학생으로서의 저를 소개하는 페이지입니다.

구성 내용은 다음과 같습니다.

* 현재의 나 소개
* 학교생활
* 현재 공부 중인 것
* 진행 중인 프로젝트
* 알바 경력 소개
* 취미와 일상

---

### 3. 4학년 2학기 때의 나 페이지

4학년 2학기 때의 나 페이지는 미래 계획을 작성하는 페이지가 아니라, 실제 4학년 2학기 학생이라고 가정하고 이미 수행한 경험과 할 수 있는 역량을 정리한 포트폴리오 페이지입니다.

구성 내용은 다음과 같습니다.

* 4학년 2학기의 나 소개
* 보유 기술 스택
* 수행한 대표 프로젝트
* 정보보호 학습 및 실습 경험
* 문제 해결 경험
* 협업 및 기록 방식
* 자격증 및 활동 이력
* 포트폴리오 정리

---

### 4. GitHub README 자동 불러오기 기능

4학년 2학기 때의 나 페이지에서는 GitHub 공개 저장소의 README.md 내용을 불러와 프로젝트 카드로 표시하는 기능을 구현했습니다.

이 기능은 GitHub API나 로그인 기능을 사용하는 방식이 아니라, 공개 저장소의 README.md 원본 파일 주소를 Java 코드에서 HTTP 요청으로 읽어오는 방식입니다.

가져온 README 내용에서 제목과 앞부분 설명을 추출해 프로젝트 제목과 설명으로 사용하고, Thymeleaf의 `th:each`를 이용해 화면에 반복 출력합니다.

---

### 5. 스크롤 등장 효과

페이지의 각 섹션은 처음에는 보이지 않다가, 사용자가 스크롤해서 해당 영역에 도달하면 아래에서 위로 자연스럽게 나타납니다.

이 기능은 JavaScript에서 스크롤 위치를 확인하고, 특정 섹션에 CSS 클래스를 추가하는 방식으로 구현했습니다.

---

### 6. 섹션 이동 기능

상세 페이지에는 각 섹션으로 이동할 수 있는 메뉴가 있습니다.

메뉴를 클릭하면 해당 섹션 위치로 부드럽게 이동합니다.

---

### 7. TOP 버튼

페이지를 어느 정도 아래로 스크롤하면 오른쪽 아래에 TOP 버튼이 나타납니다.

TOP 버튼을 클릭하면 페이지 맨 위로 이동합니다.

---

## 사용 기술

### Backend

* Java
* Spring Boot
* Spring MVC Controller
* Thymeleaf
* Lombok

### Frontend

* HTML
* CSS
* JavaScript

### Build Tool

* Gradle

---

## 프로젝트 구조

```text
src/main/java/com/example/portfolio
├── PortfolioApplication.java
├── controller
│   ├── HomeController.java
│   ├── CurrentController.java
│   └── FutureController.java
├── dto
│   ├── CardItem.java
│   ├── SectionItem.java
│   └── ProjectSummary.java
└── service
    └── GitHubService.java

src/main/resources/templates
├── index.html
├── current.html
└── future.html

src/main/resources/static/css
└── style.css

src/main/resources/static/js
└── main.js
```

---

## 주요 파일 설명

### PortfolioApplication.java

Spring Boot 애플리케이션을 실행하는 메인 클래스입니다.

---

### HomeController.java

메인 페이지 요청을 처리하는 Controller입니다.

`/` 주소로 접속하면 `index.html` 화면을 보여줍니다.

---

### CurrentController.java

현재의 나 페이지 요청을 처리하는 Controller입니다.

`/current` 주소로 접속하면 `current.html` 화면을 보여줍니다.

---

### FutureController.java

4학년 2학기 때의 나 페이지 요청을 처리하는 Controller입니다.

`/future` 주소로 접속하면 `future.html` 화면을 보여줍니다.

또한 GitHubService에서 가져온 프로젝트 요약 데이터를 Model에 담아 Thymeleaf 화면으로 전달합니다.

---

### GitHubService.java

GitHub 공개 저장소의 README.md를 읽어오는 Service 클래스입니다.

README에서 프로젝트 제목과 설명을 간단히 추출해 `ProjectSummary` 객체 목록으로 반환합니다.

---

### CardItem.java

메인 페이지 카드 정보를 담는 DTO 클래스입니다.

카드 제목, 설명, 이동 주소, 미리보기 목록 등을 저장합니다.

---

### SectionItem.java

각 페이지의 섹션 정보를 담는 DTO 클래스입니다.

섹션 제목과 내용을 저장하고, Thymeleaf에서 반복 출력할 때 사용합니다.

---

### ProjectSummary.java

GitHub 프로젝트 요약 정보를 담는 DTO 클래스입니다.

프로젝트 제목, 설명, GitHub 저장소 링크를 저장합니다.

---

## 실행 방법

1. 프로젝트를 IntelliJ IDEA에서 엽니다.

2. Gradle이 자동으로 로드될 때까지 기다립니다.

3. `PortfolioApplication.java` 파일을 실행합니다.

4. 브라우저에서 아래 주소로 접속합니다.

```text
http://localhost:8080
```

상세 페이지는 아래 주소로 접속할 수 있습니다.

```text
http://localhost:8080/current
http://localhost:8080/future
```

---

## 구현하면서 중점적으로 생각한 부분

이 프로젝트는 고급 기능을 많이 넣는 것보다, 각 코드가 왜 필요한지 설명할 수 있도록 단순한 구조로 만드는 것에 집중했습니다.

Controller는 URL 요청을 처리하고, Model은 데이터를 Thymeleaf로 전달하며, Thymeleaf는 전달받은 데이터를 HTML 화면에 출력합니다.

CSS는 카드 디자인, hover 효과, 반응형 레이아웃을 담당하고, JavaScript는 스크롤 등장 효과와 TOP 버튼 기능을 담당합니다.

---

## 발표 시 설명 포인트

* Spring Boot Controller가 URL 요청을 처리하는 방식
* Model을 사용해 데이터를 Thymeleaf로 전달하는 방식
* Thymeleaf의 `th:text`, `th:each`, `th:href` 사용 위치
* Lombok을 사용해 DTO 코드를 줄인 이유
* CSS의 `:hover`로 카드 미리보기 목록을 표시하는 방식
* JavaScript로 스크롤 등장 효과와 TOP 버튼을 구현한 방식
* GitHub README.md를 읽어와 프로젝트 카드로 표시하는 방식

---

## 마무리

이 프로젝트를 통해 프론트엔드의 기본 구조와 Spring Boot 기반 백엔드의 흐름을 함께 학습할 수 있었습니다.

또한 단순히 화면을 만드는 것에서 끝나지 않고, Controller, DTO, Service, Thymeleaf가 각각 어떤 역할을 하는지 이해하는 데 초점을 맞췄습니다.

package com.example.portfolio.controller;

import com.example.portfolio.dto.CardItem;
import com.example.portfolio.service.GitHubService;
import org.junit.jupiter.api.Test;
import org.springframework.ui.ConcurrentModel;
import org.springframework.ui.Model;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

class PortfolioControllerTest {

    @Test
    void homeControllerReturnsIndexWithCards() {
        Model model = new ConcurrentModel();
        String viewName = new HomeController().home(model);

        assertThat(viewName).isEqualTo("index");
        assertThat(model.getAttribute("pageTitle")).isEqualTo("나만의 포트폴리오 웹사이트");
        assertThat(model.getAttribute("cardList")).isNotNull();

        @SuppressWarnings("unchecked")
        List<CardItem> cardList = (List<CardItem>) model.getAttribute("cardList");
        CardItem currentCard = cardList.stream()
                .filter(card -> "/current".equals(card.getLink()))
                .findFirst()
                .orElseThrow();

        assertThat(currentCard.getPreviewItems()).containsExactly(
                "학교생활",
                "현재 공부 중인 것",
                "진행 중인 프로젝트",
                "알바 경력 소개",
                "취미와 일상"
        );
    }

    @Test
    void currentControllerReturnsCurrentWithSections() {
        Model model = new ConcurrentModel();
        String viewName = new CurrentController().current(model);

        assertThat(viewName).isEqualTo("current");
        assertThat(model.getAttribute("pageTitle")).isEqualTo("현재의 나");
        assertThat(model.getAttribute("sectionList")).isNotNull();

        @SuppressWarnings("unchecked")
        List<?> sectionList = (List<?>) model.getAttribute("sectionList");
        assertThat(sectionList).hasSize(5);
        assertThat(sectionList.get(0))
                .extracting("id")
                .isEqualTo("school-life");
    }

    @Test
    void futureControllerReturnsFutureWithSections() {
        Model model = new ConcurrentModel();
        String viewName = new FutureController(new GitHubService()).future(model);

        assertThat(viewName).isEqualTo("future");
        assertThat(model.getAttribute("pageTitle")).isEqualTo("4학년 2학기 때의 나");
        assertThat(model.getAttribute("sectionList")).isNotNull();
        assertThat(model.getAttribute("githubProjects")).isNotNull();
    }

    @Test
    void githubIconUsesGitHubBlackBackground() throws IOException {
        String css;
        try (var input = getClass().getResourceAsStream("/static/css/style.css")) {
            assertThat(input).isNotNull();
            css = new String(input.readAllBytes(), StandardCharsets.UTF_8);
        }

        assertThat(css).contains(".github-icon-link {");
        assertThat(css).contains("background: #181717;");
        assertThat(css).contains("box-shadow: 0 8px 20px rgba(24, 23, 23, 0.20);");
    }
}

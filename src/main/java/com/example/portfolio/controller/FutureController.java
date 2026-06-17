package com.example.portfolio.controller;

import com.example.portfolio.dto.SectionItem;
import com.example.portfolio.dto.ProjectSummary;
import com.example.portfolio.service.GitHubService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class FutureController {

    private final GitHubService gitHubService;

    public FutureController(GitHubService gitHubService) {
        this.gitHubService = gitHubService;
    }

    // 이 컨트롤러는 4학년 2학기 페이지 요청을 처리합니다.
    @GetMapping("/future")
    public String future(Model model) {
        List<SectionItem> sectionList = List.of(
                new SectionItem(
                        "future-intro",
                        "4학년 2학기의 나 소개",
                        """
                        정보보호학과 4학년으로서 개발과 보안에 대한 전공 지식을 쌓고, 여러 프로젝트를 통해 실무에 가까운 경험을 넓혀온 상태입니다.
                        하나의 분야에만 머무르기보다 웹 개발, 백엔드, 데이터베이스, 보안 분석, AI 활용 등 다양한 영역을 경험하며 정보보호 분야를 폭넓게 이해하고자 노력했습니다.
                        """
                ),
                new SectionItem(
                        "skills",
                        "보유 기술 스택",
                        """
                        Java와 Spring Boot를 활용한 기본적인 백엔드 개발 경험이 있으며, HTML, CSS, JavaScript를 활용해 웹 화면을 구성할 수 있습니다.
                        또한 GitHub를 통한 코드 관리와 Linux 환경에서의 기본 명령어 사용 경험이 있고, 프로젝트에서 필요한 DB 설계와 데이터 처리 흐름도 학습했습니다.
                        """
                ),
                new SectionItem(
                        "representative-project",
                        "수행한 대표 프로젝트",
                        """
                        대표 프로젝트로는 한이음에서 진행한 시각장애인을 위한 승하차 지원 서비스 프로젝트가 있습니다.
                        해당 프로젝트에서는 PM 역할과 함께 백엔드 API 및 DB 관련 역할을 맡아 서비스 흐름을 구성했습니다.

                        또한 보안 동아리에서는 LLM 기반 금융 서비스 API 취약점 자동 탐지 및 보고서 생성 플랫폼 프로젝트를 진행했습니다.
                        이 프로젝트에서는 프론트엔드 역할을 맡아 사용자가 취약점 탐지 결과와 보고서를 확인할 수 있는 화면 구성을 담당했습니다.

                        개인 프로젝트로는 사용자가 상품명이나 쇼핑몰 링크를 입력하면 가격 흐름을 확인하고 구매 타이밍을 판단할 수 있는 가격 비교 웹 서비스를 제작했습니다.
                        단순히 기능을 구현하는 것에서 끝내지 않고, 실제 웹 환경에 배포하면서 서비스 구조와 배포 과정도 경험했습니다.
                        """
                ),
                new SectionItem(
                        "security-study",
                        "정보보호 학습 및 실습 경험",
                        """
                        정보보호 전공 수업을 통해 암호학, 네트워크, 시스템 보안, 웹 보안과 같은 기본 개념을 학습했습니다.
                        이론을 단순히 암기하는 것에 그치지 않고, 리눅스 실습과 웹 개발 프로젝트를 함께 진행하며 보안 개념이 실제 서비스 구조 안에서 어떻게 연결되는지 이해하려고 노력했습니다.
                        """
                ),
                new SectionItem(
                        "problem-solving",
                        "문제 해결 경험",
                        """
                        프로젝트를 진행하면서 기술적인 문제뿐만 아니라 팀원 간 의견 차이도 자연스럽게 발생했습니다.
                        저는 의견 충돌을 단순한 갈등으로 보기보다 프로젝트의 방향을 더 나은 쪽으로 조정하는 과정이라고 생각했습니다.
                        그래서 상대방의 의견을 먼저 듣고, 감정보다는 프로젝트의 목적과 결과물을 기준으로 판단하려고 했습니다.
                        이러한 경험을 통해 문제 상황에서 대화를 통해 조율하는 방법과 팀 안에서 협업하는 태도를 배울 수 있었습니다.
                        """
                ),
                new SectionItem(
                        "collaboration",
                        "협업 및 기록 방식",
                        """
                        협업 과정에서는 팀원 간 의견을 정리하고, 필요한 내용을 기록하며 프로젝트 방향을 맞춰가는 방식을 중요하게 생각했습니다.
                        회의나 작업 중 나온 의견을 그냥 지나치지 않고 정리해두면 이후에 기능을 수정하거나 발표 자료를 준비할 때 도움이 되었습니다.
                        또한 문제가 생겼을 때 원인과 해결 과정을 기록해두며 같은 실수를 반복하지 않으려 했습니다.
                        """
                ),
                new SectionItem(
                        "activities",
                        "자격증 및 활동 이력",
                        """
                        정보보안기사 자격증과 AWS SAA 자격증을 취득하며 보안과 클라우드 분야의 기초 역량을 쌓았습니다.
                        또한 CTF 출전 경험과 BoB 수료 경험을 통해 전공 수업 외에도 보안 분야에 대한 실습 경험과 활동 이력을 넓혔습니다.
                        """
                ),
                new SectionItem(
                        "portfolio-summary",
                        "포트폴리오 정리",
                        """
                        4학년 2학기까지의 포트폴리오는 단순히 참여한 프로젝트를 나열하는 것이 아니라, 각 프로젝트에서 맡은 역할과 배운 점을 중심으로 정리했습니다.
                        개발, 보안, 협업 경험을 함께 보여줄 수 있도록 구성하고, 프로젝트마다 사용한 기술, 해결한 문제, 결과물을 확인할 수 있게 정리했습니다.
                        """
                )
        );

        model.addAttribute("pageTitle", "4학년 2학기 때의 나");
        model.addAttribute("pageSubtitle", "대학 생활 동안 수행한 경험과 할 수 있는 역량을 정리한 포트폴리오입니다.");
        model.addAttribute("sectionList", sectionList);

        List<ProjectSummary> githubProjects = gitHubService.getProjectSummaries();
        // 이 목록은 future.html에서 th:each로 반복 출력됩니다.
        model.addAttribute("githubProjects", githubProjects);

        return "future";
    }
}

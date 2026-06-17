package com.example.portfolio.controller;

import com.example.portfolio.dto.CardItem;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class HomeController {

    // 이 컨트롤러는 메인 페이지 요청을 처리합니다.
    @GetMapping("/")
    public String home(Model model) {
        List<CardItem> cardList = List.of(
                new CardItem(
                        "현재의 나",
                        "지금 배우고 경험하고 있는 대학 생활을 소개합니다.",
                        "/current",
                        List.of(
                                "학교생활",
                                "현재 공부 중인 것",
                                "진행 중인 프로젝트",
                                "알바 경력 소개",
                                "취미와 일상"
                        )
                ),
                new CardItem(
                        "4학년 2학기 때의 나",
                        "대학 생활 동안 쌓은 경험과 역량을 정리했습니다.",
                        "/future",
                        List.of(
                                "4학년 2학기의 나 소개",
                                "보유 기술 스택",
                                "수행한 대표 프로젝트",
                                "정보보호 학습 및 실습 경험",
                                "문제 해결 경험",
                                "협업 및 기록 방식",
                                "자격증 및 활동 이력",
                                "포트폴리오 정리"
                        )
                )
        );

        model.addAttribute("pageTitle", "나만의 포트폴리오 웹사이트");
        model.addAttribute(
                "pageSubtitle",
                "현재의 나와 4학년 2학기 때의 나를 비교해서 보여주는 개인 포트폴리오입니다."
        );
        // 이 리스트는 Thymeleaf에서 반복 출력됩니다.
        model.addAttribute("cardList", cardList);

        return "index";
    }
}

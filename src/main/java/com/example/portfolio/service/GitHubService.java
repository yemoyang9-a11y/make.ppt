package com.example.portfolio.service;

import com.example.portfolio.dto.ProjectSummary;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

// GitHub 공개 저장소의 README를 가져오는 서비스입니다.
@Service
public class GitHubService {

    // GitHub 사용자명과 저장소 이름은 이 부분에서 수정합니다.
    private final String githubUserName = "yemoyang9-a11y";

    private final List<String> repositoryNames = List.of(
            "make.ppt"
    );

    private final RestTemplate restTemplate = new RestTemplate();

    public List<ProjectSummary> getProjectSummaries() {
        List<ProjectSummary> projectSummaries = new ArrayList<>();

        for (String repositoryName : repositoryNames) {
            String repositoryUrl = "https://github.com/"
                    + githubUserName + "/" + repositoryName;

            String readmeText = getReadmeText(repositoryName);

            if (readmeText == null) {
                projectSummaries.add(new ProjectSummary(
                        repositoryName,
                        "README를 불러오지 못했습니다.",
                        repositoryUrl
                ));
            } else {
                String title = getTitle(readmeText, repositoryName);
                String description = getDescription(readmeText);

                projectSummaries.add(new ProjectSummary(
                        title,
                        description,
                        repositoryUrl
                ));
            }
        }

        return projectSummaries;
    }

    private String getReadmeText(String repositoryName) {
        // main 브랜치에서 README를 먼저 가져옵니다.
        String mainUrl = "https://raw.githubusercontent.com/"
                + githubUserName + "/" + repositoryName + "/main/README.md";

        try {
            return restTemplate.getForObject(mainUrl, String.class);
        } catch (Exception mainException) {
            // main에서 실패하면 master 브랜치도 시도합니다.
            String masterUrl = "https://raw.githubusercontent.com/"
                    + githubUserName + "/" + repositoryName + "/master/README.md";

            try {
                return restTemplate.getForObject(masterUrl, String.class);
            } catch (Exception masterException) {
                return null;
            }
        }
    }

    private String getTitle(String readmeText, String repositoryName) {
        String[] lines = readmeText.split("\\R");

        for (String line : lines) {
            String trimmedLine = line.trim();

            if (trimmedLine.startsWith("# ")) {
                return trimmedLine.substring(2).trim();
            }
        }

        return repositoryName;
    }

    private String getDescription(String readmeText) {
        // README에서 첫 번째 제목을 제외한 전체 내용을 설명으로 사용합니다.
        String[] lines = readmeText.split("\\R");
        String description = "";
        boolean firstTitleRemoved = false;

        for (String line : lines) {
            String trimmedLine = line.trim();

            if (!firstTitleRemoved && trimmedLine.startsWith("# ")) {
                firstTitleRemoved = true;
                continue;
            }

            description = description + line + "\n";
        }

        description = description.trim();

        if (description.isEmpty()) {
            return "README에 프로젝트 설명이 없습니다.";
        }

        return description;
    }
}

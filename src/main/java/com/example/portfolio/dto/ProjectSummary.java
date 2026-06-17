package com.example.portfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ProjectSummary {

    private String title;
    private String description;
    private String repositoryUrl;
}

package com.example.portfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class CardItem {

    private String title;
    private String description;
    private String link;
    private List<String> previewItems;
}

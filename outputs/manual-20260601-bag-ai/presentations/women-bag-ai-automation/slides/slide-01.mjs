import { COLORS, addBox, addCircle, addFooter, addKicker, addLine, addNotes, addPill, addText, setBackground } from "./shared.mjs";

export async function slide01(presentation, ctx) {
  const slide = presentation.slides.add();
  setBackground(slide, COLORS.deep);

  addKicker(slide, ctx, "01", "AI AUTOMATION PROPOSAL", 70, 52, { light: true });
  addText(slide, ctx, "가방몰의 반복 업무를\n매출 회수 흐름으로 바꿉니다", 70, 118, 690, 150, {
    size: 40,
    bold: true,
    color: COLORS.white,
  });
  addText(slide, ctx, "국내 소형 D2C 여성용 가방 온라인몰을 위한\n10~15분 AI 자동화 컨설팅 제안서", 74, 292, 600, 64, {
    size: 20,
    color: "#FFFFFFCC",
  });
  addPill(slide, ctx, "4주 진단 + 작은 자동화부터 적용", 74, 390, 310, {
    fill: COLORS.action,
    color: COLORS.white,
    h: 42,
    size: 15,
  });

  addCircle(slide, ctx, 980, 280, 180, { fill: "#D4E9E214", line: { style: "solid", fill: "#FFFFFF22", width: 1 } });
  addBox(slide, ctx, 780, 170, 340, 448, {
    fill: "#FFFFFF12",
    line: { style: "solid", fill: "#FFFFFF30", width: 1 },
  });
  addBox(slide, ctx, 830, 218, 240, 250, {
    fill: COLORS.cream,
    line: { style: "solid", fill: "#FFFFFF66", width: 1 },
  });
  addLine(slide, ctx, 882, 250, 135, 0, { fill: COLORS.main, width: 6 });
  addBox(slide, ctx, 866, 286, 168, 140, {
    fill: COLORS.white,
    line: { style: "solid", fill: "#D8D5CE", width: 1 },
  });
  addLine(slide, ctx, 895, 292, 110, 54, { fill: COLORS.gold, width: 4 });
  addText(slide, ctx, "문의\n주문\n반품\n보고", 918, 310, 80, 96, {
    size: 19,
    bold: true,
    color: COLORS.deep,
    align: "center",
  });
  ["상품 등록", "CS 초안", "주간 리포트"].forEach((label, index) => {
    const y = 486 + index * 44;
    addBox(slide, ctx, 790 + index * 76, y, 150, 32, {
      fill: index === 0 ? COLORS.mint : "#FFFFFF22",
      line: { style: "solid", fill: "#FFFFFF44", width: 1 },
    });
    addText(slide, ctx, label, 804 + index * 76, y + 8, 122, 16, {
      size: 12,
      bold: true,
      color: index === 0 ? COLORS.main : COLORS.white,
      align: "center",
      valign: "middle",
    });
  });

  addFooter(slide, ctx, "자료: deck_project/design.md, deck_project/business_context.md, OpenAI Codex", 1, { light: true });
  addNotes(slide, `
발표 가이드:
- 오늘 제안은 AI 도구 소개가 아니라 여성용 가방몰의 반복 운영 업무를 줄이는 제안입니다.
- 소형 D2C몰은 상품, 문의, 반품, 콘텐츠, 보고가 한두 명에게 몰리기 쉽습니다.
- 핵심은 4주 안에 작은 자동화부터 실제 운영에 붙이는 것입니다.
`);
  return slide;
}

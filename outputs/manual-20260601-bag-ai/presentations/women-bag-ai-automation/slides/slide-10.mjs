import { COLORS, addBox, addFooter, addLine, addNotes, addPill, addSimpleCard, addText, addTitle, setBackground } from "./shared.mjs";

export async function slide10(presentation, ctx) {
  const slide = presentation.slides.add();
  setBackground(slide, COLORS.deep);
  addTitle(slide, ctx, "10", "실행 로드맵", "4주 안에 작은 자동화부터 운영에 붙입니다", "다음 단계는 큰 시스템 구축이 아니라, 자동화할 반복 업무를 함께 고르는 첫 진단입니다.", {
    light: true,
    messageWidth: 780,
  });

  const weeks = [
    ["1주차", "반복 업무 진단", "문의·상품·보고 업무량 측정"],
    ["2주차", "흐름 설계", "초안·승인·기록 순서 확정"],
    ["3주차", "도구 연결", "n8n + 시트 + AI 초안 연결"],
    ["4주차", "운영 적용", "가이드와 개선 후보 전달"],
  ];
  weeks.forEach((week, i) => {
    const x = 84 + i * 286;
    addBox(slide, ctx, x, 246, 230, 156, { fill: "#FFFFFF12", line: { style: "solid", fill: "#FFFFFF35", width: 1 } });
    addText(slide, ctx, week[0], x + 24, 270, 180, 20, { size: 15, bold: true, color: COLORS.gold, align: "center" });
    addText(slide, ctx, week[1], x + 22, 306, 186, 26, { size: 21, bold: true, color: COLORS.white, align: "center" });
    addText(slide, ctx, week[2], x + 24, 348, 182, 38, { size: 13, color: "#FFFFFFB8", align: "center" });
    if (i < weeks.length - 1) addLine(slide, ctx, x + 230, 324, 56, 0, { fill: COLORS.gold, width: 3 });
  });

  addText(slide, ctx, "오늘 결정할 것", 96, 466, 220, 28, { size: 24, bold: true, color: COLORS.white });
  const asks = [
    ["업무 후보 3~5개 선정", "CS, 상품등록, 보고 중 우선순위 결정"],
    ["도구 접근 권한 확인", "쇼핑몰, 시트, 메신저, 문서 권한"],
    ["첫 진단 미팅 확정", "60~90분 운영 흐름 인터뷰"],
  ];
  asks.forEach((ask, i) => {
    addSimpleCard(slide, ctx, 96 + i * 366, 510, 318, 110, ask[0], ask[1], {
      fill: COLORS.white,
      line: COLORS.white,
      titleColor: COLORS.main,
      titleSize: 18,
      bodySize: 13,
    });
  });
  addPill(slide, ctx, "파일럿 진행 승인 요청", 902, 72, 234, {
    fill: COLORS.action,
    color: COLORS.white,
    h: 42,
    size: 15,
  });

  addFooter(slide, ctx, "자료: deck_project/deck_brief.md, 고객사 진단 후 상세 일정 확정", 10, { light: true });
  addNotes(slide, `
발표 가이드:
- 마지막 장은 기대 효과와 다음 행동을 분명히 요청합니다.
- 4주 과정은 진단, 설계, 연결, 운영 적용으로 설명합니다.
- 지금 필요한 결정은 전체 시스템 구축 승인이 아니라 첫 진단 미팅과 업무 후보 선정입니다.
- 발표 후에는 어떤 업무부터 자동화할지 3~5개 후보를 받는 것이 목표입니다.
`);
  return slide;
}

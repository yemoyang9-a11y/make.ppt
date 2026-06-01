import { COLORS, addBox, addCircle, addFooter, addLine, addNotes, addPill, addText, addTitle, setBackground } from "./shared.mjs";

export async function slide04(presentation, ctx) {
  const slide = presentation.slides.add();
  setBackground(slide, COLORS.cream);
  addTitle(slide, ctx, "04", "고객 이탈 지점", "느린 답변과 불분명한 정보가 구매 전환을 놓치게 합니다", "가방 구매는 비교와 확인이 많은 품목입니다. 답변이 늦거나 반품 기준이 흐리면 장바구니 이후 고객이 멈춥니다.");

  const steps = [
    ["상품조회", "상세 정보 확인"],
    ["문의", "사이즈·배송 질문"],
    ["장바구니", "가격·배송비 비교"],
    ["결제", "구매 완료"],
  ];
  const startX = 104;
  for (let i = 0; i < steps.length; i += 1) {
    const x = startX + i * 285;
    addCircle(slide, ctx, x + 78, 338, 52, { fill: i === 3 ? COLORS.main : COLORS.white, line: { style: "solid", fill: i === 3 ? COLORS.main : COLORS.beige, width: 2 } });
    addText(slide, ctx, String(i + 1), x + 53, 313, 50, 42, {
      size: 26,
      bold: true,
      color: i === 3 ? COLORS.white : COLORS.main,
      align: "center",
      valign: "middle",
      face: "Arial",
    });
    addText(slide, ctx, steps[i][0], x + 8, 404, 140, 24, {
      size: 19,
      bold: true,
      color: COLORS.black,
      align: "center",
    });
    addText(slide, ctx, steps[i][1], x - 12, 434, 180, 28, {
      size: 13,
      color: COLORS.gray,
      align: "center",
    });
    if (i < steps.length - 1) {
      addLine(slide, ctx, x + 132, 338, 160, 0, { fill: "#B8C7BE", width: 3 });
      ctx.addShape(slide, {
        geometry: "triangle",
        x: x + 286,
        y: 329,
        w: 18,
        h: 18,
        fill: "#B8C7BE",
        line: { style: "solid", fill: COLORS.transparent, width: 0 },
      });
    }
  }

  addBox(slide, ctx, 312, 214, 210, 72, {
    fill: COLORS.white,
    line: { style: "solid", fill: COLORS.gold, width: 2 },
  });
  addText(slide, ctx, "느린 응답", 336, 230, 160, 22, { size: 19, bold: true, color: COLORS.deep, align: "center" });
  addText(slide, ctx, "구매 전 질문이 대기", 334, 256, 166, 16, { size: 11, color: COLORS.gray, align: "center" });

  addBox(slide, ctx, 590, 492, 304, 72, {
    fill: COLORS.deep,
    line: { style: "solid", fill: COLORS.transparent, width: 0 },
  });
  addText(slide, ctx, "장바구니 이탈 평균 70.19%", 620, 508, 244, 26, {
    size: 19,
    bold: true,
    color: COLORS.white,
    align: "center",
  });
  addText(slide, ctx, "결제 전 불확실성을 줄여야 합니다", 628, 536, 228, 16, {
    size: 11,
    color: "#FFFFFFB8",
    align: "center",
  });
  addPill(slide, ctx, "반품·환불 문의도 반복 리스크", 900, 510, 240, { fill: COLORS.mint, color: COLORS.main });

  addFooter(slide, ctx, "자료: Baymard Institute, Zendesk CX Trends 2026 Retail, 한국소비자원 의류 온라인쇼핑 피해 주의", 4);
  addNotes(slide, `
발표 가이드:
- 고객 이탈은 마케팅 문제가 아니라 운영 속도 문제이기도 합니다.
- Baymard는 온라인 장바구니 이탈 평균을 70.19%로 제시합니다.
- Zendesk 리테일 자료는 느린 응답과 1차 해결 실패가 고객 경험의 주요 불만이라는 점을 보여줍니다.
- 가방몰은 사이즈, 무게, 수납, 배송, 교환 정보가 명확해야 구매 전 불안을 줄일 수 있습니다.
`);
  return slide;
}

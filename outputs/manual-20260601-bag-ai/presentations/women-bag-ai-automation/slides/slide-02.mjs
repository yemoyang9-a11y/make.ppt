import { COLORS, addFooter, addMetricCard, addNotes, addPill, addTitle, addBox, addText, setBackground } from "./shared.mjs";

export async function slide02(presentation, ctx) {
  const slide = presentation.slides.add();
  setBackground(slide, COLORS.cream);
  addTitle(slide, ctx, "02", "시장 신호", "패션 온라인몰은 이미 모바일 중심 경쟁입니다", "가방 카테고리도 모바일 쇼핑 비중이 높아, 빠른 응대와 명확한 상품 정보가 매출 방어선이 됩니다.");

  addMetricCard(slide, ctx, 72, 230, 330, 250, "24.1조원", "2026년 1월 온라인쇼핑 거래액", "국내 온라인쇼핑 전체 규모. 전년동월 대비 8.6% 증가.", {
    valueSize: 35,
  });
  addMetricCard(slide, ctx, 474, 230, 330, 250, "4.8조원", "패션 상품군 거래액", "의복, 신발, 가방, 패션용품 등 패션 상품군 합계.", {
    valueSize: 35,
  });
  addMetricCard(slide, ctx, 876, 230, 330, 250, "68.4%", "가방 모바일 거래 비중", "가방 구매 여정은 모바일에서 시작되고 문의도 모바일 채널로 몰립니다.", {
    valueSize: 35,
    valueColor: COLORS.gold,
  });

  addBox(slide, ctx, 178, 518, 924, 88, {
    fill: COLORS.deep,
    line: { style: "solid", fill: COLORS.transparent, width: 0 },
  });
  addText(slide, ctx, "해석: 모바일 상세페이지와 문의 응대가 느리면, 광고비로 데려온 고객이 구매 전에 빠져나갑니다.", 210, 540, 860, 46, {
    size: 20,
    bold: true,
    color: COLORS.white,
    align: "center",
    valign: "middle",
  });
  addPill(slide, ctx, "운영 자동화의 첫 목표는 응답 속도와 상품정보 품질입니다", 360, 610, 560, {
    fill: COLORS.mint,
    color: COLORS.main,
  });

  addFooter(slide, ctx, "자료: 통계청, 2026년 1월 온라인쇼핑동향 보도자료", 2);
  addNotes(slide, `
발표 가이드:
- 시장 설명은 길게 하지 않고, 온라인·모바일 중심이라는 사실만 짚습니다.
- 2026년 1월 기준 온라인쇼핑 거래액은 24조 1,004억 원, 패션 상품군은 4조 8,025억 원입니다.
- 가방 모바일 거래 비중 68.4%는 모바일 문의와 상세페이지 품질이 중요하다는 근거입니다.
- 그래서 자동화의 출발점은 고객이 묻는 내용을 빠르게 정리하고, 상품 정보를 일관되게 만드는 일입니다.
`);
  return slide;
}

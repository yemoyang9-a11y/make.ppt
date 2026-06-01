import { COLORS, addBox, addFooter, addNotes, addPill, addSimpleCard, addText, addTitle, setBackground } from "./shared.mjs";

export async function slide06(presentation, ctx) {
  const slide = presentation.slides.add();
  setBackground(slide, COLORS.cream);
  addTitle(slide, ctx, "06", "Codex 활용안", "Codex는 상품·문서·자동화 설계를 빠르게 정리합니다", "운영자가 반복해서 쓰는 문서와 규칙을 구조화하고, 자동화에 필요한 초안과 스크립트까지 연결합니다.");

  addBox(slide, ctx, 76, 238, 1128, 314, { fill: COLORS.white, line: { style: "solid", fill: COLORS.beige, width: 1 } });
  const items = [
    ["상품정보 표준안", "소재, 크기, 무게, 수납, 착용 상황을 같은 순서로 정리", "01"],
    ["CS 답변 템플릿", "배송·재입고·교환 문의를 상황별 초안으로 준비", "02"],
    ["주간 보고서 초안", "주문, 재고, 문의, 반품 흐름을 한 장으로 요약", "03"],
    ["자동화 스크립트", "시트 정리, 파일명 규칙, 간단한 데이터 처리 보조", "04"],
  ];
  for (let i = 0; i < items.length; i += 1) {
    const x = 112 + i * 270;
    addSimpleCard(slide, ctx, x, 284, 226, 216, items[i][0], items[i][1], {
      fill: i === 0 ? COLORS.mint : COLORS.cream,
      line: i === 0 ? COLORS.main : COLORS.beige,
      badge: items[i][2],
      badgeWidth: 54,
      badgeFill: i === 0 ? COLORS.white : COLORS.mint,
      titleSize: 18,
      bodySize: 13,
    });
    addBox(slide, ctx, x + 34, 392, 158, 2, { geometry: "rect", fill: i === 0 ? COLORS.main : COLORS.lightGray });
  }

  addPill(slide, ctx, "업무 운영자가 직접 수정 가능한 문서와 규칙으로 남깁니다", 356, 590, 568, {
    fill: COLORS.deep,
    color: COLORS.white,
    h: 40,
    size: 14,
  });
  addText(slide, ctx, "주의: 환불 승인, 할인 발행, 개인정보 처리처럼 민감한 업무는 AI 초안 + 사람 확인 방식으로 설계합니다.", 170, 632, 940, 24, {
    size: 13,
    color: COLORS.gray,
    align: "center",
  });

  addFooter(slide, ctx, "자료: OpenAI Codex, deck_project/business_context.md", 6);
  addNotes(slide, `
발표 가이드:
- Codex를 개발자 전용 도구로 설명하지 않고, 문서와 자동화 초안을 정리하는 작업 도구로 설명합니다.
- 가방몰에서는 상품 상세 설명 표준화, 문의 답변 초안, 주간 운영 보고서, 간단한 스크립트 보조에 바로 쓸 수 있습니다.
- 민감한 결정은 AI가 바로 실행하지 않고 사람이 승인하도록 둡니다.
- 발표 대상이 기술자가 아니라 운영자라면 "자동화 설계 보조자"라고 설명하면 이해하기 쉽습니다.
`);
  return slide;
}

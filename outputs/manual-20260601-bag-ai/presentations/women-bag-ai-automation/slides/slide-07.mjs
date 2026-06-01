import { COLORS, addFooter, addNotes, addPill, addSimpleCard, addText, addTitle, setBackground } from "./shared.mjs";

export async function slide07(presentation, ctx) {
  const slide = presentation.slides.add();
  setBackground(slide, COLORS.white);
  addTitle(slide, ctx, "07", "자동화 솔루션 3종", "먼저 줄일 업무는 CS, 상품등록, 주간 보고입니다", "소형몰은 큰 시스템보다 반복 빈도가 높고 리스크가 낮은 업무부터 자동화해야 효과가 빠르게 보입니다.");

  const cards = [
    ["CS 분류 / 답변 초안", "배송, 재입고, 색상, 교환 문의를 자동 분류하고 답변 초안을 준비합니다.\n\n효과: 첫 답변 대기 시간을 줄이고 응대 품질을 일정하게 만듭니다.", "문의"],
    ["상품 상세 / 태그 초안", "가방 소재, 크기, 수납, 착용 상황을 같은 형식으로 정리하고 검색 태그를 제안합니다.\n\n효과: 상품 등록 시간을 줄이고 모바일 상세 정보를 선명하게 만듭니다.", "상품"],
    ["재고 / 판매 리포트", "주문, 품절, 문의, 반품 데이터를 주간 보고서 초안으로 정리합니다.\n\n효과: 대표가 매주 숫자를 모으는 시간을 줄입니다.", "보고"],
  ];
  for (let i = 0; i < cards.length; i += 1) {
    const x = 84 + i * 398;
    addSimpleCard(slide, ctx, x, 242, 340, 292, cards[i][0], cards[i][1], {
      fill: i === 1 ? COLORS.cream : COLORS.white,
      line: i === 0 ? COLORS.main : COLORS.beige,
      badge: cards[i][2],
      badgeWidth: 72,
      badgeFill: i === 0 ? COLORS.mint : COLORS.beige,
      titleSize: 22,
      bodySize: 15,
      bodyHeight: 138,
    });
    addPill(slide, ctx, "AI 초안 + 사람 승인", x + 76, 492, 188, {
      fill: i === 0 ? COLORS.deep : COLORS.mint,
      color: i === 0 ? COLORS.white : COLORS.main,
      h: 32,
      size: 12,
    });
  }
  addText(slide, ctx, "우선순위 기준: 반복 빈도 높음 + 매출/고객 경험 영향 큼 + 자동 실행 리스크 낮음", 170, 586, 940, 28, {
    size: 20,
    bold: true,
    color: COLORS.main,
    align: "center",
  });

  addFooter(slide, ctx, "자료: Gorgias Ecommerce Benchmarks, 한국소비자원, 고객사 진단 후 세부 수치 확정", 7);
  addNotes(slide, `
발표 가이드:
- 세 가지 자동화는 고객이 바로 이해할 수 있는 업무 이름으로 설명합니다.
- CS는 문의 응답 속도, 상품등록은 모바일 상세 품질, 주간 보고는 대표의 의사결정 시간을 개선합니다.
- 환불 승인이나 할인 쿠폰 발행은 자동 실행하지 않고 초안과 승인 흐름으로 둡니다.
- 4주 컨설팅에서는 이 중 1~2개를 우선 적용 대상으로 고르는 방식이 현실적입니다.
`);
  return slide;
}

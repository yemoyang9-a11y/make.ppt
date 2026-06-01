import { COLORS, addBox, addCircle, addFooter, addLine, addNotes, addText, addTitle, setBackground } from "./shared.mjs";

export async function slide03(presentation, ctx) {
  const slide = presentation.slides.add();
  setBackground(slide, COLORS.white);
  addTitle(slide, ctx, "03", "운영 병목", "작은 가방몰의 문제는 상품이 아니라 운영 반복입니다", "상품이 늘고 채널이 많아질수록 대표와 운영팀은 같은 질문, 같은 정리, 같은 보고를 반복합니다.");

  addCircle(slide, ctx, 640, 388, 96, { fill: COLORS.deep, line: { style: "solid", fill: COLORS.deep, width: 1 } });
  addText(slide, ctx, "대표 /\n운영팀", 570, 354, 140, 72, {
    size: 23,
    bold: true,
    color: COLORS.white,
    align: "center",
    valign: "middle",
  });

  const nodes = [
    ["상품 등록", "소재·사이즈·색상 설명을 매번 다시 작성", 252, 222],
    ["CS 응대", "배송, 재입고, 교환 질문이 반복 유입", 765, 222],
    ["반품/교환", "정책 확인과 고객 안내가 사람에게 의존", 850, 444],
    ["재고 확인", "채널별 재고와 품절 알림이 늦어짐", 478, 524],
    ["콘텐츠/광고", "후기, 상세문구, 캠페인 소재가 흩어짐", 120, 444],
  ];
  for (const [title, body, x, y] of nodes) {
    addLine(slide, ctx, 640, 388, x + 100 - 640, y + 44 - 388, { fill: "#B8C7BE", width: 2 });
    addBox(slide, ctx, x, y, 200, 88, {
      fill: COLORS.cream,
      line: { style: "solid", fill: COLORS.beige, width: 1 },
    });
    addText(slide, ctx, title, x + 18, y + 16, 164, 22, {
      size: 18,
      bold: true,
      color: COLORS.main,
      align: "center",
    });
    addText(slide, ctx, body, x + 18, y + 42, 164, 30, {
      size: 12,
      color: COLORS.gray,
      align: "center",
    });
  }

  addBox(slide, ctx, 88, 596, 1098, 44, {
    fill: COLORS.mint,
    line: { style: "solid", fill: COLORS.transparent, width: 0 },
  });
  addText(slide, ctx, "자동화의 시작점: 가장 자주 반복되는 질문과 문서부터 표준화합니다.", 116, 608, 1040, 22, {
    size: 18,
    bold: true,
    color: COLORS.main,
    align: "center",
  });
  addFooter(slide, ctx, "자료: deck_project/business_context.md, 서울시전자상거래센터 2024 전자상거래 피해상담 분석", 3);
  addNotes(slide, `
발표 가이드:
- 이 장에서는 운영자의 공감을 얻는 것이 목적입니다.
- 여성용 가방몰은 소재, 수납, 크기, 무게, 배송, 교환 질문이 반복됩니다.
- 반복 질문이 쌓이면 대표나 운영팀이 상품 개발과 마케팅보다 응대와 정리에 시간을 씁니다.
- 자동화는 큰 시스템을 한 번에 바꾸는 것이 아니라 반복되는 업무 덩어리를 고르는 것에서 시작합니다.
`);
  return slide;
}

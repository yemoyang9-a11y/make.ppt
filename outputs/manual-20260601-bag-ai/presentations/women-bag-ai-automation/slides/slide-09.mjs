import { COLORS, addBox, addFooter, addNotes, addPill, addRule, addText, addTitle, setBackground } from "./shared.mjs";

export async function slide09(presentation, ctx) {
  const slide = presentation.slides.add();
  setBackground(slide, COLORS.white);
  addTitle(slide, ctx, "09", "ROI 프레임", "효과는 ‘시간 절감 + 전환 회수 + 반품 리스크 관리’로 봅니다", "실제 금액은 진단 후 입력하되, 의사결정자는 같은 계산식으로 자동화 우선순위를 비교할 수 있습니다.");

  addBox(slide, ctx, 92, 234, 1096, 106, { fill: COLORS.deep, line: { style: "solid", fill: COLORS.deep, width: 1 } });
  addText(slide, ctx, "월 기대효과 = 절감시간 가치 + 전환 회수 가치 + 반품/환불 리스크 감소 - 자동화 운영비", 132, 263, 1016, 32, {
    size: 23,
    bold: true,
    color: COLORS.white,
    align: "center",
  });
  addText(slide, ctx, "※ 고객사의 주문 수, 문의 수, 평균 객단가, 운영 시간을 진단한 뒤 숫자를 확정합니다.", 242, 302, 796, 20, {
    size: 12,
    color: "#FFFFFFB8",
    align: "center",
  });

  const x = 112;
  const y = 382;
  const colW = [270, 230, 230, 320];
  const headers = ["항목", "진단 전", "진단 후 목표", "확인 방법"];
  let cursor = x;
  headers.forEach((h, i) => {
    addBox(slide, ctx, cursor, y, colW[i], 42, { geometry: "rect", fill: i === 0 ? COLORS.main : COLORS.mint, line: { style: "solid", fill: COLORS.white, width: 1 } });
    addText(slide, ctx, h, cursor + 12, y + 12, colW[i] - 24, 18, { size: 14, bold: true, color: i === 0 ? COLORS.white : COLORS.main, align: "center" });
    cursor += colW[i];
  });
  const rows = [
    ["CS 첫 답변", "[현재값 입력]", "2시간 이내 목표", "채널별 첫 답변 시간"],
    ["상품 등록", "[현재값 입력]", "초안 자동 생성", "상품 1개 등록 소요시간"],
    ["주간 보고", "[현재값 입력]", "자동 초안 + 검토", "보고서 작성 시간"],
  ];
  rows.forEach((row, r) => {
    cursor = x;
    row.forEach((cell, c) => {
      addBox(slide, ctx, cursor, y + 42 + r * 54, colW[c], 54, { geometry: "rect", fill: r % 2 === 0 ? COLORS.cream : COLORS.white, line: { style: "solid", fill: COLORS.beige, width: 1 } });
      addText(slide, ctx, cell, cursor + 12, y + 60 + r * 54, colW[c] - 24, 22, {
        size: c === 0 ? 15 : 13,
        bold: c === 0,
        color: c === 2 ? COLORS.main : COLORS.black,
        align: "center",
      });
      cursor += colW[c];
    });
  });
  addRule(slide, ctx, 112, 604, 1050, { fill: COLORS.gold, h: 3 });
  addPill(slide, ctx, "실제 ROI는 첫 진단 미팅에서 숫자 입력 후 계산", 420, 622, 440, {
    fill: COLORS.gold,
    color: COLORS.deep,
  });

  addFooter(slide, ctx, "자료: Gorgias Ecommerce Benchmarks, Baymard Institute, 고객사 운영 데이터 진단 후 확정", 9);
  addNotes(slide, `
발표 가이드:
- 이 장에서는 특정 절감액을 단정하지 않습니다.
- 대신 어떤 숫자를 모으면 ROI를 판단할 수 있는지 프레임을 제시합니다.
- 진단 전에는 현재 첫 답변 시간, 상품 등록 시간, 보고서 작성 시간을 측정합니다.
- 진단 후에는 같은 지표로 개선 여부를 확인합니다.
`);
  return slide;
}

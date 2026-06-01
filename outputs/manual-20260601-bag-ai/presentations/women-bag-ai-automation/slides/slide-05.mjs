import { COLORS, addBox, addFooter, addLine, addNotes, addPill, addText, addTitle, setBackground } from "./shared.mjs";

export async function slide05(presentation, ctx) {
  const slide = presentation.slides.add();
  setBackground(slide, COLORS.white);
  addTitle(slide, ctx, "05", "제안 핵심", "AI 도구가 아니라 ‘반복 업무 흐름’을 자동화합니다", "도구를 하나 더 사는 방식보다, 문의·상품정보·보고가 같은 순서로 처리되게 만드는 것이 먼저입니다.");

  addText(slide, ctx, "Before", 146, 218, 180, 28, { size: 23, bold: true, color: COLORS.red, align: "center" });
  addText(slide, ctx, "After", 892, 218, 180, 28, { size: 23, bold: true, color: COLORS.main, align: "center" });

  const left = [
    ["문의", 118, 282],
    ["담당자 기억", 296, 340],
    ["수기 답변", 118, 398],
    ["보고 누락", 296, 456],
  ];
  for (const [label, x, y] of left) {
    addBox(slide, ctx, x, y, 150, 58, { fill: COLORS.cream, line: { style: "solid", fill: "#E2B7B4", width: 1 } });
    addText(slide, ctx, label, x + 16, y + 18, 118, 22, { size: 17, bold: true, color: COLORS.black, align: "center" });
  }
  addLine(slide, ctx, 268, 311, 52, 42, { fill: COLORS.red, width: 2 });
  addLine(slide, ctx, 296, 398, -54, 28, { fill: COLORS.red, width: 2 });
  addLine(slide, ctx, 268, 426, 60, 42, { fill: COLORS.red, width: 2 });

  addBox(slide, ctx, 504, 306, 270, 160, { fill: COLORS.deep, line: { style: "solid", fill: COLORS.deep, width: 1 } });
  addText(slide, ctx, "반복 업무 흐름\n표준화", 548, 334, 182, 82, { size: 27, bold: true, color: COLORS.white, align: "center" });
  addText(slide, ctx, "정리 → 초안 → 승인 → 기록", 532, 416, 212, 24, { size: 14, color: "#FFFFFFCC", align: "center" });
  addPill(slide, ctx, "사람 승인 포함", 580, 466, 122, { fill: COLORS.gold, color: COLORS.deep, h: 30, size: 12 });

  const right = [
    ["자동 분류", 852, 280],
    ["답변 초안", 1032, 280],
    ["사람 승인", 852, 420],
    ["기록/보고", 1032, 420],
  ];
  for (const [label, x, y] of right) {
    addBox(slide, ctx, x, y, 150, 68, { fill: COLORS.mint, line: { style: "solid", fill: COLORS.main, width: 1 } });
    addText(slide, ctx, label, x + 16, y + 23, 118, 22, { size: 17, bold: true, color: COLORS.main, align: "center" });
  }
  addLine(slide, ctx, 1002, 314, 30, 0, { fill: COLORS.main, width: 3 });
  addLine(slide, ctx, 1107, 348, 0, 72, { fill: COLORS.main, width: 3 });
  addLine(slide, ctx, 1032, 454, -30, 0, { fill: COLORS.main, width: 3 });
  addLine(slide, ctx, 927, 420, 0, -72, { fill: COLORS.main, width: 3 });

  addFooter(slide, ctx, "자료: deck_project/business_context.md, Gorgias Ecommerce Benchmarks", 5);
  addNotes(slide, `
발표 가이드:
- Before는 사람이 기억하고 수기로 처리하는 흐름입니다.
- After는 같은 문의가 들어와도 분류, 초안, 승인, 기록이 같은 순서로 돌아갑니다.
- 여기서 중요한 점은 완전 자동화가 아니라 사람 승인 단계가 포함된 안전한 자동화입니다.
- 이 구조가 잡혀야 Codex나 n8n 같은 도구가 실제 운영 성과로 이어집니다.
`);
  return slide;
}

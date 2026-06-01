import { COLORS, addBox, addCircle, addFooter, addLine, addNotes, addPill, addText, addTitle, setBackground } from "./shared.mjs";

export async function slide08(presentation, ctx) {
  const slide = presentation.slides.add();
  setBackground(slide, COLORS.cream);
  addTitle(slide, ctx, "08", "업무 연결 구조", "n8n이 쇼핑몰·시트·메신저·AI를 연결합니다", "각 도구를 바꾸는 것이 아니라, 이미 쓰는 채널 사이에 자동 처리 흐름을 붙이는 방식으로 시작합니다.");

  const leftTools = ["카페24", "스마트스토어", "카카오채널", "구글시트", "노션"];
  leftTools.forEach((tool, i) => {
    const y = 214 + i * 70;
    addBox(slide, ctx, 86, y, 190, 44, { fill: COLORS.white, line: { style: "solid", fill: COLORS.beige, width: 1 } });
    addText(slide, ctx, tool, 108, y + 12, 146, 20, { size: 16, bold: true, color: COLORS.black, align: "center" });
    addLine(slide, ctx, 276, y + 22, 188, 226 - y, { fill: "#AAB9B0", width: 2 });
  });

  addCircle(slide, ctx, 564, 358, 92, { fill: COLORS.deep, line: { style: "solid", fill: COLORS.deep, width: 1 } });
  addText(slide, ctx, "n8n", 515, 326, 98, 42, { size: 32, bold: true, color: COLORS.white, align: "center", valign: "middle", face: "Arial" });
  addText(slide, ctx, "업무 흐름 연결", 505, 372, 118, 22, { size: 13, color: "#FFFFFFCC", align: "center" });

  addLine(slide, ctx, 656, 358, 126, 0, { fill: COLORS.main, width: 3 });
  addBox(slide, ctx, 806, 274, 196, 168, { fill: COLORS.mint, line: { style: "solid", fill: COLORS.main, width: 1 } });
  addText(slide, ctx, "Codex / AI", 842, 302, 124, 28, { size: 22, bold: true, color: COLORS.main, align: "center", face: "Arial" });
  addText(slide, ctx, "초안 생성\n분류 규칙 정리\n스크립트 보조", 836, 348, 136, 64, { size: 15, color: COLORS.black, align: "center" });

  addLine(slide, ctx, 1002, 358, 84, 0, { fill: COLORS.main, width: 3 });
  addBox(slide, ctx, 1072, 286, 152, 146, { fill: COLORS.white, line: { style: "solid", fill: COLORS.beige, width: 1 } });
  addText(slide, ctx, "운영팀", 1110, 318, 76, 24, { size: 20, bold: true, color: COLORS.deep, align: "center" });
  addText(slide, ctx, "확인\n승인\n수정", 1106, 356, 84, 54, { size: 14, color: COLORS.gray, align: "center" });

  addPill(slide, ctx, "자동 실행 전 민감 업무는 승인 단계로 잠급니다", 376, 566, 530, { fill: COLORS.deep, color: COLORS.white, h: 40 });
  addFooter(slide, ctx, "자료: n8n Docs, n8n AI Workflow Automation, OpenAI Codex", 8);
  addNotes(slide, `
발표 가이드:
- n8n은 여러 도구를 연결해서 반복 작업을 자동으로 실행하게 하는 도구입니다.
- 기존 쇼핑몰, 시트, 메신저를 모두 바꾸자는 제안이 아니라 연결 흐름을 붙이는 제안입니다.
- Codex와 AI는 문서 초안, 분류 규칙, 간단한 자동화 스크립트 보조 역할을 맡습니다.
- 운영팀은 최종 승인과 예외 처리를 담당하므로 과한 자동화를 피할 수 있습니다.
`);
  return slide;
}

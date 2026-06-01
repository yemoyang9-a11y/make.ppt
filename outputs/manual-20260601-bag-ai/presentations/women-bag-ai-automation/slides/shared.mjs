export const COLORS = {
  deep: "#1E3932",
  main: "#006241",
  action: "#00754A",
  mint: "#D4E9E2",
  cream: "#F2F0EB",
  beige: "#EDEBE9",
  white: "#FFFFFF",
  black: "#1B1F1E",
  gray: "#69716D",
  lightGray: "#D8D5CE",
  gold: "#CBA258",
  red: "#B94A48",
  transparent: "#00000000",
};

export const FONT = {
  title: "Malgun Gothic",
  body: "Malgun Gothic",
  num: "Arial",
};

export function setBackground(slide, fill = COLORS.cream) {
  slide.background.fill = fill;
}

export function addText(slide, ctx, text, x, y, w, h, opts = {}) {
  return ctx.addText(slide, {
    text,
    x,
    y,
    w,
    h,
    fontSize: opts.size ?? 22,
    color: opts.color ?? COLORS.black,
    bold: opts.bold ?? false,
    typeface: opts.face ?? FONT.body,
    align: opts.align ?? "left",
    valign: opts.valign ?? "top",
    fill: opts.fill ?? COLORS.transparent,
    line: opts.line ?? { style: "solid", fill: COLORS.transparent, width: 0 },
    insets: opts.insets ?? { left: 0, right: 0, top: 0, bottom: 0 },
    name: opts.name,
  });
}

export function addBox(slide, ctx, x, y, w, h, opts = {}) {
  return ctx.addShape(slide, {
    geometry: opts.geometry ?? "roundRect",
    x,
    y,
    w,
    h,
    fill: opts.fill ?? COLORS.white,
    line: opts.line ?? { style: "solid", fill: COLORS.transparent, width: 0 },
    name: opts.name,
  });
}

export function addRule(slide, ctx, x, y, w, opts = {}) {
  return ctx.addShape(slide, {
    geometry: "rect",
    x,
    y,
    w,
    h: opts.h ?? 2,
    fill: opts.fill ?? COLORS.lightGray,
    line: { style: "solid", fill: COLORS.transparent, width: 0 },
    name: opts.name,
  });
}

export function addLine(slide, ctx, x, y, w, h, opts = {}) {
  return ctx.addShape(slide, {
    geometry: "line",
    x,
    y,
    w,
    h,
    fill: COLORS.transparent,
    line: { style: "solid", fill: opts.fill ?? COLORS.main, width: opts.width ?? 2 },
    name: opts.name,
  });
}

export function addCircle(slide, ctx, cx, cy, r, opts = {}) {
  return ctx.addShape(slide, {
    geometry: "ellipse",
    x: cx - r,
    y: cy - r,
    w: r * 2,
    h: r * 2,
    fill: opts.fill ?? COLORS.mint,
    line: opts.line ?? { style: "solid", fill: COLORS.transparent, width: 0 },
    name: opts.name,
  });
}

export function addKicker(slide, ctx, key, label, x = 64, y = 38, opts = {}) {
  const light = opts.light ?? false;
  const markerColor = opts.markerColor ?? (light ? COLORS.gold : COLORS.action);
  const textColor = opts.color ?? (light ? COLORS.white : COLORS.main);
  ctx.addShape(slide, {
    geometry: "ellipse",
    x,
    y: y + 4,
    w: 10,
    h: 10,
    fill: markerColor,
    line: { style: "solid", fill: COLORS.transparent, width: 0 },
    name: `kicker-${key}-marker`,
  });
  addText(slide, ctx, label, x + 18, y - 1, 260, 20, {
    size: 12,
    color: textColor,
    bold: true,
    valign: "middle",
    name: `kicker-${key}-label`,
  });
}

export function addTitle(slide, ctx, key, kicker, title, message, opts = {}) {
  const light = opts.light ?? false;
  addKicker(slide, ctx, key, kicker, 64, 38, { light });
  addText(slide, ctx, title, 64, 72, 770, 82, {
    size: opts.titleSize ?? 34,
    bold: true,
    color: light ? COLORS.white : COLORS.black,
    face: FONT.title,
  });
  if (message) {
    addText(slide, ctx, message, 66, opts.messageY ?? 164, opts.messageWidth ?? 760, 48, {
      size: opts.messageSize ?? 18,
      color: light ? "#FFFFFFCC" : COLORS.gray,
    });
  }
}

export function addFooter(slide, ctx, source, page, opts = {}) {
  const light = opts.light ?? false;
  addRule(slide, ctx, 64, 670, 1040, { h: 1, fill: light ? "#FFFFFF33" : "#C9C5BC" });
  addText(slide, ctx, source, 64, 682, 1010, 22, {
    size: 9,
    color: light ? "#FFFFFF99" : COLORS.gray,
  });
  addText(slide, ctx, String(page).padStart(2, "0"), 1132, 676, 82, 30, {
    size: 15,
    color: light ? "#FFFFFFCC" : COLORS.main,
    bold: true,
    align: "right",
    face: FONT.num,
  });
}

export function addPill(slide, ctx, text, x, y, w, opts = {}) {
  addBox(slide, ctx, x, y, w, opts.h ?? 34, {
    fill: opts.fill ?? COLORS.mint,
    line: opts.line ?? { style: "solid", fill: COLORS.transparent, width: 0 },
  });
  addText(slide, ctx, text, x + 14, y + 7, w - 28, (opts.h ?? 34) - 12, {
    size: opts.size ?? 13,
    bold: true,
    color: opts.color ?? COLORS.main,
    align: "center",
    valign: "middle",
  });
}

export function addMetricCard(slide, ctx, x, y, w, h, value, label, note, opts = {}) {
  addBox(slide, ctx, x, y, w, h, {
    fill: opts.fill ?? COLORS.white,
    line: { style: "solid", fill: opts.line ?? COLORS.beige, width: 1 },
  });
  addText(slide, ctx, value, x + 24, y + 24, w - 48, 44, {
    size: opts.valueSize ?? 32,
    bold: true,
    color: opts.valueColor ?? COLORS.main,
    face: FONT.num,
  });
  addText(slide, ctx, label, x + 24, y + 78, w - 48, 38, {
    size: opts.labelSize ?? 18,
    bold: true,
    color: COLORS.black,
  });
  addText(slide, ctx, note, x + 24, y + 124, w - 48, h - 140, {
    size: opts.noteSize ?? 13,
    color: COLORS.gray,
  });
}

export function addSimpleCard(slide, ctx, x, y, w, h, title, body, opts = {}) {
  addBox(slide, ctx, x, y, w, h, {
    fill: opts.fill ?? COLORS.white,
    line: { style: "solid", fill: opts.line ?? COLORS.beige, width: 1 },
  });
  if (opts.badge) {
    addPill(slide, ctx, opts.badge, x + 20, y + 18, opts.badgeWidth ?? 84, {
      h: 28,
      size: 11,
      fill: opts.badgeFill ?? COLORS.mint,
      color: opts.badgeColor ?? COLORS.main,
    });
  }
  addText(slide, ctx, title, x + 22, y + (opts.badge ? 56 : 24), w - 44, 34, {
    size: opts.titleSize ?? 19,
    bold: true,
    color: opts.titleColor ?? COLORS.black,
  });
  addText(slide, ctx, body, x + 22, y + (opts.badge ? 96 : 66), w - 44, opts.bodyHeight ?? h - (opts.badge ? 112 : 84), {
    size: opts.bodySize ?? 14,
    color: opts.bodyColor ?? COLORS.gray,
  });
}

export function addNotes(slide, notes) {
  slide.speakerNotes.setText(notes.trim());
}

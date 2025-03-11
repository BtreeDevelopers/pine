import { createTheme } from "thememirror";
import { tags as t } from "@lezer/highlight";
const themeBase = {
  styles: [
    {
      tag: t.comment,
      color: "#757575",
    },
    {
      tag: t.variableName,
      color: "#00f391",
    },
    {
      tag: [t.string, t.special(t.brace)],
      color: "#f1ed66",
    },
    {
      tag: t.number,
      color: "#b467fd",
    },
    {
      tag: t.bool,
      color: "#b467fd",
    },
    {
      tag: t.null,
      color: "#b467fd",
    },
    {
      tag: t.keyword,
      color: "#fa72b8",
    },
    {
      tag: t.operator,
      color: "#fa72b8",
    },
    {
      tag: t.className,
      color: "#ffcb6b",
    },
    {
      tag: t.definition(t.typeName),
      color: "#ffcb6b",
    },
    {
      tag: t.typeName,
      color: "#ffcb6b",
    },
    {
      tag: t.angleBracket,
      color: "#808080",
    },
    {
      tag: t.tagName,
      color: "#fa72b8",
    },
    {
      tag: t.attributeName,
      color: "#c792ea",
    },
  ],
};

export const pineUiLight = createTheme({
  variant: "light",
  settings: {
    background: "#E5E6E8",
    foreground: "#b19d07",
    caret: "#808080",
    selection: "#264f78",
    lineHighlight: "#ffffff00",
    gutterBackground: "#252831",
    gutterForeground: "#858585",
  },
  ...themeBase,
  styles: [
    ...themeBase.styles,
    {
      tag: [t.string, t.special(t.brace)],
      color: "#FF8A00",
    },
  ],
});

export const pineUi = createTheme({
  variant: "dark",
  settings: {
    background: "#252831",
    foreground: "#f1d710",
    caret: "#ffffff",
    selection: "#264f78",
    lineHighlight: "#ffffff00",
    gutterBackground: "#252831",
    gutterForeground: "#858585",
  },
  ...themeBase,
});

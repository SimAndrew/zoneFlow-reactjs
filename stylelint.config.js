export default {
  extends: [
    "stylelint-config-recommended"
  ],
  plugins: ["stylelint-order"],
  rules: {
    "at-rule-no-unknown": [
      true,
      { ignoreAtRules: ["tailwind", "apply", "layer", "variants", "responsive"] }
    ],
    "order/properties-order": [
      { groupName: "Custom properties", emptyLineBefore: "never", properties: ["--*"] },
      { groupName: "Positioning", properties: ["position", "top", "right", "bottom", "left", "z-index"] },
      { groupName: "Display & Box", properties: ["display", "flex", "flex-direction", "flex-wrap", "flex-flow", "flex-grow", "flex-shrink", "flex-basis", "justify-content", "align-items", "align-content", "order", "float", "clear", "overflow", "overflow-x", "overflow-y", "box-sizing"] },
      { groupName: "Dimensions", properties: ["width", "min-width", "max-width", "height", "min-height", "max-height"] },
      { groupName: "Spacing", properties: ["margin", "margin-top", "margin-right", "margin-bottom", "margin-left", "padding", "padding-top", "padding-right", "padding-bottom", "padding-left"] },
      { groupName: "Borders", properties: ["border", "border-top", "border-right", "border-bottom", "border-left", "border-radius"] },
      { groupName: "Background", properties: ["background", "background-color", "background-image", "background-position", "background-size", "background-repeat"] },
      { groupName: "Typography", properties: ["color", "font", "font-family", "font-size", "font-weight", "line-height", "text-align", "text-decoration", "letter-spacing"] },
      { groupName: "Other", properties: ["opacity", "visibility", "cursor"] }
    ]
  },
  ignoreFiles: ["**/node_modules/**", "**/dist/**", "**/build/**"]
};

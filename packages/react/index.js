module.exports = {
  extends: ["eslint-config-airbnb/rules/react"]
    .map(require.resolve)
    .concat(["plugin:react-hooks/recommended"]),

  rules: {
    // Prefer types.
    "react/prop-types": "off",
    // Prefer default arguments.
    "react/require-default-props": "off",

    "react/destructuring-assignment": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx", ".jsx"] }],
    "react/prefer-stateless-function": "off",
    "react/jsx-no-bind": "off",
    "react/sort-comp": [
      "error",
      {
        order: [
          "displayName",
          "statics",
          "static-methods",
          "defaultProps",
          "state",
          "constructor",
          "render",
          "/^(_)?render.+$/", // any auxiliary render methods
          "componentWillMount",
          "componentDidMount",
          "componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "componentDidUpdate",
          "componentWillUnmount",
          "/^on[A-Z].+$/", // event handlers
          "everything-else",
          "/^_.+$/", // private methods
        ],
      },
    ],
  },
};

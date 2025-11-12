import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  files: ["**/*.ts", "**/*.tsx", "**/*.vue"],

  rules: {
    "no-console": "off",
    semi: ["error", "always"],
    "@typescript-eslint/no-explicit-any": "off",
    "vue/no-multiple-template-root": "off",
    "vue/html-self-closing": [
      "warn",
      {
        html: { void: "always" },
      },
    ],
  },
});

import { defineConfig, globalIgnores } from "eslint/config";

import nextVitals from "eslint-config-next/core-web-vitals"; //eslint preset provided by next.js
// Core web vitals: Google’s key performance metrics for ranking websites.
// It helps performance,accesibility,seo by: Encourages optimized images
// Avoids synchronous scripts
// Prevents slow font-loading patterns

import nextTs from "eslint-config-next/typescript"; //is an ESLint configuration preset built into Next.js that provides TypeScript-specific linting rules for Next.js projects.
// comes with rules as: correct ts usage,detection typing errors,consistent ts coding standards.

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // "@typescript-eslint/no-unused-vars": "off",
    },
  },
]);

export default eslintConfig;

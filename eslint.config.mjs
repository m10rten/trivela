// @ts-check
import tseslint from "typescript-eslint";
import eslint from "@eslint/js";

/** @type {import("typescript-eslint").Config} */
const config = tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended);

export default config;

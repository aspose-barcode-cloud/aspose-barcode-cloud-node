import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  {
    files: ["src/**/*.ts"], // Apply ESLint to TypeScript files
    languageOptions: {
      parser: tsParser, // Use TypeScript parser
      parserOptions: {
        project: "./tsconfig.json", // TypeScript config file
      },
    },
    plugins: {
      "@typescript-eslint": tseslint, // TypeScript rules
    },
},
{
  files: ["test/**/*.ts"], // Apply ESLint to TypeScript files
  languageOptions: {
    parser: tsParser, // Use TypeScript parser
    parserOptions: {
      project: null,
    },
  },
  plugins: {
    "@typescript-eslint": tseslint, // TypeScript rules
  },

},
{
  files: ["snippets/**/*.js"],
  languageOptions: {
            ecmaVersion: "latest",
            sourceType: "script"
  },

},
eslintPluginPrettierRecommended,
];

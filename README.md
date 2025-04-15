# React + TypeScript + Vite

This project is built using React, TypeScript, and Vite, providing a fast and modern development experience with Hot Module Replacement (HMR) and a customizable ESLint configuration.

## Key Features

- **React with Vite**: Leverages Vite for a lightning-fast development environment.
- **TypeScript Support**: Ensures type safety and better developer experience.
- **Customizable ESLint Rules**: Pre-configured with essential linting rules, with options to expand for production-grade applications.

## Plugins Used

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Uses [SWC](https://swc.rs/) for Fast Refresh.

## Enhancing ESLint Configuration

For production applications, consider enabling type-aware linting rules for better code quality:

1. **Update `parserOptions`**:

  ```js
  export default tseslint.config({
    languageOptions: {
     parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
     },
    },
  })
  ```

2. **Use Type-Checked Configurations**:
  Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`. Optionally, include `...tseslint.configs.stylisticTypeChecked`.

3. **Install and Configure `eslint-plugin-react`**:
  Enhance your ESLint setup with React-specific linting rules:

  ```js
  // eslint.config.js
  import react from 'eslint-plugin-react'

  export default tseslint.config({
    settings: { react: { version: '18.3' } },
    plugins: { react },
    rules: {
     ...react.configs.recommended.rules,
     ...react.configs['jsx-runtime'].rules,
    },
  })
  ```

By following these steps, you can ensure a robust and maintainable codebase for your React + TypeScript + Vite project.

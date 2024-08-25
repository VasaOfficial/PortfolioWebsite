/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],

  printWidth: 80,
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  bracketSpacing: true,
  tabWidth: 2,
}

export default config

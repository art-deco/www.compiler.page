/** @type {import('splendid').Config} */
const config = {
  layout: 'splendid/layout/main.html',
  replacements: [
    {
      re: /{{ company }}/g,
      replacement: '[Art Deco™](https://www.artd.eco)',
    },
  ],
  pages: '../pages',
  elements: ['elements'],
  // components: ['../node_modules/@lemuria/animation/build/components'],
  blocks: ['blocks'],
  packages: ['@lemuria/animation'],
  // which prefixes to keep in the main CSS
  prefixes: ['-webkit-hyphens', '-ms-hyphens'],
  // for sitemap and social-buttons
  url: 'https://www.compiler.page',
  // required when pages are at org.github.io/pages-name
  /* mount: '/', */
  potracePath: '~/.splendid/potrace',
}

export default config
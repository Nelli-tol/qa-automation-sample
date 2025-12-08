// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: true,
    baseURL: 'https://example.com', // потом сюда подставишь свой сайт/демку
  },
  reporter: [['list']]
});
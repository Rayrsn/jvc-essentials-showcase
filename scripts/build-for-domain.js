#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Check if we're building for a custom domain
const isCustomDomain = process.argv.includes('--custom-domain');

if (isCustomDomain) {
  console.log('Building for custom domain (base path: /)');
  
  // Temporarily modify vite.config.ts for custom domain
  const viteConfigPath = path.join(__dirname, '../vite.config.ts');
  let viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
  
  // Replace base path for custom domain
  viteConfig = viteConfig.replace(
    "base: '/jvc-essentials-showcase/',",
    "base: '/',"
  );
  
  fs.writeFileSync(viteConfigPath, viteConfig);
  
  try {
    // Build the project
    execSync('npm run build', { stdio: 'inherit' });
  } finally {
    // Restore original vite.config.ts
    viteConfig = viteConfig.replace(
      "base: '/',",
      "base: '/jvc-essentials-showcase/',"
    );
    fs.writeFileSync(viteConfigPath, viteConfig);
  }
} else {
  console.log('Building for GitHub Pages (base path: /jvc-essentials-showcase/)');
  execSync('npm run build', { stdio: 'inherit' });
}

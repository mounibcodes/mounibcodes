#!/usr/bin/env node

/**
 * Code Linting Script
 * Lints JavaScript files using ESLint
 */

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔍 Linting code...\n');

try {
  // Check if eslint is installed
  if (!fs.existsSync('./node_modules/.bin/eslint')) {
    console.error('❌ ESLint is not installed. Run: npm install');
    process.exit(1);
  }

  // Lint JavaScript files
  execSync('npx eslint "*.js" --ignore-pattern "node_modules/*" --ignore-pattern "dist/*" --ignore-pattern "scripts/*"', {
    stdio: 'inherit',
    cwd: process.cwd()
  });

  console.log('\n✅ Linting completed successfully!');
} catch (error) {
  console.error('\n❌ Linting found issues. Please fix them before committing.');
  process.exit(1);
}

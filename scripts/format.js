#!/usr/bin/env node

/**
 * Code Formatting Script
 * Formats HTML, CSS, and JavaScript files using Prettier
 */

const { execSync } = require('child_process');
const fs = require('fs');

console.log('✨ Formatting code...\n');

try {
  // Check if prettier is installed
  if (!fs.existsSync('./node_modules/.bin/prettier')) {
    console.error('❌ Prettier is not installed. Run: npm install');
    process.exit(1);
  }

  // Format all relevant files
  execSync('npx prettier --write "*.{html,css,js}" "!node_modules/**" "!dist/**"', {
    stdio: 'inherit',
    cwd: process.cwd()
  });

  console.log('\n✅ Code formatting completed!');
} catch (error) {
  console.error('\n❌ Formatting failed:', error.message);
  process.exit(1);
}

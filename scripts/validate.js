#!/usr/bin/env node

/**
 * Deployment Validation Script
 * Validates that all required files exist and are properly structured
 */

const fs = require('fs');
const path = require('path');

console.log('✅ Validating project structure...\n');

const requiredFiles = [
  'index.html',
  'me.css',
  'me.js',
  'styles-phone.css',
  'styles-tablet.css',
  'README.md'
];

const requiredAssets = [
  'EARLY_LATE-removebg-preview.png',
  'f07c5a444bcdccb91669af80fba3cc6b.webp'
];

let hasErrors = false;

// Check required files
console.log('📄 Checking required files...');
for (const file of requiredFiles) {
  if (fs.existsSync(file)) {
    console.log(`   ✓ ${file}`);
  } else {
    console.error(`   ✗ Missing: ${file}`);
    hasErrors = true;
  }
}

// Check required assets
console.log('\n🖼️  Checking required assets...');
for (const asset of requiredAssets) {
  if (fs.existsSync(asset)) {
    console.log(`   ✓ ${asset}`);
  } else {
    console.error(`   ✗ Missing: ${asset}`);
    hasErrors = true;
  }
}

// Validate HTML structure
console.log('\n🔍 Validating HTML structure...');
try {
  const html = fs.readFileSync('index.html', 'utf8');
  
  const checks = [
    { test: html.toLowerCase().includes('<!doctype html>'), msg: 'DOCTYPE declaration' },
    { test: html.includes('<meta charset'), msg: 'Character encoding' },
    { test: html.includes('viewport'), msg: 'Viewport meta tag' },
    { test: html.includes('<title>'), msg: 'Title tag' },
  ];
  
  for (const check of checks) {
    if (check.test) {
      console.log(`   ✓ ${check.msg}`);
    } else {
      console.error(`   ✗ Missing: ${check.msg}`);
      hasErrors = true;
    }
  }
} catch (error) {
  console.error('   ✗ Could not read index.html');
  hasErrors = true;
}

// Check GitHub Pages configuration
console.log('\n⚙️  Checking GitHub Pages configuration...');
if (fs.existsSync('.github/workflows/static.yml')) {
  console.log('   ✓ GitHub Pages workflow exists');
} else {
  console.warn('   ⚠ No GitHub Pages workflow found');
}

if (hasErrors) {
  console.error('\n❌ Validation failed! Please fix the errors above.');
  process.exit(1);
} else {
  console.log('\n✅ All validation checks passed!');
  console.log('🚀 Project is ready for deployment.\n');
}

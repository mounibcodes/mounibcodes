#!/usr/bin/env node

/**
 * Build Script for Production
 * Minifies HTML, CSS, and JavaScript files for production deployment
 */

const fs = require('fs');
const path = require('path');
const { minify: minifyHTML } = require('html-minifier');
const CleanCSS = require('clean-css');
const { minify: minifyJS } = require('terser');

const BUILD_DIR = 'dist';
const SOURCE_DIR = '.';

// Create build directory
if (!fs.existsSync(BUILD_DIR)) {
  fs.mkdirSync(BUILD_DIR, { recursive: true });
}

console.log('🔨 Building project for production...\n');

/**
 * Minify HTML files
 */
async function minifyHTMLFiles() {
  console.log('📄 Minifying HTML files...');
  const htmlFiles = fs.readdirSync(SOURCE_DIR).filter(file => file.endsWith('.html'));
  
  for (const file of htmlFiles) {
    const content = fs.readFileSync(path.join(SOURCE_DIR, file), 'utf8');
    const minified = minifyHTML(content, {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true,
      minifyCSS: true,
      minifyJS: true
    });
    
    fs.writeFileSync(path.join(BUILD_DIR, file), minified);
    console.log(`   ✓ ${file}`);
  }
}

/**
 * Minify CSS files
 */
async function minifyCSSFiles() {
  console.log('\n🎨 Minifying CSS files...');
  const cssFiles = fs.readdirSync(SOURCE_DIR).filter(file => file.endsWith('.css'));
  
  const cleanCSS = new CleanCSS({ level: 2 });
  
  for (const file of cssFiles) {
    const content = fs.readFileSync(path.join(SOURCE_DIR, file), 'utf8');
    const minified = cleanCSS.minify(content);
    
    if (minified.errors.length > 0) {
      console.error(`   ✗ Error minifying ${file}:`, minified.errors);
      continue;
    }
    
    fs.writeFileSync(path.join(BUILD_DIR, file), minified.styles);
    console.log(`   ✓ ${file}`);
  }
}

/**
 * Minify JavaScript files
 */
async function minifyJSFiles() {
  console.log('\n⚡ Minifying JavaScript files...');
  const jsFiles = fs.readdirSync(SOURCE_DIR).filter(file => 
    file.endsWith('.js') && !file.startsWith('node_modules')
  );
  
  for (const file of jsFiles) {
    const content = fs.readFileSync(path.join(SOURCE_DIR, file), 'utf8');
    const minified = await minifyJS(content, {
      compress: true,
      mangle: true
    });
    
    if (minified.error) {
      console.error(`   ✗ Error minifying ${file}:`, minified.error);
      continue;
    }
    
    fs.writeFileSync(path.join(BUILD_DIR, file), minified.code);
    console.log(`   ✓ ${file}`);
  }
}

/**
 * Copy static assets
 */
function copyAssets() {
  console.log('\n📦 Copying static assets...');
  const extensions = ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif', '.ico', '.otf', '.ttf', '.woff', '.woff2'];
  const files = fs.readdirSync(SOURCE_DIR);
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (extensions.includes(ext)) {
      fs.copyFileSync(
        path.join(SOURCE_DIR, file),
        path.join(BUILD_DIR, file)
      );
      console.log(`   ✓ ${file}`);
    }
  }
}

/**
 * Main build function
 */
async function build() {
  try {
    await minifyHTMLFiles();
    await minifyCSSFiles();
    await minifyJSFiles();
    copyAssets();
    
    console.log('\n✅ Build completed successfully!');
    console.log(`📂 Output directory: ${BUILD_DIR}/\n`);
  } catch (error) {
    console.error('\n❌ Build failed:', error);
    process.exit(1);
  }
}

build();

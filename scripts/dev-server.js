#!/usr/bin/env node

/**
 * Development Server with Live Reload
 * Starts a local development server with browser-sync for automatic reloading
 */

const browserSync = require('browser-sync').create();

console.log('🚀 Starting development server...\n');

browserSync.init({
  server: {
    baseDir: './',
    index: 'index.html'
  },
  files: [
    '*.html',
    '*.css',
    '*.js',
    '!node_modules/**',
    '!scripts/**'
  ],
  port: 3000,
  open: false,
  notify: false,
  ui: false,
  logLevel: 'info',
  logPrefix: 'DevServer'
});

console.log('✅ Development server started!');
console.log('📱 Local: http://localhost:3000');
console.log('🔄 Watching for changes...\n');

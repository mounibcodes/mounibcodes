# 🚀 Automation Tools Documentation

This project includes a comprehensive set of automation tools to streamline development, testing, and deployment workflows.

## 📦 Installation

First, install all dependencies:

```bash
npm install
```

## 🛠️ Available Commands

### Development Server

Start a local development server with live reload:

```bash
npm run dev
```

This will:
- Start a local server at `http://localhost:3000`
- Watch for changes in HTML, CSS, and JS files
- Automatically reload the browser when changes are detected
- Perfect for rapid development and testing

### Build for Production

Create an optimized production build:

```bash
npm run build
```

This will:
- Minify all HTML files
- Minify all CSS files
- Minify all JavaScript files
- Copy static assets (images, fonts, etc.)
- Output everything to the `dist/` directory
- Reduce file sizes for faster loading times

### Code Formatting

Format all code files automatically:

```bash
npm run format
```

This will:
- Format HTML, CSS, and JavaScript files
- Apply consistent code style using Prettier
- Fix indentation and spacing issues
- Ensure code consistency across the project

### Code Linting

Check code quality and find potential issues:

```bash
npm run lint
```

This will:
- Analyze JavaScript files for errors
- Check for code quality issues
- Identify potential bugs
- Enforce coding standards

### Project Validation

Validate the project structure before deployment:

```bash
npm run validate
```

This will:
- Check that all required files exist
- Validate HTML structure
- Check for required assets
- Verify GitHub Pages configuration
- Ensure the project is deployment-ready

### Pre-commit Hook

Run all checks before committing code:

```bash
npm run precommit
```

This will:
- Format all code
- Run linting checks
- Validate project structure
- Ensure code quality before commits

## 🔧 Workflow Examples

### Daily Development Workflow

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Make your changes to HTML, CSS, or JS files

3. View changes automatically in your browser at `http://localhost:3000`

4. Before committing, run:
   ```bash
   npm run precommit
   ```

### Preparing for Deployment

1. Validate your project:
   ```bash
   npm run validate
   ```

2. Build for production:
   ```bash
   npm run build
   ```

3. Test the production build locally:
   ```bash
   cd dist && npx http-server
   ```

## 📁 Project Structure

```
mounibcodes/
├── scripts/              # Automation scripts
│   ├── dev-server.js     # Development server
│   ├── build.js          # Production build
│   ├── format.js         # Code formatter
│   ├── lint.js           # Code linter
│   └── validate.js       # Project validator
├── dist/                 # Production build output (generated)
├── index.html            # Main HTML file
├── me.css                # Main stylesheet
├── me.js                 # Main JavaScript
├── styles-phone.css      # Mobile styles
├── styles-tablet.css     # Tablet styles
├── .eslintrc.json        # ESLint configuration
├── .prettierrc.json      # Prettier configuration
├── .gitignore            # Git ignore rules
└── package.json          # Project configuration
```

## 🎯 Best Practices

1. **Always run the dev server** during development for instant feedback
2. **Format and lint regularly** to maintain code quality
3. **Validate before deploying** to catch issues early
4. **Build and test** the production version before going live
5. **Keep dependencies updated** for security and features

## 🔄 Continuous Integration

The project includes GitHub Actions workflow that automatically:
- Deploys to GitHub Pages on every push to main
- Serves the optimized production build
- Provides automatic HTTPS

## 🆘 Troubleshooting

### Development server won't start
- Make sure port 3000 is not in use
- Run `npm install` to ensure all dependencies are installed

### Build fails
- Check that all required files exist
- Run `npm run validate` to identify missing files

### Linting errors
- Run `npm run format` to auto-fix formatting issues
- Review error messages for specific issues to fix

## 📚 Additional Resources

- [Browser-sync Documentation](https://browsersync.io/docs)
- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Prettier Documentation](https://prettier.io/docs/en/)
- [HTML Minifier](https://github.com/kangax/html-minifier)
- [CleanCSS](https://github.com/clean-css/clean-css)
- [Terser](https://terser.org/)

## 🤝 Contributing

When contributing to this project:
1. Run `npm run precommit` before creating a PR
2. Ensure all validation checks pass
3. Test your changes with `npm run dev`
4. Build and test the production version

---

**Built with ❤️ by Mounib**

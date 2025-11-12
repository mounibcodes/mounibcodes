# 🚀 Quick Start Guide

Get started with the automation tools in under 2 minutes!

## Installation

```bash
# Clone the repository (if you haven't already)
git clone https://github.com/mounibcodes/mounibcodes.git
cd mounibcodes

# Install dependencies
npm install
```

## Your First Development Session

### 1. Start the Development Server

```bash
npm run dev
```

This starts a local server at `http://localhost:3000` with automatic browser refresh.

### 2. Make Some Changes

Open `index.html`, `me.css`, or `me.js` in your favorite editor and make changes. The browser will automatically reload to show your updates!

### 3. Format and Validate Your Code

Before committing:

```bash
npm run precommit
```

This will:
- Auto-format all your code
- Check for code quality issues
- Validate the project structure

## Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized version in the `dist/` folder with:
- Minified HTML, CSS, and JavaScript
- Optimized assets
- Reduced file sizes (typically 30-40% smaller)

## Common Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run format` | Format all code files |
| `npm run lint` | Check code quality |
| `npm run validate` | Validate project structure |
| `npm run precommit` | Run all checks before commit |

## Need Help?

- 📖 Full documentation: [AUTOMATION.md](./AUTOMATION.md)
- 🐛 Found a bug? Open an issue
- 💡 Have an idea? Start a discussion

## Next Steps

1. Customize the website with your own content
2. Add your own styles and features
3. Use `npm run dev` for instant feedback
4. Use `npm run precommit` before committing
5. Deploy with confidence using `npm run build`

Happy coding! 🎉

# 📝 Markdown Editor

A simple, clean, and modern Markdown editor with live preview functionality built with React and Bootstrap.

## 🌟 Features

- **📑 Dual Mode Interface**: Switch seamlessly between Edit and Preview modes using tabs
- **⚡ Live Preview**: Real-time Markdown rendering using `react-markdown`
- **🛠️ Rich Toolbar**: Quick formatting shortcuts for:
  - Headers (H1, H2, H3)
  - Bold and Italic text
  - Links, Code blocks, Lists, and Quotes
- **💾 File Export**: Download your Markdown files with custom filenames
- **📊 Word Count**: Real-time word and character count display
- **🎨 Bootstrap Design**: Clean, responsive, and modern interface
- **📱 Mobile Friendly**: Responsive design that works on all screen sizes
- **🚀 GitHub Pages Deployment**: Automatic deployment using GitHub Actions

## 🔗 Live Demo

Visit the live application: [https://hinovpn.github.io/markdown-generator](https://hinovpn.github.io/markdown-generator)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/HinoVPN/markdown-generator.git
cd markdown-generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🛠️ Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🏗️ Built With

- **React** - Frontend library
- **Bootstrap 5** - CSS framework for styling
- **react-markdown** - Markdown rendering
- **Create React App** - Project bootstrapping
- **GitHub Actions** - CI/CD for automatic deployment

## 📁 Project Structure

```
markdown-generator/
├── public/
│   ├── favicon.svg          # Custom Markdown-themed icon
│   ├── index.html           # HTML template
│   └── manifest.json        # PWA manifest
├── src/
│   ├── App.js              # Main application component
│   ├── App.css             # Application styles
│   └── index.js            # Application entry point
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment workflow
└── README.md
```

## ✨ Key Features Explained

### 🎯 Tabbed Interface
- Clean tab switching between Edit and Preview modes
- Only the main content area scrolls, keeping navigation fixed
- Centered tab design for better visual appeal

### 🔧 Formatting Toolbar
- **Headers**: Quick H1, H2, H3 insertion
- **Formatting**: Bold, italic text styling
- **Content**: Links, code blocks, lists, and blockquotes
- **Smart Insertion**: Works with selected text or inserts placeholders

### 📤 Export Functionality
- Download Markdown files with custom names
- Automatic `.md` extension addition
- Browser-native file download

### 📊 Status Information
- Real-time word and character counting
- Current mode indicator
- Clean status bar at the bottom

## 🚢 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions. Every push to the `master` branch triggers a new deployment.

The deployment workflow:
1. Builds the React application
2. Uploads the build artifacts
3. Deploys to GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Create React App](https://create-react-app.dev/)
- Markdown rendering by [react-markdown](https://github.com/remarkjs/react-markdown)
- Styled with [Bootstrap](https://getbootstrap.com/)
- Deployed on [GitHub Pages](https://pages.github.com/)

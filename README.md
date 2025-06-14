<div align="center">

<div align="center">
  <img src="https://private-us-east-1.manuscdn.com/sessionFile/QhZHW3eqi4PHNqdpCJ6Djz/sandbox/bva7IFoCm5vq8gcKlT4uJK-images_1749896186912_na1fn_L2hvbWUvdWJ1bnR1L2Fzc2V0cy92aWJlcmFua19sb2dvX2hlYWRlcg.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUWhaSFczZXFpNFBITnFkcENKNkRqei9zYW5kYm94L2J2YTdJRm9DbTV2cThnY0tsVDR1SkstaW1hZ2VzXzE3NDk4OTYxODY5MTJfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwyRnpjMlYwY3k5MmFXSmxjbUZ1YTE5c2IyZHZYMmhsWVdSbGNnLmpwZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc2NzIyNTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=S6DAFCQDmvAYQX4-ETBrff4WsAKqJ3bb2-~0FSZ3rSbEIbIDDfxOZfENvx1r39tAhHG~PM38fIxYSSaNoYSityTXArKgI389Na~1U1jH92vaS6IWSNbwmp4hrJ1-W2v7ybJTtZFsh4Kie0sLnuCFKRL0rXgjqGuYsvkWb-TlVvcFbuSdrK7~qSc9-nBHxXz7qXN1sKzPmf1EOsLK-58vLkYvH-lnFfvztxpXtGWR7SObwc3LxkR5rxkHIicbx9z~K1gKws~jbYcdjEdzkaU18nDXFa3mzp3uYIK-21DWnNx5P0ZbxMuaKQkqT-qYiQdGnX4ir67I8XZnd81YHmGNTw__" alt="Viberank Logo" width="500"/>
</div>

# The Open Source Viberank Web Components

**Open-source UI components powering the viberank.dev platform**

*The building blocks behind the innovative tech software discovery platform*

[**Visit viberank.dev →**](https://viberank.dev) • [**Documentation →**](#documentation) • [**Report Bug**](https://github.com/viberank-dev/web-components/issues) • [**Join Community**](https://viberank.dev)

[![GitHub Stars](https://img.shields.io/github/stars/viberank-dev/web-components?style=flat-square&logo=github)](https://github.com/viberank-dev/web-components)
[![GitHub Forks](https://img.shields.io/github/forks/viberank-dev/web-components?style=flat-square&logo=github)](https://github.com/viberank-dev/web-components)
[![TypeScript](https://img.shields.io/badge/TypeScript-68.8%25-3178C6?style=flat-square&logo=typescript)](https://github.com/viberank-dev/web-components)
[![CSS](https://img.shields.io/badge/CSS-31.2%25-1572B6?style=flat-square&logo=css3)](https://github.com/viberank-dev/web-components)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](./LICENSE)

</div>

---

## 🌟 Why Viberank Components?

Viberank Components is an open-source collection of React/TypeScript UI components that power [viberank.dev](https://viberank.dev), a platform for discovering and ranking tech software.

This component library was developed to support interactive software discovery and ranking functionality.

*Professional UI components designed for modern web applications*

## ✨ Features

🎯 **Battle-tested Components** - Production-ready components used by thousands of users daily on viberank.dev

⚡ **Performance Optimized** - Lightweight, fast-loading components with minimal bundle impact

🎨 **Modern Design System** - Consistent, beautiful components following contemporary UI/UX principles

🔧 **TypeScript First** - Full TypeScript support with comprehensive type definitions

🎮 **Interactive Elements** - Engaging voting, battle, and ranking components for community platforms

🛠️ **Easy Integration** - Simple installation and integration with existing React applications

🎭 **Customizable** - Flexible theming and styling options to match your brand

🔒 **Accessible** - WCAG compliant components ensuring inclusive user experiences

🌐 **Open Source** - MIT licensed, community-driven development


## 🚀 Quick Start

### Installation

Install the Viberank Components library using your preferred package manager:

```bash
# Using npm
npm install @viberank/components

# Using yarn
yarn add @viberank/components

# Using pnpm
pnpm add @viberank/components
```

### Basic Usage

Import and use components in your React application:

```tsx
import React from 'react';
import { BattleModal, SlotMachineCard, VotingButtons } from '@viberank/components';
import '@viberank/components/dist/styles.css';

function App() {
  const [showBattle, setShowBattle] = React.useState(false);

  return (
    <div className="app">
      {/* Voting buttons for quick interactions */}
      <VotingButtons
        onUpvote={() => console.log('Upvoted!')}
        onDownvote={() => console.log('Downvoted!')}
        initialVotes={{ up: 42, down: 3 }}
      />

      {/* Battle modal for head-to-head comparisons */}
      <BattleModal
        isOpen={showBattle}
        onClose={() => setShowBattle(false)}
        leftApp={{
          name: "Amazing App",
          description: "Revolutionary productivity tool",
          image: "/app1.png"
        }}
        rightApp={{
          name: "Competitor App",
          description: "Alternative solution",
          image: "/app2.png"
        }}
        onVote={(winner) => {
          console.log(`${winner} wins!`);
          setShowBattle(false);
        }}
      />

      {/* Slot machine animation for engagement */}
      <SlotMachineCard
        isSpinning={false}
        onSpinComplete={() => console.log('Spin complete!')}
      >
        <div>Your content here</div>
      </SlotMachineCard>
    </div>
  );
}

export default App;
```

### Styling and Theming

Customize the appearance of components to match your brand:

```css
/* Override default theme variables */
:root {
  --viberank-primary-color: #6366f1;
  --viberank-secondary-color: #8b5cf6;
  --viberank-accent-color: #06b6d4;
  --viberank-background-color: #ffffff;
  --viberank-text-color: #1f2937;
  --viberank-border-radius: 8px;
  --viberank-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Custom component styling */
.viberank-battle-modal {
  --modal-background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --button-hover-transform: scale(1.05);
}
```


### Project Structure

```
web-components/
├── component-category/
│   ├── ComponentA.tsx
│   ├── ComponentA.css
│   ├── ComponentB.tsx
│   ├── ComponentB.css
│   ├── Example.tsx
│   └── index.ts
└── README.md
```

### Testing

We maintain high test coverage with comprehensive testing strategies:

```bash
# Unit tests
npm run test:unit

# Integration tests  
npm run test:integration

# Visual regression tests
npm run test:visual

# Accessibility tests
npm run test:a11y
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Ways to Contribute

🐛 **Bug Reports**: Found a bug? [Open an issue](https://github.com/viberank-dev/web-components/issues) with detailed reproduction steps.

✨ **Feature Requests**: Have an idea for a new component or feature? We'd love to hear it!

📝 **Documentation**: Help improve our docs, examples, or add translations.

🔧 **Code Contributions**: Submit pull requests for bug fixes or new features.

### Development Guidelines

1. **Fork and Clone**: Fork the repository and clone your fork locally
2. **Branch**: Create a feature branch from `main`
3. **Develop**: Make your changes following our coding standards
4. **Test**: Ensure all tests pass and add tests for new features
5. **Document**: Update documentation and examples as needed
6. **Submit**: Open a pull request with a clear description

### Code Standards

- **TypeScript**: All code must be written in TypeScript with proper types
- **ESLint**: Follow our ESLint configuration
- **Prettier**: Code must be formatted with Prettier
- **Testing**: Maintain >90% test coverage
- **Accessibility**: All components must meet WCAG 2.1 AA standards

```bash
# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Type checking
npm run type-check
```


## 🌍 Community

Join our growing community of developers building the future of software discovery:

- **Website**: [viberank.dev](https://viberank.dev)
- **GitHub Discussions**: [Community Forum](https://github.com/viberank-dev/web-components/discussions)
- **Twitter**: [@viberankdev](https://twitter.com/viberankdev)
- 
## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

*Interactive component demonstrations*

- **🌟 Stars**: Help us grow by starring the repository
- **🍴 Forks**: Fork and contribute to the project
- **📦 Downloads**: Used by developers worldwide
- **🐛 Issues**: Actively maintained and supported

---

<div align="center">

**Built with ❤️ by the Viberank team**

[⭐ Star us on GitHub](https://github.com/viberank-dev/web-components) • [🐛 Report Issues](https://github.com/viberank-dev/web-components/issues) • [💬 Join Discussion](https://github.com/viberank-dev/web-components/discussions)

</div>


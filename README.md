# React + NEAR Wallet Starter

A beautiful, modern starter template for building Web3 applications with React, Vite, and NEAR Protocol integration.

## ✨ Features

- **⚡ Lightning Fast** - Built with Vite for instant hot reload and optimal performance
- **🎨 Beautiful UI** - Modern design with Tailwind CSS and smooth animations
- **🔗 Wallet Ready** - Integrated NEAR Wallet Selector with multiple wallet support
- **📱 Responsive** - Mobile-first design that works on all devices
- **🛠️ Developer Friendly** - TypeScript support and comprehensive tooling
- **🌐 Web3 Ready** - Pre-configured for smart contract interactions

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd react-near-starter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see your app!

## 🛠️ Tech Stack

- **React 19** - Latest React with concurrent features
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **NEAR Protocol** - Blockchain platform for dApps
- **Wallet Selector** - Multi-wallet integration
- **TypeScript** - Type-safe JavaScript

## 🔧 Configuration

### NEAR Network
The project is configured for NEAR testnet by default. To switch to mainnet, update the configuration in `src/lib/config/near.ts`:

```typescript
export const NetworkId = "mainnet"; // or "testnet"
```

### Supported Wallets
- **Meteor Wallet** - Mobile-first NEAR wallet
- **Bitte Wallet** - Browser extension wallet
- **MyNEAR Wallet** - Web-based wallet

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Home.jsx        # Main landing page
│   ├── WalletSelector.jsx # Wallet connection UI
│   └── ClientLayout.jsx # Layout wrapper
├── provider/           # Context providers
│   └── wallet.jsx      # NEAR wallet context
├── lib/               # Utilities and config
│   └── config/        # Configuration files
└── utils/             # Helper functions
```

## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. You can customize the design by:
- Modifying the color scheme in `tailwind.config.js`
- Updating component styles in the respective files
- Adding custom animations and transitions

### Wallet Integration
To add more wallet providers:
1. Install the wallet package: `npm install @near-wallet-selector/[wallet-name]`
2. Import and add to the modules array in `src/provider/wallet.jsx`

## 🔗 Useful Links

- [NEAR Protocol Documentation](https://docs.near.org/)
- [Wallet Selector Documentation](https://github.com/near/wallet-selector)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- NEAR Protocol team for the excellent developer tools
- Vite team for the amazing build tool
- Tailwind CSS team for the utility-first approach
- React team for the incredible framework

---

**Ready to build the future of Web3? Start connecting your wallet! 🚀** 
import { Link, useLocation } from 'react-router-dom';
import { WalletConfig } from './WalletConfig';
import NearWalletProvider from '../provider/wallet';
import WalletSelector from './WalletSelector';
import { WalletButton } from './WalletButton';

export function ClientLayout({ children }) {
  const location = useLocation();

  return (
    <WalletConfig>
      <NearWalletProvider>
        <nav className="bg-black border-b border-green-800/50">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo/Name */}
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text hover:from-green-300 hover:to-emerald-400 transition-all duration-300">
                NEAR Starter
              </Link>

              {/* Navigation Links */}
              <div className="flex items-center gap-6">
                <Link 
                  to="/" 
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    location.pathname === '/' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'text-gray-300 hover:text-green-400 hover:bg-gray-800/50'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/solana" 
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    location.pathname === '/solana' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'text-gray-300 hover:text-green-400 hover:bg-gray-800/50'
                  }`}
                >
                  Solana Address
                </Link>
              </div>

              {/* Wallet Selectors */}
              <div className="flex items-center gap-4">
                <WalletSelector />
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          {children}
        </main>
      </NearWalletProvider>
    </WalletConfig>
  );
} 
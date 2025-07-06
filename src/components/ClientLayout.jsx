import { WalletConfig } from './WalletConfig';
import NearWalletProvider from '../provider/wallet';
import WalletSelector from './WalletSelector';
import { WalletButton } from './WalletButton';

export function ClientLayout({ children }) {
  return (
    <WalletConfig>
      <NearWalletProvider>
        <nav className="bg-black border-b border-green-800/50">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo/Name */}
              <a href="/" className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
                Starter
              </a>

              {/* Wallet Selectors */}
              <div className="flex items-center gap-4">
                <WalletSelector />
           
              </div>

              {/* Navigation Links */}
              <div className="flex items-center gap-6">
                
               
               
                
                
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
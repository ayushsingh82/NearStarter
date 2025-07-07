import React from 'react';
import WalletSelector from './WalletSelector';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-5xl mx-auto">
          {/* Header section */}
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
              NEAR Protocol Integration
            </div>
            
            <h1 className="text-7xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
                React
              </span>
              <span className="text-white"> + </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-emerald-400 text-transparent bg-clip-text">
                NEAR
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Build the future of Web3 with our powerful starter template featuring 
              <span className="text-emerald-400 font-semibold"> React</span>, 
              <span className="text-purple-400 font-semibold"> Vite</span>, and 
              <span className="text-cyan-400 font-semibold"> NEAR Wallet</span>
            </p>
          </div>

          {/* Wallet connection section */}
          <div className="mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-md mx-auto">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">Connect Your Wallet</h3>
                <p className="text-gray-400 text-sm">Start your Web3 journey by connecting your NEAR wallet</p>
              </div>
              <WalletSelector />
            </div>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-400 text-sm">Built with Vite for instant hot reload and optimal performance</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Wallet Ready</h3>
              <p className="text-gray-400 text-sm">Integrated with NEAR Wallet Selector for seamless connections</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Smart Contracts</h3>
              <p className="text-gray-400 text-sm">Ready to interact with NEAR smart contracts and dApps</p>
            </div>
          </div>

          {/* Tech stack */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Built With</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'React 19', color: 'from-cyan-400 to-blue-500' },
                { name: 'Vite', color: 'from-purple-400 to-pink-500' },
                { name: 'Tailwind CSS', color: 'from-emerald-400 to-cyan-500' },
                { name: 'NEAR Protocol', color: 'from-yellow-400 to-orange-500' },
                { name: 'Wallet Selector', color: 'from-pink-400 to-purple-500' },
                { name: 'TypeScript', color: 'from-blue-400 to-indigo-500' }
              ].map((tech, index) => (
                <div
                  key={index}
                  className={`px-4 py-2 bg-gradient-to-r ${tech.color} rounded-full text-white text-sm font-medium shadow-lg`}
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-sm">
              Ready to build the future? Start connecting your wallet above!
            </p>
            <div className="flex justify-center mt-4 space-x-4">
              <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">
                Documentation
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">
                GitHub
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">
                NEAR Protocol
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

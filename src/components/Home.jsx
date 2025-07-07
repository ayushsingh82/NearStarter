import React from 'react';
import WalletSelector from './WalletSelector';

export function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with branding */}
      <div className="pt-8 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-green-500">
                NEAR Wallet Starter
              </h2>
              <p className="text-xs text-gray-400">Web3 Development Template</p>
            </div>
          </div>
          
          {/* Top right wallet connection */}
          <div className="relative">
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <WalletSelector />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex items-center justify-center min-h-screen px-6 -mt-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero section */}
          <div className="mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-full text-green-500 text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              React + Vite + NEAR Wallet
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">React</span>
              <span className="text-green-500 mx-4">+</span>
              <span className="text-green-500">NEAR</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Build the future of Web3 with our powerful starter template featuring 
              <span className="text-green-500 font-semibold"> React</span>, 
              <span className="text-green-500 font-semibold"> Vite</span>, and 
              <span className="text-green-500 font-semibold"> NEAR Wallet</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors">
                Get Started
              </button>
              <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors border border-gray-600">
                View Documentation
              </button>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-400">Built with Vite for instant hot reload and optimal performance.</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">Wallet Ready</h3>
              <p className="text-gray-400">Integrated with NEAR Wallet Selector for seamless connections.</p>
            </div>
          </div>

          {/* Tech stack */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Built With</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'React 19', color: 'bg-green-500' },
                { name: 'Vite', color: 'bg-green-500' },
                { name: 'Tailwind CSS', color: 'bg-green-500' },
                { name: 'NEAR Protocol', color: 'bg-green-500' },
                { name: 'Wallet Selector', color: 'bg-green-500' },
                { name: 'TypeScript', color: 'bg-green-500' }
              ].map((tech, index) => (
                <div
                  key={index}
                  className={`px-4 py-2 ${tech.color} rounded-lg text-white font-medium`}
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-lg mb-6">
              Ready to build the future of Web3? Start connecting your wallet above!
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-green-500 hover:text-green-400 transition-colors text-sm font-medium">
                Documentation
              </a>
              <a href="#" className="text-green-500 hover:text-green-400 transition-colors text-sm font-medium">
                GitHub
              </a>
              <a href="#" className="text-green-500 hover:text-green-400 transition-colors text-sm font-medium">
                NEAR Protocol
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

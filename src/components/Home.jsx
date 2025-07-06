import React from 'react';

export function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          React Vite Starter
        </h1>
        
        <h2 className="text-3xl font-semibold mb-6 text-green-400">
          NEAR Wallet Integration
        </h2>
        
        <div className="space-y-6 text-lg">
          <p className="text-gray-300">
            Welcome to your React Vite application with integrated NEAR wallet functionality.
          </p>
          
          <div className="bg-gray-900 p-6 rounded-lg border border-green-800/50">
            <h3 className="text-xl font-semibold mb-4 text-green-400">Features</h3>
            <ul className="text-left space-y-2 text-gray-300">
              <li>• React 18 with Vite for fast development</li>
              <li>• NEAR Wallet Selector integration</li>
              <li>• Meteor Wallet and Bitte Wallet support</li>
              <li>• Tailwind CSS for styling</li>
              <li>• Context-based wallet state management</li>
              <li>• Ready for smart contract interactions</li>
            </ul>
          </div>
          
          <p className="text-gray-400">
            Connect your wallet to start exploring the NEAR ecosystem!
          </p>
        </div>
      </div>
    </div>
  );
}

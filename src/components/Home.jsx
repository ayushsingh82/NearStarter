import React from 'react';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero section */}
          <div className="mb-20 animate-fade-in">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-8 backdrop-blur-sm animate-slide-in-up animate-delay-100">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              🚀 Next-Gen Web3 Development
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="text-white animate-slide-in-left animate-delay-200">Build</span>
              <span className="block bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent gradient-text animate-scale-in animate-delay-300">
                Web3 Apps
              </span>
              <span className="text-white text-4xl md:text-5xl lg:text-6xl animate-slide-in-right animate-delay-400">in Minutes</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 font-light animate-fade-in animate-delay-500">
              The ultimate starter template for building decentralized applications on NEAR Protocol. 
              <span className="text-green-400 font-medium"> Zero-config setup</span>, 
              <span className="text-green-400 font-medium"> instant deployment</span>, and 
              <span className="text-green-400 font-medium"> enterprise-ready</span> architecture.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-in-up animate-delay-600">
              <button className="group px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 flex items-center space-x-3 animate-glow">
                <span>Start Building</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="px-10 py-5 bg-gray-800/50 hover:bg-gray-700/50 text-white font-semibold rounded-xl transition-all duration-300 border border-gray-600/50 backdrop-blur-sm hover:border-green-500/50 hover-lift">
                View on GitHub
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center hover-lift animate-scale-in animate-delay-700">
                <div className="text-3xl font-bold text-green-400 mb-2 animate-float">⚡</div>
                <div className="text-2xl font-bold text-white mb-1">Instant Setup</div>
                <div className="text-gray-400 text-sm">Get started in under 60 seconds</div>
              </div>
              <div className="text-center hover-lift animate-scale-in animate-delay-800">
                <div className="text-3xl font-bold text-green-400 mb-2 animate-float" style={{animationDelay: '0.5s'}}>🔒</div>
                <div className="text-2xl font-bold text-white mb-1">Secure by Default</div>
                <div className="text-gray-400 text-sm">Built-in wallet integration</div>
              </div>
              <div className="text-center hover-lift animate-scale-in animate-delay-900">
                <div className="text-3xl font-bold text-green-400 mb-2 animate-float" style={{animationDelay: '1s'}}>🚀</div>
                <div className="text-2xl font-bold text-white mb-1">Production Ready</div>
                <div className="text-gray-400 text-sm">Deploy to mainnet today</div>
              </div>
            </div>
          </div>

          {/* Features section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose This Template?</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">Everything you need to build production-ready Web3 applications</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Lightning Fast</h3>
                <p className="text-gray-400 leading-relaxed">Built with Vite for instant hot reload, optimized bundling, and blazing-fast development experience.</p>
              </div>

              <div className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Wallet Integration</h3>
                <p className="text-gray-400 leading-relaxed">Seamless NEAR Wallet Selector integration with multiple wallet support and secure authentication.</p>
              </div>

              <div className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Modern Stack</h3>
                <p className="text-gray-400 leading-relaxed">React 19, TypeScript, Tailwind CSS, and latest Web3 libraries for cutting-edge development.</p>
              </div>

              <div className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Production Ready</h3>
                <p className="text-gray-400 leading-relaxed">Pre-configured for deployment with best practices, error handling, and security measures.</p>
              </div>

              <div className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Scalable Architecture</h3>
                <p className="text-gray-400 leading-relaxed">Modular design with clean separation of concerns for easy maintenance and scaling.</p>
              </div>

              <div className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Developer Experience</h3>
                <p className="text-gray-400 leading-relaxed">Comprehensive documentation, TypeScript support, and helpful utilities for rapid development.</p>
              </div>
            </div>
          </div>

          {/* Tech stack */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Powered by Modern Tech</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">Built with the latest tools and technologies for optimal performance</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-3xl p-12 backdrop-blur-sm">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {[
                  { name: 'React 19', icon: '⚛️', gradient: 'from-blue-500 to-cyan-500' },
                  { name: 'Vite', icon: '⚡', gradient: 'from-yellow-500 to-orange-500' },
                  { name: 'TypeScript', icon: '📘', gradient: 'from-blue-600 to-blue-800' },
                  { name: 'Tailwind', icon: '🎨', gradient: 'from-teal-500 to-cyan-500' },
                  { name: 'NEAR', icon: '🔗', gradient: 'from-green-500 to-emerald-500' },
                  { name: 'Web3', icon: '🌐', gradient: 'from-purple-500 to-pink-500' }
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="group text-center p-6 rounded-2xl bg-gray-800/30 hover:bg-gray-700/30 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${tech.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{tech.icon}</span>
                    </div>
                    <h3 className="text-white font-semibold text-sm">{tech.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-3xl p-12 text-center backdrop-blur-sm">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Building?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Connect your wallet in the navbar above and start building the next generation of Web3 applications today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105">
                  Get Started Now
                </button>
                <a href="https://github.com" className="px-8 py-4 bg-gray-800/50 hover:bg-gray-700/50 text-white font-semibold rounded-xl transition-all duration-300 border border-gray-600/50 backdrop-blur-sm hover:border-green-500/50">
                  View Documentation
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center border-t border-gray-800/50 pt-12">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-white">NEAR Starter</span>
                </div>
                <p className="text-gray-400 text-sm">The ultimate Web3 development template</p>
              </div>
              
              <div className="flex space-x-8">
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium">
                  Documentation
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium">
                  GitHub
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium">
                  NEAR Protocol
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium">
                  Support
                </a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800/30">
              <p className="text-gray-500 text-sm">
                © 2024 NEAR Starter Template. Built with ❤️ for the Web3 community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
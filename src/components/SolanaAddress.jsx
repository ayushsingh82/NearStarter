
import { useState } from 'react'
import { SolanaView } from './Solana'

export default function SolanaAddressPage() {
  const [status, setStatus] = useState('Ready')

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Solana Address
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect your NEAR wallet, derive a Solana devnet address, sign, and relay a transaction.
          </p>
        </div>

        {/* Status Card */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-6 mb-8 backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-semibold">Status:</span>
            <span className="text-white">{status}</span>
          </div>
        </div>

        {/* Solana Component */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
          <SolanaView props={{ setStatus }} />
        </div>
      </div>
    </div>
  )
}
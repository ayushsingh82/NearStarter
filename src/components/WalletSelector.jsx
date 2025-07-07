import { useNearWallet } from "../provider/wallet";

const WalletSelector = () => {
  const { accountId, status, signIn, signOut } = useNearWallet();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center py-4">
        <div className="flex items-center space-x-3">
          <div className="w-5 h-5 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-emerald-400 text-sm font-medium">Connecting...</span>
        </div>
      </div>
    );
  }

  if (status === "authenticated" && accountId) {
    return (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 text-sm font-medium">Connected</span>
            </div>
            <div className="text-xs text-gray-400">NEAR Wallet</div>
          </div>
          <div className="mt-2">
            <span className="text-white font-mono text-sm">
              {accountId.length > 20 
                ? `${accountId.slice(0, 8)}...${accountId.slice(-8)}` 
                : accountId
              }
            </span>
          </div>
        </div>
        <button
          onClick={signOut}
          className="w-full px-4 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Disconnect Wallet
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={signIn}
      className="w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
      <span>Connect NEAR Wallet</span>
    </button>
  );
};

export default WalletSelector; 
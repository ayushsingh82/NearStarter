import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/debounce";
import { Connection as SolanaConnection, PublicKey } from "@solana/web3.js";
import { setupHotWallet } from "@near-wallet-selector/hot-wallet";
import { setupWalletSelector } from "@near-wallet-selector/core";

// Configure NEAR network here (align with your app). Default to testnet.
const NEAR_NETWORK = "testnet";

const connection = new SolanaConnection("https://api.devnet.solana.com");

export function SolanaView({ props: { setStatus }, signer }) {
  // If external signer provided, prefer it; else create local Hot Wallet selector
  const [nearSelector, setNearSelector] = useState(null);
  const [nearAccountId, setNearAccountId] = useState(signer?.accountId ?? null);

  // Basic UI state
  const [receiverAddress, setReceiverAddress] = useState(
    "G58AYKiiNy7wwjPAeBAQWTM6S1kJwP3MQ3wRWWhhSJxA",
  );
  const [transferAmount, setTransferAmount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState("request");
  const [signedTransaction, setSignedTransaction] = useState(null);
  const [senderAddress, setSenderAddress] = useState("");
  const [solanaBalance, setSolanaBalance] = useState("0");

  const [derivationPath, setDerivationPath] = useState("solana-1");
  const debouncedDerivationPath = useDebounce(derivationPath, 500);

  // Initialize local NEAR Hot Wallet selector only if external signer not provided
  useEffect(() => {
    if (signer) return;

    let sub = null;

    setupWalletSelector({
      network: NEAR_NETWORK,
      modules: [setupHotWallet()],
    }).then((selector) => {
      setNearSelector(selector);
      const { store } = selector;
      sub = store.observable.subscribe(({ accounts }) => {
        const active = accounts.find((a) => a.active)?.accountId || null;
        setNearAccountId(active);
      });
    });

    return () => {
      if (sub) sub.unsubscribe();
    };
  }, [signer]);

  useEffect(() => {
    setSenderAddress("Waiting for you to stop typing...");
  }, [derivationPath]);

  // Generate a mock Solana address for demonstration
  useEffect(() => {
    generateMockAddress();

    async function generateMockAddress() {
      try {
        setStatus("Generating Solana address...");
        setSenderAddress(`Generating address from path ${debouncedDerivationPath}...`);

        // Create a mock address based on the derivation path and account ID
        const accountPrefix = (signer?.accountId ?? nearAccountId) || "demo";
        const pathHash = debouncedDerivationPath.split('').reduce((a, b) => {
          a = ((a << 5) - a) + b.charCodeAt(0);
          return a & a;
        }, 0);
        
        // Generate a mock Solana address
        const mockAddress = `Sol${Math.abs(pathHash).toString(36)}${accountPrefix.slice(-4)}...${Math.random().toString(36).substring(2, 8)}`;
        
        setSenderAddress(mockAddress);

        // Try to get balance from the receiver address (real Solana call)
        try {
          const receiverPubkey = new PublicKey(receiverAddress);
          const balance = await connection.getBalance(receiverPubkey);
          const balanceInSol = balance / 1000000000; // Convert lamports to SOL
          setSolanaBalance(balanceInSol.toString());
          setStatus(
            `Generated Solana address: ${mockAddress}, Receiver balance: ${balanceInSol} SOL`
          );
        } catch (error) {
          setStatus(`Generated Solana address: ${mockAddress} (Receiver address invalid)`);
        }
      } catch (error) {
        console.error("Error generating mock address:", error);
        setStatus(`Error: ${error.message}`);
      }
    }
  }, [signer?.accountId, nearAccountId, debouncedDerivationPath, setStatus, receiverAddress]);

  // Helper: signAndSendTransactions using provided signer or local selector (Hot Wallet)
  const signAndSendTransactions = async (params) => {
    if (signer) {
      return signer.signAndSendTransactions(params);
    }
    if (!nearSelector) throw new Error("NEAR Hot Wallet not initialized");
    const wallet = await nearSelector.wallet();
    return wallet.signAndSendTransactions(params);
  };

  async function handleChainSignature() {
    setIsLoading(true);
    setStatus("🏗️ Preparing transaction (Demo Mode)");

    try {
      // Simulate transaction preparation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStatus("🕒 This is a demo - chainsig.js integration is being worked on...");
      
      // Simulate signing process
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      setStatus("✅ Demo transaction prepared (Full chainsig.js integration coming soon)");
      setCurrentStep("relay");
    } catch (error) {
      console.log(error);
      const message = error instanceof Error ? error.message : String(error);
      setStatus(`❌ Error: ${message}`);
    }
    
    setIsLoading(false);
  }

  async function handleRelayTransaction() {
    setIsLoading(true);
    setStatus("🔗 Relaying transaction (Demo Mode)...");

    try {
      // Simulate relay process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockTxHash = Math.random().toString(36).substring(2, 15);
      const url = `https://explorer.solana.com/tx/${mockTxHash}?cluster=devnet`;
      setStatus(`✅ Demo Transaction Broadcasted: ${url}`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setStatus(`❌ Error: ${message}`);
    }

    setCurrentStep("request");
    setIsLoading(false);
  }

  const handleUIChainSignature = async () => {
    setIsLoading(true);
    await handleChainSignature();
    setIsLoading(false);
  };

  const isConnected = Boolean(signer?.accountId ?? nearAccountId);

  return (
    <>
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6 mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-blue-400 font-semibold">Demo Mode</span>
        </div>
        <p className="text-gray-300 text-sm mb-4">
          This is a demonstration version. The full chainsig.js integration for Solana address derivation 
          and transaction signing is being implemented. Currently showing mock functionality.
        </p>
        <div className="text-center">
          <p className="text-gray-300 text-sm">
            You are working with <strong>DevNet</strong>.
            <br />
            You can get funds from the faucet:
            <a
              href="https://faucet.solana.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline ml-1"
            >
              faucet.solana.com/
            </a>
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl p-6 mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Derivation Path:
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
          value={derivationPath}
          onChange={(e) => setDerivationPath(e.target.value)}
          disabled={isLoading}
        />
        <div className="mt-3 p-3 bg-gray-800 border border-gray-600 rounded-lg">
          <span className="text-green-400 text-sm font-mono">{senderAddress}</span>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl p-6 mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-2">To Address:</label>
        <input
          type="text"
          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
          value={receiverAddress}
          onChange={(e) => setReceiverAddress(e.target.value)}
          disabled={isLoading}
        />
      </div>

      <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl p-6 mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-2">Amount:</label>
        <div className="flex">
          <input
            type="number"
            className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
            value={transferAmount}
            onChange={(e) => setTransferAmount(Number(e.target.value))}
            step="0.1"
            min="0"
            disabled={isLoading}
          />
          <span className="px-4 py-3 bg-green-600 text-white font-semibold rounded-r-lg border border-green-600">
            SOL
          </span>
        </div>
      </div>

      <div className="text-center">
        <button
          className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none mr-4"
          onClick={handleUIChainSignature}
          disabled={isLoading || !isConnected}
        >
          {isLoading ? "Processing..." : (isConnected ? "Demo Transaction" : "Connect NEAR Wallet")}
        </button>
        
        {currentStep === "relay" && (
          <button
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            onClick={handleRelayTransaction}
            disabled={isLoading}
          >
            Relay Demo Transaction
          </button>
        )}
        
        {!isConnected && (
          <p className="text-gray-400 text-sm mt-4">
            Please connect your NEAR wallet using the button in the navbar above
          </p>
        )}
      </div>
    </>
  );
}
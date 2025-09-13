
import { useState } from 'react'
import { SolanaView } from './Solana'

export default function SolanaAddressPage() {
  const [status, setStatus] = useState('Ready')

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 16 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Derived Address: Solana (Devnet)</h1>
      <p style={{ color: '#666', marginBottom: 16 }}>Connect your NEAR wallet, derive a Solana devnet address, sign, and relay a transaction.</p>

      <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 12, marginBottom: 16 }}>
        <strong>Status:</strong> <span>{status}</span>
      </div>

      <SolanaView props={{ setStatus }} />
    </div>
  )
}
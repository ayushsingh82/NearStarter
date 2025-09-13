import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { ClientLayout } from './components/ClientLayout'
import SolanaAddressPage from './components/SolanaAddress'
import './App.css'

function App() {
  return (
    <ClientLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solana" element={<SolanaAddressPage />} />
      </Routes>
    </ClientLayout>
  )
}

export default App

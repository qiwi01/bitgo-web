import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WalletPage from './pages/WalletPage'
import WithdrawPage from './pages/WithdrawPage'
import WithdrawConfirmationPage from './pages/WithdrawConfirmationPage'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<WalletPage />} />
          <Route path="/withdraw" element={<WithdrawPage />} />
          <Route path="/withdraw-confirmation" element={<WithdrawConfirmationPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
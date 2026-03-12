import React from 'react'
import { Link } from 'react-router-dom'
import './WalletPage.css'

const WalletPage: React.FC = () => {
  const user = {
    name: 'Rosene Julie Ann',
    email: 'rosene.julie@example.com',
    accountNumber: 'BTC-123456789',
    balance: 344000
  }

  return (
    <div className="wallet-page">
      <div className="wallet-container">
        <div className="wallet-header">
          <div className="logo-container">
            <img src="/images/bitgo logo.jpeg" alt="BitGo Logo" className="logo" />
            <h1>Wallet</h1>
          </div>
        </div>

        <div className="welcome-container">
          <div className="welcome-text">
            <h2>Welcome {user.name}</h2>
          </div>
        </div>

        <div className="balance-container">
          <div className="balance-card">
            <div className="balance-header">
              <h2>Bitcoin Balance</h2>
            </div>
            <div className="balance-amount">
              <span className="currency-symbol">$</span>
              <span className="amount">{user.balance.toLocaleString()}</span>
            </div>
            <div className="balance-usd">
              <strong>Taxes required for additional profit: $11,900</strong>
            </div>
          </div>

          <div className="actions-container">
            <div className="actions">
              <Link to="/withdraw" className="btn btn-primary">
                Withdraw
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WalletPage

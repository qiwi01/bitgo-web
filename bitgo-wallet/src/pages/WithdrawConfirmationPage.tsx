import React from 'react'
import { Link } from 'react-router-dom'
import './WithdrawConfirmationPage.css'

const WithdrawConfirmationPage: React.FC = () => {
  return (
    <div className="withdraw-confirmation-page">
      <div className="confirmation-container">
        <div className="confirmation-header">
          <div className="icon-container">
            <div className="icon-warning">⚠️</div>
          </div>
          <h1>Important Notice</h1>
          <p className="subtitle">Tax and Debt Verification Required</p>
        </div>

        <div className="confirmation-content">
          <div className="alert-box">
            <h3>Before Processing Your Withdrawal</h3>
            <p>
              We have detected that there may be outstanding tax obligations or 
              debt issues associated with your account. For compliance and legal 
              reasons, we cannot process your withdrawal until these matters are 
              resolved.
            </p>
          </div>


          <div className="support-info">
            <h3>Contact Support</h3>
            <p>
              Please contact our support team to discuss your situation and 
              receive guidance on how to proceed:
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong> support@bitgo.com
              </div>
              <div className="contact-item">
                <strong>Phone:</strong> +1 (800) 555-0123
              </div>
              <div className="contact-item">
                <strong>Hours:</strong> Monday - Friday, 9 AM - 6 PM EST
              </div>
            </div>
          </div>

          <div className="next-steps">
            <h3>Next Steps</h3>
            <ol>
              <li>Reach out to our support team using the contact information above</li>
              <li>Provide any requested documentation for verification</li>
              <li>Work with our team to resolve any compliance issues</li>
              <li>Once cleared, your withdrawal will be processed</li>
            </ol>
          </div>
        </div>

        <div className="confirmation-actions">
          <Link to="/withdraw" className="btn btn-secondary">
            Back to Withdraw Form
          </Link>
          <Link to="/" className="btn btn-primary">
            Return to Wallet
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WithdrawConfirmationPage
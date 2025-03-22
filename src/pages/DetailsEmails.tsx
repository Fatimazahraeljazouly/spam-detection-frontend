import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Email } from '../types/email'

const DetailsEmails = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const email: Email = location.state?.email || {}

    const handleBack = () => {
        navigate(-1)
    }
    return (
        <div className="email-details-container">
            <div className="email-details-header">
                <button className="back-button" onClick={handleBack}>
                    ← Back to Inbox
                </button>
                <div className="email-status">
                    {email.is_spam ? (
                        <span className="status-badge spam">Spam</span>
                    ) : (
                        <span className="status-badge ham">Clean</span>
                    )}
                </div>
            </div>

            <div className="email-details-content">
                <div className="email-details-subject">
                    <h1>{email.subject || '(No Subject)'}</h1>
                </div>

                <div className="email-details-meta">
                    <div className="meta-item">
                        <span className="meta-label">From:</span>
                        <span className="meta-value">{email.from_email || 'Unknown Sender'}</span>
                    </div>
                    <div className="meta-item">
                        <span className="meta-label">Date:</span>
                        <span className="meta-value">{new Date().toLocaleDateString()}</span>
                    </div>
                </div>

                <div className="email-details-body">
                    <div className="message-content">
                        {email.message}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsEmails;

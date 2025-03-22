import React from 'react';
import { Email } from '../types/email';
import { useNavigate } from 'react-router-dom';

interface EmailListProps {
    emails: Email[];
}

const EmailList: React.FC<EmailListProps> = ({ emails }) => {
    const navigate = useNavigate();

    const handleClick = (email: Email) => {
        navigate("/details", { state: { email } });
    };

    return (
        <div className="email-list">
            <div className="email-list-header">
                <div className="email-column from">From</div>
                <div className="email-column subject">Subject</div>
                <div className="email-column status">Status</div>
            </div>
            {emails.map((email) => (
                <div 
                    key={email.id} 
                    className="email-item"
                    onClick={() => handleClick(email)}
                >
                    <div className="email-column from">
                        <div className="sender-avatar">
                            {email.from_email.charAt(0).toUpperCase()}
                        </div>
                        <span className="email-from">
                            {email.from_email || 'No sender'}
                        </span>
                    </div>
                    <div className="email-column subject">
                        <div className="email-subject">
                            {email.subject || '(No Subject)'}
                        </div>
                        <div className="email-preview">
                            {email.message.substring(0, 60)}...
                        </div>
                    </div>
                    <div className="email-column status">
                        {email.is_spam ? (
                            <span className="status-badge spam">Spam</span>
                        ) : (
                            <span className="status-badge ham">Clean</span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EmailList;
import axios, { AxiosError, AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import EmailList from '../components/EmailList';
import { Email } from '../types/email';

interface ApiResponse {
    data: Email[];
}

const NoSpamEmail = () => {
    const [emails, setEmails] = useState<Email[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEmails = async () => {
            try {
                console.log('Fetching non-spam emails...');
                const response: AxiosResponse<ApiResponse> = await axios.get<ApiResponse>("http://localhost:5000/hamEmails");
                console.log('Response:', response.data);
                setEmails(response.data.data);
            }
            catch (error) {
                console.error('Error fetching emails:', error);
                if (error instanceof AxiosError) {
                    const errorMessage = error.response?.data?.message || error.message;
                    setError(`Error: ${errorMessage}`);
                } else {
                    setError('An unexpected error occurred');
                }
            } finally {
                setLoading(false);
            }
        };
        fetchEmails();
    }, []);

    if (loading) return <p className="loading">Loading Emails...</p>;
    if (error) return (
        <div className="error-container">
            <p className="error-message">{error}</p>
            <p className="error-help">Please make sure the backend server is running on port 5000</p>
        </div>
    );

    return (
        <div className="email-container">
            <h1>Non-Spam Emails</h1>
            {emails.length === 0 ? (
                <p className="no-emails">No non-spam emails found</p>
            ) : (
                <EmailList emails={emails} />
            )}
        </div>
    );
};

export default NoSpamEmail;
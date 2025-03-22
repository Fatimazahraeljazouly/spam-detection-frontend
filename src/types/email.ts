export interface Email {
    id: number;
    subject: string;
    from_email: string;
    message: string;
    is_spam: boolean;
} 
'use client'
import React from 'react';

const Login: React.FC = () => {
    const handleLogin = () => {
        const params = new URLSearchParams({
            response_type: 'code',
            client_id: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID!,
            redirect_uri: process.env.NEXT_PUBLIC_LINKEDIN_REDIRECT_URI!,
            scope: 'openid email profile',
        })

        window.location.href = `https://www.linkedin.com/oauth/v2/authorization?${params}`
    }
    return (
        <div>
            <h1>LinkedIn Login</h1>
            <button onClick={handleLogin}>Sing In With LinkedIn</button>
        </div>
    )
};

export default Login;

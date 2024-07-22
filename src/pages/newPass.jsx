import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { account } from '../Appwrite/config';

function ResetPassword() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const userId = searchParams.get('userId');
    const secret = searchParams.get('secret');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const resetPassword = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await account.updateRecovery(userId, secret, password, confirmPassword);
            console.log(response);
            alert("Password reset successful!");
            navigate("/login");
        } catch (error) {
            console.error("Password reset failed:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
            <form onSubmit={resetPassword} className="space-y-4">
                <div>
                    <label htmlFor="password" className="block text-lg font-medium">New Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border border-gray-300 p-2 rounded-md w-full"
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword" className="block text-lg font-medium">Confirm New Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="border border-gray-300 p-2 rounded-md w-full"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-lg transition duration-200"
                >
                    Reset Password
                </button>
            </form>
        </div>
    );
}

export default ResetPassword;

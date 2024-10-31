import React, { useState } from 'react';
import { authenticate } from '../context/contextProvider';

export const Login = () => {
    const { loginUser } = authenticate(); // Obtén `loginUser` directamente

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await loginUser(email, password); // Llama a `loginUser` con email y password
    };

    return (
        <div className='min-h-screen w-full flex items-center justify-center bg-gray-500'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-4 rounded-lg shadow-xl bg-gray-600 w-2/6'>
                <label className='text-white text-xl font-bold' htmlFor="email">Email:</label>
                <input onChange={(e) => setEmail(e.target.value)} placeholder='ejemplo@gmail.com' className='rounded-sm p-1 px-2' type="text" name='email' />
                
                <label className='text-white text-xl font-bold' htmlFor="password">Password:</label>
                <input onChange={(e) => setPassword(e.target.value)} className='rounded-sm p-1 px-2' type="password" name='password' />
                
                <button type='submit' className='bg-blue-300 rounded-lg p-2 font-bold text-black'>Login</button>
            </form>
        </div>
    );
};

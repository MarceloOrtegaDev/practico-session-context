import React from 'react'
import { authenticate } from '../context/contextProvider'

export const Home = () => {

    const {logout} = authenticate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await logout();
    };

    return (
        <>
        <div className='min-h-screen bg-gray-900 w-full flex items-center justify-center gap-4 flex-col'>
            <div className='flex gap-2'>
            <h1 className='text-white font-bold text-2xl'><p className='text-green-400'>Welcome</p> to home</h1>
            <i className="fa-brands fa-react text-6xl text-blue-400 animate-pulse"></i>
            </div>
        <button className='text-white font-bold border rounded-md p-2 hover:bg-gray-800 hover:border-blue-200' onClick={handleSubmit}>logout</button>
        </div>
        </>
    )
}

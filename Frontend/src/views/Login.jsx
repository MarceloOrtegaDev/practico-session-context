import React from 'react';
import { authenticate } from '../context/contextProvider';
import { useForm } from "react-hook-form";

export const Login = () => {
    const { loginUser } = authenticate(); // Obtén `loginUser` directamente
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const { email, password } = data;
        await loginUser(email, password); // Llama a `loginUser` con email y password
    };

    return (
        <div className='min-h-screen w-full flex items-center justify-center bg-gray-800'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 p-4 rounded-lg shadow-xl border bg-gray-50 w-2/6'>
                <div className='flex flex-col'>
                    <label className='text-black text-xl font-bold' htmlFor="email">Email</label>
                    <input 
                        {...register("email", { 
                            required: "Email es requerido", 
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Email no es válido"
                            }
                        })} 
                        placeholder='ejemplo@gmail.com' 
                        className='p-1 px-2 border border-black rounded-md' 
                        type="text" 
                        name='email' 
                    />
                    {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                </div>

                <div className='flex flex-col'>
                    <label className='text-black text-xl font-bold' htmlFor="password">Password</label>
                    <input 
                        {...register("password", { 
                            required: "La contraseña es requerida"
                        })} 
                        className='p-1 px-2 border border-black rounded-md' 
                        type="password" 
                        name='password' 
                    />
                    {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                </div>

                <button type='submit' className='bg-gray-900 rounded-lg p-2 font-bold text-white hover:bg-gray-700'>Login</button>
            </form>
        </div>
    );
};

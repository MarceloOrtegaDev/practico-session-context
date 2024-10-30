import React from 'react'
import { authenticate } from '../context/contextProvider'

export const Login = () => {
  const { loginUser } = authenticate()
  return (
    <div>Login</div>
  )
}

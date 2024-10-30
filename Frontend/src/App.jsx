import './App.css'
import { ContextProvider } from './context/contextProvider.jsx'
import { Home } from './views/home.jsx'
import { Login } from './views/Login.jsx'

function App() {

  return (
    <ContextProvider>
      <Home />
      <Login />
    </ContextProvider>
  )
}

export default App

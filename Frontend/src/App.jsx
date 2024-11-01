import './App.css';
import {authenticate } from './context/contextProvider.jsx';
import { Home } from './views/home.jsx';
import { Login } from './views/Login.jsx';

function App() {
  const { state } = authenticate(); 
    return (
        state.isLogged ? <Home /> : <Login />
    );
}

export default App;

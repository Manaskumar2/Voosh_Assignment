// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/home'
import ErrorPage from './Components/errorPage'
import SignUp from './Components/signup';
import Login from './Components/login';


function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <div className='logo'><h2>VOOSH </h2></div>
        <div className='route'>
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='signup' element={<SignUp />} />

            <Route path='login' element={<Login />} />=

            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;

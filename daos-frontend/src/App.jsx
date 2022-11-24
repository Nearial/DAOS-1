import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import './App.css';

export default function App() {
  return (
    <div className='app'>
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/musicians' element={<h1>Find musician</h1>} />
          <Route path='/ensembles' element={<h1>Find ensemble</h1>} />
          <Route path='/profile' element={<h1>Profile</h1>} />
          <Route path='/sign-up' element={<h1>Sign up</h1>} />
          <Route path='/login' element={<h1>Login</h1>} />
        </Routes>
      </div>
      <footer>
        Footer
      </footer>
    </div>
  );
}
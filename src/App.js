import './default.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Login from './pages/Login';
import Register from './pages/Register';
import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import FindPw from './pages/FindPw';
import Locker from './pages/Locker';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route exact path='/' element={
          <Banner />
        }/>
        <Route path='/login' element={
          <Login />
        }/>
        <Route path='/register' element={
          <Register />
        }/>
        <Route path='/welcome' element={
          <Welcome />
        }/>
        <Route path='/findpw' element={
          <FindPw />
        }/>
        <Route path='/locker/status' element={
          <Locker />
        }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App; 

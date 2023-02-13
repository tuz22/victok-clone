import './default.css';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Banner from './components/banner';
import Login from './pages/login';
import Register from './pages/register';
import { Route, Routes } from 'react-router-dom';

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App; 

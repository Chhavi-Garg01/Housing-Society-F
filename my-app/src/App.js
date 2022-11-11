import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

import AdminScreen from './pages/AdminScreen';
import BookingScreen from './pages/BookingScreen';
import Home from './pages/Home';
import LandingScreen from './pages/LandingScreen';
import Login from './pages/Login';
import ProfileScreen from './pages/ProfileScreen';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/book/:id" element={<BookingScreen />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path='/admin' element={<AdminScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

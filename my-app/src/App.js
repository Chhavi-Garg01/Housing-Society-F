import { BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import BookingScreen from './pages/BookingScreen';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>

          <Route path="/home" element={<Home />} />
          <Route path="/book/:id" element={<BookingScreen />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

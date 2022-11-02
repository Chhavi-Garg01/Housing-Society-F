import './App.css';
import Auth from './cmp/Auth';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './cmp/About';
import Home from './cmp/Home';
import Protected from './cmp/Protected';
import Listing from './cmp/Listing';
import Nav from './cmp/Nav';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />

        <Routes>
          <Route path="/about" element={<Protected cmp={About}/>}>
          </Route>
          <Route path="/home" element={<Protected cmp={Home}/>}>
          </Route>
          <Route path="/list" element={<Protected cmp={Listing}/>}>
          </Route>
          <Route path="/" element={<Auth />}>
          </Route>
        </Routes>
     </Router>
    </div>
  );
}

export default App;

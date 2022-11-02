import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Auth from './components/Auth';
import Bookings from './components/Bookings';
import Resources from "./components/Resources";
import Users from "./components/Users";
import Protected from './components/Protected';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/users" element={<Protected cmp={Users}/>}>
          </Route>
          <Route path="/resources" element={<Protected cmp={Resources}/>}>
          </Route>
          <Route path="/bookings" element={<Protected cmp={Bookings}/>}>
          </Route>
          <Route path="/login" element={<Auth />}>
          </Route>
        </Routes>
     </Router>
    </div>
  );
}

export default App;

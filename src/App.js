/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import './App.css';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Route exact path="/home" component={Home} />
      <Route exact path="/addUser" component={AddUser} />
      <Route exact path="/editUser/:id" component={EditUser} />
    </BrowserRouter>
      
    </div>
  );
}

export default App;

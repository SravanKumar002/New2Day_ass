import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import RequestAcess from './components/RequestAcess'
import './App.css';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
           <Route path="/" element={<Login/>}/>
           <Route path="/home" element={<Home />}/>
           <Route path="/req" element = {<RequestAcess/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

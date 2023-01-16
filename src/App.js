import Login from './components/pages/Login'
import Register from './components/pages/Register'
import MainContainer from './components/pages/MainContainer'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/">
              <Route index element={<Login/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/container" element={<MainContainer/>}/>
           </Route> 
        </Routes>
    </Router>
  );
}

export default App;

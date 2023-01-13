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



// import React, { useState } from "react";

// const App = () => {
//   const [textValue, setTextValue] = useState("");
//   const handleChange = (e) => {
//     const file = e.target.files[0];

//     let reader = new FileReader();

//     reader.onload = (e) => {
//       const file = e.target.result;
//       console.log(file);
//       setTextValue(file);
//     };

//     reader.onerror = (e) => alert(e.target.error.name);
//     reader.readAsText(file);
//   };

//   const changeValue = (e) => {
//     setTextValue(e.target.value);
//   }
//   return (
//     <div style={{ display: "flex" }}>
//       <input type="file" name="input" onChange={handleChange} />
//       <textarea
//         cols={30}
//         rows={20}
//         value={textValue}
//         onChange={changeValue}
//         style={{ marginTop: 15, width: "50%" }}
//       ></textarea>
//     </div>
//   );
// };

// export default App;

import './App'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './component/Register'
import Login from './component/Login'


function App() {

  return (
    <>
     <BrowserRouter>

        <Routes>

          
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element= {<Register/>}/>

        </Routes>

     </BrowserRouter>
    </>
  )
}

export default App;
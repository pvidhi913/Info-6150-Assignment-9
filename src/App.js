
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";


import Home from './Component/Home/Home' ;
import Layout from './Component/Layout/Layout' ;
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Job from './Component/Job/Job';
import ChildHome from './Component/Home/ChildHome';
import Login from './Component/Login/Login';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Login/>}/>
        {/* <Route path= element={<Home/>}/> */}
        <Route path="login" element={<Login/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="job" element={<Job/>}/>
        <Route path="contact" element={<Contact/>}/>
        </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;

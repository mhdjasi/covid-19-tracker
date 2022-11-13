import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Country from './components/Country';
import Kerala from './components/Kerala';
import DistrictDetails from './components/DistrictDetails';
import Main from './components/main/Main';


function App() {
  return (

    <>
    <Router>
    <Header/>
    <Routes>
     
    <Route path='/' element={<Main/>} />

    <Route path='/country' element={<Country/>} />
      <Route   path='/home' element={<Home/>} />
      <Route  path='/kerala' element={<Kerala/>} />

      <Route  path='/distdetails/:dist' element={<DistrictDetails/>} />

    </Routes>
    <Footer/>
    </Router>
    </>

    // <div className="App">
    //   
    //   <Home/>
    //   
    // </div>
  );
}

export default App;

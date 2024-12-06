import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import CartPage from './Pages/Cart';
import Signup from './Pages/Signup';
import Aboutus from './Pages/Aboutus';
import Products from './Pages/Products';
import ProductDetails from './components/ProductDetails';
import Contactus from './Pages/Contactus';
import Footer from './Pages/Footer';
import BlogSection from './Pages/BlogSection';
import Login from './Pages/Login';


function App() {
  return (

      <div className='App'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Products' element={<Products/>} />
          <Route path='/product/:id' element={<ProductDetails/>} />
          <Route path='/BlogSection' element={<BlogSection/>} />
          <Route path='/Aboutus' element={<Aboutus/>} />
          <Route path='/Contact us' element={<Contactus/>} />
          <Route path="/Cart" element={<CartPage />} />
          <Route path='/Login' element={ <Login/> } />
          <Route path='/Signup' element={ <Signup/>} />
          
        </Routes>
        <Footer/>
      </div>   
  );
}


export default App;

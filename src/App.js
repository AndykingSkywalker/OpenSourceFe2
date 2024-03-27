import './App.css';
import { Link, Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './Components/Homepage/Home.jsx';
import PageForItem from './Components/Item/PageForItem.jsx';
import CreateItemPage from './Components/Item/CreateItemPage.jsx';
import BasketPage from './Components/Basket/BasketPage.jsx';
import Logo from './Business.png';
import React, { useState, useEffect } from 'react';
import Login from './Components/Homepage/Login.jsx';
import Navbar from './Components/Homepage/Navbar.jsx';
import ProtectedRoutes from './ProtectedRoutes.js';
import styled, {ThemeProvider} from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes.js';
import EditItem from './Components/Item/EditItem.jsx';
import Wishlist from './Components/Wishlist/Wishlist.jsx';

function App() {


  return (
    <header>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route element={<Home />} path="/" />
        </Route>
        <Route element={<Home />} path="/Home" />
        <Route path="/LoginPage" element={<Login />} />
        <Route path="/Basket" element={<BasketPage />} />
        <Route path="/EditItem/:id" element={<EditItem />} />
        <Route path="/CreateItems" element={<CreateItemPage />} />
        <Route path="Wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  </header>
  );
}
export default App;
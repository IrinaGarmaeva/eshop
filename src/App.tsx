import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './utils/constants';
import Home from './components/pages/Home/Home';
import Cart from './components/pages/Cart/Cart';
import Contact from './components/pages/Contact/Contact';
import MyOrders from './components/pages/MyOrders/MyOrders';
import Admin from './components/pages/Admin/Admin';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import './App.scss';
import SignIn from './components/pages/SignIn/SignIn';
import SignUp from './components/pages/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.contact} element={<Contact />} />
          <Route path={ROUTES.cart} element={<Cart />} />
          <Route path={ROUTES.orders} element={<MyOrders />} />
          <Route path={ROUTES.admin} element={<Admin />} />
          <Route path={ROUTES.sign.in} element={<SignIn />} />
          <Route path={ROUTES.sign.up} element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

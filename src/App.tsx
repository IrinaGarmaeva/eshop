import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './utils/constants';
import { Header, Footer } from './components/layout';
import { Home, Cart, Contact, MyOrders, Admin, SignIn, SignUp } from './components/pages';
import './App.scss';

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

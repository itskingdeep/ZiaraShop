import React, { useEffect, useState, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './responsive.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Listing from './pages/Listing';
import NotFound from './pages/NotFound';
import DetailsPage from './pages/Details';
import Checkout from './pages/checkout';

import axios from 'axios';
import Cart from './pages/cart';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Loader from './assets/images/shopping-buy.gif';

import { ref, onValue } from 'firebase/database';
import { db } from './firebase';

const MyContext = createContext();

function App() {
  const [productData, setProductData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isopenNavigation, setIsopenNavigation] = useState(false);
  const [isLogin, setIsLogin] = useState();
  const [isOpenFilters, setIsOpenFilters] = useState(false);
  const [cartTotalAmount, setCartTotalAmount] = useState();

  useEffect(() => {
    const is_Login = localStorage.getItem('isLogin');
    setIsLogin(is_Login);

    const productDataRef = ref(db, 'productData');
    onValue(productDataRef, (snapshot) => {
      const data = snapshot.val();
      setProductData(data);
      setIsLoading(false);
    });
  }, []);

  const getCartData = async (url) => {
    try {
      await axios.get(url).then((response) => {
        setCartItems(response.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const addToCart = async (item) => {
    item.quantity = 1;
    try {
      await axios.post("http://localhost:5000/cartItems", item).then((res) => {
        if (res !== undefined) {
          setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeItemsFromCart = (id) => {
    const arr = cartItems.filter((obj) => obj.id !== id);
    setCartItems(arr);
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const signIn = () => {
    const is_Login = localStorage.getItem('isLogin');
    setIsLogin(is_Login);
  };

  const signOut = () => {
    localStorage.removeItem('isLogin');
    setIsLogin(false);
  };

  const openFilters = () => {
    setIsOpenFilters(!isOpenFilters);
  };

  const value = {
    cartItems,
    isLogin,
    windowWidth,
    isOpenFilters,
    addToCart,
    removeItemsFromCart,
    emptyCart,
    signOut,
    signIn,
    openFilters,
    isopenNavigation,
    setIsopenNavigation,
    setCartTotalAmount,
    cartTotalAmount,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={value}>
        {isLoading ? (
          <div className="loader">
            <img src={Loader} alt="Loading..." />
          </div>
        ) : (
          <>
            <Header data={productData} />
            <Routes>
              <Route exact path="/" element={<Home data={productData} />} />
              <Route exact path="/cat/:id" element={<Listing data={productData} single={true} />} />
              <Route exact path="/cat/:id/:id" element={<Listing data={productData} single={false} />} />
              <Route exact path="/product/:id" element={<DetailsPage data={productData} />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/signIn" element={<SignIn />} />
              <Route exact path="/signUp" element={<SignUp />} />
              <Route exact path="/checkout" element={<Checkout />} />
              <Route exact path="*" element={<NotFound />} />
              <Route exact path="/about" element={<About/>} />
              
            </Routes>
            <Footer />
          </>
        )}
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };

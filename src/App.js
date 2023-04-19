import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
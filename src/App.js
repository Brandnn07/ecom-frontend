import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/Home';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Purchase from './pages/Purchase/Purchase';
import Cart from './pages/Cart/Cart';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route exact path="/products" element={<Products />}/>
          <Route exact path="/contact" element={<Contact />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/cart" element={<Cart />}/>
          <Route exact path="/product/:id" element={<Purchase />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

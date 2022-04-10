import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import NavBar from './components/NavBar/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}></Route>
            <Route path="/category/:brandId" element={<ItemListContainer></ItemListContainer>}></Route> 
            <Route path="/item/:itemId" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
            <Route path="/aboutus" element={<AboutUs/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

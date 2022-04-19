import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import NavBar from './components/NavBar/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Provider from "./components/Provider/Provider";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

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
            <Route path="/provider" element={<Provider/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
            <Route path="*" element={ <Navigate to="/"/> }/>
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

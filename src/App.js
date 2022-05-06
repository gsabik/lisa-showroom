import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Provider from "./components/Provider/Provider"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}></Route>
            <Route path="/category/:brandId" element={<ItemListContainer/>}></Route> 
            <Route path="/item/:itemId" element={<ItemDetailContainer/>}></Route>
            <Route path="/provider" element={<Provider/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
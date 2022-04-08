import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from './components/NavBar/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}></Route>
          <Route path="/category/:brandId" element={<ItemListContainer></ItemListContainer>}></Route> 
          <Route path="/aboutus" element={<AboutUs/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

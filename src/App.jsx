import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import Home from "./components/Home";
import CartWidget from "./components/CartWidget";
import ItemDetailContainer from "./components/ItemDetailContainer";



const App = () => {
  return (
    <div>
      <BrowserRouter> 
          <NavBar />
        <Routes>
          <Route exact path="/" element={ <ItemListContainer /> } />
          <Route exact path="/catalogue" element={<ItemListContainer />} />
          <Route exact path="/category/:category" element={ <ItemListContainer /> } /> 
          <Route exact path="/item/:id" element={ <ItemDetailContainer /> }  />
          <Route exact path="/cart" element={ <CartWidget /> } />  
        </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
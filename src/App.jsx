import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import Home from "./components/Home";
import CartWidget from "./components/CartWidget";
import ItemDetailContainer from "./components/ItemDetailContainer";
//import { StateCartProvider } from "./context/StateCart";
import ComponentA from "./components/ComponentA";
//importamos componente de trabajo en clase
import TrabajoEnClase from "./components/TrabajoEnClase";
import StateCartProvider from "/context/StateCart";



const App = () => {
  return (
      <StateCartProvider>
        <BrowserRouter> 
            <NavBar />
          <Routes>
            <Route exact path="/" element={ <ItemListContainer /> } />
            <Route exact path="/catalogue" element={<ItemListContainer />} />
            <Route exact path="/category/:category" element={ <ItemListContainer /> } /> 
            <Route exact path="/item/:id" element={ <ItemDetailContainer /> }  />
            <Route exact path="/cart" element={ <CartWidget /> } /> 
            <Route exact path="/tpClase" element={ <TrabajoEnClase />} />
          </Routes>
            <Footer />
        </BrowserRouter>
         {/* <ComponentA /> */}
      </StateCartProvider>
  
  )
}

export default App
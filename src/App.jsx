import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartContext, CartProvider } from "./context/cartContext";
import Item from "./components/Item";
import ProfissionalDetail from "./components/ProfissionalDetail";
import Home from "./pages/Home";
import Cart from "./pages/Cart/Cart";

function App() {
  const [open, setOpen] = useState(false);
  const [countCart, setCountCart] = useState(0);

  return (
    <CartProvider>
      <div
        style={open ? { overflowY: "hidden" } : { overflowY: "auto" }}
        className="container-e-commerce"
      >
        <NavBar
          countCart={countCart}
          setCountCart={setCountCart}
          open={open}
          setOpen={setOpen}
        />
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  open={open}
                  setOpen={setOpen}
                  countCart={countCart}
                  setCountCart={setCountCart}
                />
              }
            />
            <Route
              path="/category/:category"
              element={<ItemDetailContainer />}
            />

            <Route
              path="/profissionals/:category"
              element={
                <ProfissionalDetail
                  setCountCart={setCountCart}
                  countCart={countCart}
                />
              }
            />

            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;

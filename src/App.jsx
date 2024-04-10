import { useEffect, useState } from "react";
import "./App.css";
import { initializeApp } from "firebase/app";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartContext, CartProvider } from "./context/cartContext";
import Item from "./components/Item";
import ProfissionalDetail from "./components/ProfissionalDetail";
import Home from "./pages/Home";
import Cart from "./pages/Cart/Cart";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loader from "./components/Loader";

const firebaseConfig = {
  apiKey: "AIzaSyAhmcKGdlarrTMHRTA4drWKOmxVKPvOdJ0",
  authDomain: "move-time-f21d8.firebaseapp.com",
  databaseURL: "https://move-time-f21d8-default-rtdb.firebaseio.com",
  projectId: "move-time-f21d8",
  storageBucket: "move-time-f21d8.appspot.com",
  messagingSenderId: "337443970212",
  appId: "1:337443970212:web:e73fa67f0eacf2fb2a1a31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  const [open, setOpen] = useState(false);
  const [countCart, setCountCart] = useState(0);
  const [products, setProducts] = useState(undefined);

  useEffect(() => {
    const db = getFirestore();

    const biciRef = doc(db, "professionals", "category");
    getDoc(biciRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducts({ ...snapshot.data() });
      }
    });
  }, []);

  if (products === undefined) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

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
                  fireStore={products}
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

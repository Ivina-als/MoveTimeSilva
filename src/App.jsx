import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  const [open, setOpen] = useState(false);
  const [countCart, setCountCart] = useState(0);

  return (
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
          {/* <Route
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
          /> */}

          <Route exact path="/" element={<ItemDetailContainer id={2} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

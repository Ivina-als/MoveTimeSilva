import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { stockItems } from "./utils/arr";

function App() {
  const [open, setOpen] = useState(false);
  const [countCart, setCountCart] = useState(0);
  const [greeting] = useState("Em breve informações dos cards");
  const [onAdd, setOnAdd] = useState(0);
  const [stock, setStock] = useState(10);

  return (
    <div className="container-e-commerce">
      <NavBar
        countCart={countCart}
        setCountCart={setCountCart}
        open={open}
        setOpen={setOpen}
      />
      <ItemListContainer
        setCountCart={setCountCart}
        countCart={countCart}
        onAdd={onAdd}
        setOnAdd={setOnAdd}
        greeting={greeting}
        stock={stock}
        setStock={setStock}
        stockItems={stockItems}
      />
    </div>
  );
}

export default App;

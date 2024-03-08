import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  const [open, setOpen] = useState(false);
  const [countCart, setCountCart] = useState(0);
  const [greeting] = useState("Em breve informações dos cards");

  return (
    <div className="container-e-commerce">
      <NavBar
        countCart={countCart}
        setCountCart={setCountCart}
        open={open}
        setOpen={setOpen}
      />
      <ItemListContainer greeting={greeting} />
    </div>
  );
}

export default App;

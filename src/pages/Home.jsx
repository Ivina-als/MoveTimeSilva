/* eslint-disable react/prop-types */
import { useState } from "react";
import ".././App.css";
import ItemListContainer from "../components/ItemListContainer";
import { stockItems } from "../utils/arr";

function Home(props) {
  const [greeting] = useState("Em breve informações dos cards");
  const [onAdd, setOnAdd] = useState(0);
  const [stock, setStock] = useState(10);

  return (
    <div className="containerBody">
      <ItemListContainer
        open={props.open}
        setOpen={props.setOpen}
        countCart={props.countCart}
        setCountCart={props.setCountCart}
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

export default Home;

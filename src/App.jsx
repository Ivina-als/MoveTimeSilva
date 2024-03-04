import light from "/light.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="container-title">
        <div className="container-figure">
          <img className="container-figure-img" src={light} />
        </div>
        <p className="text-title">MoveTime</p>
      </div>
    </>
  );
}

export default App;

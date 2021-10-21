import { useState } from "react";

const OtroComponent = () => {

  const [color, setColor] = useState("black");

  const handleColor = (nomColor) => {

    if (nomColor == "red") {
      setColor("rgb(221, 18, 18)")
    } else if (nomColor == "yellow") {
      setColor("rgb(235, 238, 51)")
    } else if (nomColor == "blue") {
      setColor("rgb(47, 112, 235)")
    }

  }

  return (
    <div className="otroComponent">
      <h1> OtroComponent</h1>
      <div className="buttons">
        <button className="button rojo" onClick={() => handleColor("red")}>
          Color Rojo
        </button>
        <button className="button azul" onClick={() => handleColor("blue")}>
          Color Azul
        </button>
        <button className="button amarillo" onClick={() => handleColor("yellow")}>
          Color Amarillo
        </button>
      </div>
      <div className="caja" style={{ backgroundColor: color }}></div>
    </div>
  );
}

export default OtroComponent;
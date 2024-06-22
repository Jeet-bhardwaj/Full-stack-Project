import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./component/NavBar";

function App() {
  const [activeButton, setActiveButton] = useState("Home");

  const images = import.meta.glob('../image/*.{png,jpeg,jpg,svg}');

  return (
    <>
      <NavBar activeButton={activeButton} setActiveButton={setActiveButton} />
      <div className="page d-flex flex-wrap">
        {Object.keys(images).map((imgPath, index) => (
          <div className="card m-2" style={{ width: '18rem' }} key={index}>
            <img src={imgPath.replace('..', '')} className="card-img-top" alt={`image-${index}`} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

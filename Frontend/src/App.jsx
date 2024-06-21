import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <div>
        <header class="d-flex justify-content-center py-3">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <button class="nav-link active" aria-current="page">
                Home
              </button>
            </li>
            <li class="nav-item">
              <button class="nav-link">4k Wallpapers</button>
            </li>
            <li class="nav-item">
              <button class="nav-link">Pc Wallpapers</button>
            </li>
            <li class="nav-item">
              <button class="nav-link">Mobil</button>
            </li>
            <li class="nav-item">
              <button class="nav-link">Icons</button>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}

export default App;

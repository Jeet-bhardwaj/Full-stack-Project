import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = ({setActiveButton,activeButton}) => {
    const handleOnClick = (buttonName) => {
        setActiveButton(buttonName);
      };
  return (
    <>
      <div>
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeButton === "Home" ? "active" : ""
                }`}
                onClick={() => handleOnClick("Home")}
                aria-current="page"
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeButton === "4k Wallpapers" ? "active" : ""
                }`}
                onClick={() => handleOnClick("4k Wallpapers")}
              >
                4k Wallpapers
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeButton === "Pc Wallpapers" ? "active" : ""
                }`}
                onClick={() => handleOnClick("Pc Wallpapers")}
              >
                Pc Wallpapers
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeButton === "Mobil" ? "active" : ""
                }`}
                onClick={() => handleOnClick("Mobil")}
              >
                Mobil
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeButton === "Icons" ? "active" : ""
                }`}
                onClick={() => handleOnClick("Icons")}
              >
                Icons
              </button>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default NavBar;

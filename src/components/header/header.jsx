import "./header.css";
import logoImg from "./../../img/icons/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img src={logoImg} alt="Logo" /> FASHION
          </div>
          <nav className="header__nav">
            <ul>
                <li><a href="#!">CATALOGUE</a></li>
                <li><a href="#!"></a>FASHION</li>
                <li><a href="#!"></a>FAVORITE</li>
                <li><a href="#!"></a>LIFESTYLE</li>
                <li><a href="#!" className="header__nav-btn"></a>SING UP</li>
            </ul>

          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

import mainLogo from "../images/header-logo.svg";

function Header({ alt }) {
  return (
    <>
      <header className="header">
        <img src={mainLogo} alt={alt} className="header__logo" />
      </header>
    </>
  );
}

export default Header;

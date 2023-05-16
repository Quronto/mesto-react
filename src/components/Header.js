import mainLogo from "../images/header-logo.svg";

function Header(props) {
  return (
    <>
      <header className="header">
        <img src={mainLogo} alt={props.alt} className="header__logo" />
      </header>
    </>
  );
}

export default Header;

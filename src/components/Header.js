import logo from '../assets/icons/Logo.svg'
import './main.css';

function Header() {
  return (
    <header className="header">
        <img src={logo} alt="Little Lemon Logo" className="header-logo" />
    </header>
  );
}
export default Header;
import logo from '../assets/icons/Logo.svg'
function Header() {
  return (
    <header style={{textAlign: 'center', padding: 'clamp(10px, 3vw, 20px)'}}>
        <img src={logo} alt="Little Lemon Logo" style={{maxWidth: '100%', height: 'auto', maxHeight: '80px'}} />
    </header>
  );
}
export default Header;
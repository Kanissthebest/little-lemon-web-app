import { Link } from 'react-router-dom';
function Nav() {
  return (
    <nav>
      <ul style={{listStyleType: 'none',
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        listStyle: 'none'

      }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li>About</li>
        <li>Menu</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}
export default Nav;
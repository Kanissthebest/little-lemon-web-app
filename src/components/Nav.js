function Nav() {
  return (
    <nav>
      <ul style={{listStyleType: 'none',
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        listStyle: 'none'

      }}>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservation</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}
export default Nav;
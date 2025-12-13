import logo from '../assets/icons/Logo.svg'
function Footer() {
  const footerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 'clamp(20px, 5vw, 150px)',
    gap: '20px'
  };

  const articleStyle = {
    textAlign: 'center',
    flex: '1 1 150px',
    minWidth: '150px'
  };

  const ulStyle = {
    listStyle: 'none',
    padding: 0,
    margin: '10px 0 0 0'
  };

  return (
    <footer style={footerStyle}>
        <img src={logo} alt='little lemon logo' style={{maxHeight: '60px', maxWidth: '100%', height: 'auto'}} />
        <article style={articleStyle}>
            <h3>Other links</h3>
            <ul style={ulStyle}>
                <li><a href="#email">Email</a></li>
                <li><a href="#phone">Phone number</a></li>
                <li><a href="#address">Address</a></li>
            </ul>
        </article>
        <article style={articleStyle}>
            <h3>Contact</h3>
            <ul style={ulStyle}>
                <li><a href="#email">Email</a></li>
                <li><a href="#phone">Phone number</a></li>
                <li><a href="#address">Address</a></li>
            </ul>
        </article>
        <article style={articleStyle}>
            <h3>Social Media</h3>
            <ul style={ulStyle}>
                <li><a href="#email">Email</a></li>
                <li><a href="#phone">Phone number</a></li>
                <li><a href="#address">Address</a></li>
            </ul>
        </article>
    </footer>
  );
}
export default Footer;
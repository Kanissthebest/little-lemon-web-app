import logo from '../assets/icons/Logo.svg'
import './main.css'
function Footer() {
  return (
    <footer className="footer" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', padding: 'clamp(20px, 5vw, 150px)', gap: '20px'}}>
        <img src={logo} alt='little lemon logo' className="footer-logo" />
        <article className="footer-article">
            <h3>Other links</h3>
            <ul className="footer-ul">
                <li><a href="#email">Email</a></li>
                <li><a href="#phone">Phone number</a></li>
                <li><a href="#address">Address</a></li>
            </ul>
        </article>
        <article className="footer-article">
            <h3>Contact</h3>
            <ul className="footer-ul">
                <li><a href="#email">Email</a></li>
                <li><a href="#phone">Phone number</a></li>
                <li><a href="#address">Address</a></li>
            </ul>
        </article>
        <article className="footer-article">
            <h3>Social Media</h3>
            <ul className="footer-ul">
                <li><a href="#email">Email</a></li>
                <li><a href="#phone">Phone number</a></li>
                <li><a href="#address">Address</a></li>
            </ul>
        </article>
    </footer>
  );
}
export default Footer;
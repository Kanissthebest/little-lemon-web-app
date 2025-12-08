import Nav from './Nav';
import logo from '../assets/icons/Logo.svg'
function Footer() {
  return (
    <footer>
        <img src={logo} alt='little lemon logo' />
        <Nav />
        <article>
            <h3>Contact</h3>
            <ul>
                <li><a>Email</a></li>
                <li><a>Phone number</a></li>
                <li><a>Address</a></li>
            </ul>
        </article>
        <article>
            <h3>Social Media</h3>
            <ul>
                <li><a>Email</a></li>
                <li><a>Phone number</a></li>
                <li><a>Address</a></li>
            </ul>
        </article>
    </footer>
  );
}
export default Footer;
import logo from '../assets/icons/Logo.svg'
function Footer() {
  return (
    <footer style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', alignItems:'center',padding:'0px 150px'}}>
        <img src={logo} alt='little lemon logo' />
        <article>
            <h3 style={{textAlign:'center'}}>Other links</h3>
            <ul style={{listStyle:'none'}}>
                <li><a>Email</a></li>
                <li><a>Phone number</a></li>
                <li><a>Address</a></li>
            </ul>
        </article>
        <article>
            <h3 style={{textAlign:'center'}}>Contact</h3>
            <ul style={{listStyle:'none'}}>
                <li><a>Email</a></li>
                <li><a>Phone number</a></li>
                <li><a>Address</a></li>
            </ul>
        </article>
        <article>
            <h3 style={{textAlign:'center'}}>Social Media</h3>
            <ul style={{listStyle:'none'}}>
                <li><a>Email</a></li>
                <li><a>Phone number</a></li>
                <li><a>Address</a></li>
            </ul>
        </article>
    </footer>
  );
}
export default Footer;
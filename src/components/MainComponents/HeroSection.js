import restaurantFood from '../../assets/images/restauranfood.jpg'
import { useNavigate } from 'react-router-dom';
import '../main.css';

function HeroSection(){
  const navigate = useNavigate();

  const handleReserveTableClick = () => {
    navigate('/bookingPage');
  };
    return(
          <section className="hero-section">
        <section className="hero-content">
          <h1 className="hero-h1">Little lemon</h1>
          <h2 className="hero-h2">Chicago</h2>
          <p className="hero-p">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button onClick={handleReserveTableClick} className="hero-button" aria-label="On Click">
            Reserve a Table
            </button>
        </section>
        <figure className="hero-figure">
          <img src={restaurantFood} alt="Delicious food served at Little Lemon" className="hero-img" />
        </figure>
      </section>
    )
}
export default HeroSection;
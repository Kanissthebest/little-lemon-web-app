import restaurantFood from '../../assets/images/restauranfood.jpg'
import '../main.css';

function About () {
    return (
        <section className="about-section">
            <div className="about-content">
                <h2 className="about-h2">About Little Lemon</h2>
            <p className="about-p">Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We are family owned and operated, all of our food is made with the freshest ingredients sourced from local farms.</p>
            </div>
            <figure className="about-figure">
                <img src={restaurantFood} alt="Restaurant food" className="about-img1" />
                <img src={restaurantFood} alt="Chef Preparing Food" className="about-img2" />
            </figure>
        </section>

    );
}
export default About;
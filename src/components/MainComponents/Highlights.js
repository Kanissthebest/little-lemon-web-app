
import greekSalad from '../../assets/images/greek_salad.jpg'
import bruchetta from '../../assets/icons/bruchetta.svg'
import lemonDessert from '../../assets/images/lemon dessert.jpg'
import '../main.css';

function Highlights() {
    const dishes = [
    {
      name: 'Bruchetta',
      price: '$5.99',
      description: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh tomatoes, basil and balsamic glaze.',
      image: bruchetta,
    },
    {
      name: 'Greek Salad',
      price: '$7.99',
      description: 'A refreshing salad with crispy lettuce, ripe tomatoes, cucumbers, olives, and feta cheese, dressed with olive oil and oregano.',
      image: greekSalad,
    },
    {
      name: 'Lemon Dessert',
      price: '$4.99',
      description: 'A delightful lemon-flavored dessert that is both tangy and sweet, perfect for satisfying your sweet tooth.',
      image: lemonDessert,
    },
  ];
  return (
    <section className="highlights-section">
        <section className="highlights-header">
           <h1 className="highlights-h1">This weeks specials!</h1>
           <button className="highlights-button" aria-label="On Click">
          Online Menu
        </button>
        </section>
        <section className="highlights-grid">
          {dishes.map((dish, index) => (
            <article key={index} className="dish-article">
              <img src={dish.image} alt={dish.name} className="dish-img" />
              <div className="dish-header">
                <h3 className="dish-h3">{dish.name}</h3>
                <h4 className="dish-h4">{dish.price}</h4>
              </div>
              <p className="dish-p">{dish.description}</p>
              <button className="dish-button" aria-label="On Click">Order a delivery</button>
            </article>
          ))}
      </section>
      </section>
  )
    }
export default Highlights;
import restaurantFood from '../assets/images/restauranfood.jpg'
import greekSalad from '../assets/images/greek_salad.jpg'
import bruchetta from '../assets/icons/bruchetta.svg'
import lemonDessert from '../assets/images/lemon dessert.jpg'
function Main() {
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
    <main>
      <section style={{backgroundColor:'#495E57',margin:'auto', color:'white', display:'flex', justifyContent:'space-around', alignItems:'center', padding:'20px 150px'}}>
        <section>
          <h1 style={{color:'#F4CE14', margin:'0', fontWeight:'medium', fontSize:'64pt'}}>Little lemon</h1>
          <h2 style={{margin:'0', fontSize:'40pt'}}>Chicago</h2>
          <p style={{width:'35%', minWidth:'200px'}}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button style={{backgroundColor:'#F4CE14',fontWeight:'bolder', border:'none', borderRadius:'8px', padding:'10px 20px', cursor:'pointer'}}>
            Reserve a Table
            </button>
        </section>
        <figure style={{width:'25%', height:'250px',minWidth:'200px', color:'#333333', transform: 'translateY(50px)', borderRadius: '15px', overflow:'hidden'}}>
          <img src={restaurantFood} alt="Delicious food served at Little Lemon" style={{width:'100%'}} />
        </figure>
      </section>
      <section style={{padding:'0px 150px', marginTop:'80px', marginBottom:'80px'}}>
        <section style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'nowrap'}}>
           <h1 style={{marginTop:'40px', gridArea:'title', textAlign:'left',justifyItems:'flex-start'}}>This weeks specials!</h1>
        <button style={{backgroundColor:'#F4CE14', gridArea:'button', fontWeight:'bolder', border:'none',
           borderRadius:'8px', padding:'10px 20px', cursor:'pointer',justifyItems:'flex-end'}}>
          Online Menu
        </button>
        </section>
        <section style={{display:'grid', gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))", alignItems:'center', marginTop:'60px', gap:'30px'}}>
          {dishes.map((dish, index) => (
            <article key={index} style={{width:'100%', backgroundColor:'#EDEFEE', borderRadius:'15px', paddingBottom:'10px', boxShadow:'0px 4px 6px rgba(0, 0, 0, 0.2)'}}>
              <img src={dish.image} alt={dish.name} style={{width:'100%', borderRadius:'15px'}} />
              <p style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'nowrap', margin:'0 10px'}} >
                <h3>{dish.name}</h3>
                <h4 style={{color:'#EE9972'}}>{dish.price}</h4>
              </p>
              <p style={{margin:'10px'}}>{dish.description}</p>
              <p style={{margin:'10px'}}>
                order a delivery
              </p>
            </article>
          ))}
      </section>
      </section>
    </main>
  );
}
export default Main;
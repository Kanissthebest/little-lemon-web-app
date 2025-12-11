import restaurantFood from '../../assets/images/restauranfood.jpg'
function About () {
    return (
        <section style={{display:'flex', justifyContent:'center', alignItems:'center', padding:'0px 150px'}}>
            <div style={{width:'100%', marginBottom:'40px', padding:'20px', borderRadius:'15px'}}>
                <h2 style={{color:'#F4CE14'}}>About Little Lemon</h2>
            <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We are family owned and operated, all of our food is made with the freshest ingredients sourced from local farms.</p>
            </div>
            <figure style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', width:'100%', minWidth:'300px', marginLeft:'20px', borderRadius:'15px', overflow:'hidden'}}>
                <img src={restaurantFood} alt="Restaurant food" style={{width:'100%', border:'1px solid white', borderRadius:'15px', transform:'translateX(20px)'}} />
                <img src={restaurantFood} alt="Chef Preparing Food" style={{ width:'100%', borderRadius:'15px'}} />
            </figure>
        </section>

    );
}
export default About;
import restaurantFood from '../../assets/images/restauranfood.jpg'

function HeroSection(){
    return(
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
    )
}
export default HeroSection;
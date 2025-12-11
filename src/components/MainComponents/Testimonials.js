import Stars from "./Stars";

function Testimonials() {
    const testimonials = [
    {
      name: 'John Doe',
      feedback: 'The food was absolutely wonderful, from preparation to presentation, very pleasing.',
    },
    {
      name: 'Jane Smith',
      feedback: 'The ambiance was perfect, and the staff were incredibly attentive and friendly.',
    },
    {
      name: 'Emily Johnson',
      feedback: 'I loved the modern twist on traditional Mediterranean recipes. Highly recommend!',
    },
    {
      name: 'Michael Brown',
      feedback: 'A family-owned restaurant that truly feels like home. The flavors were authentic and delicious.',
    },
  ];
  return (
    <section style={{padding:'0px 150px', marginBottom:'80px', backgroundColor:'#FBDABB', paddingTop:'40px', paddingBottom:'40px'}}>
      <h2 style={{fontSize:'48px',textAlign:'center'}}>Customers Say</h2>
      <div style={{display:'grid', gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))", gap:'20px'}}>
        {testimonials.map((testimonial, index) => (
        <article key={index} style={{backgroundColor:'#EDEFEE', padding:'20px', borderRadius:'10px', boxShadow:'0px 4px 6px rgba(0, 0, 0, 0.2)'}}>
          <Stars rating={5} />
          <h4>- {testimonial.name}</h4>
          <img src={`https://i.pravatar.cc/100?img=${index + 10}`} alt={testimonial.name} style={{borderRadius:'50%'}} />
          <p>"{testimonial.feedback}"</p>
        </article>
      ))}
      </div>
    </section>
  );
}
export default Testimonials;
import Stars from "./Stars";
import '../main.css';

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
    <section className="testimonials-section">
      <h2 className="testimonials-h2">Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
        <article key={index} className="testimonial-article">
          <Stars rating={5} />
          <h4 className="testimonial-h4">- {testimonial.name}</h4>
          <img src={`https://i.pravatar.cc/100?img=${index + 10}`} alt={testimonial.name} className="testimonial-img" />
          <p className="testimonial-p">"{testimonial.feedback}"</p>
        </article>
      ))}
      </div>
    </section>
  );
}
export default Testimonials;
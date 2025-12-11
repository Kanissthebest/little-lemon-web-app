import About from './MainComponents/About';
import HeroSection from './MainComponents/HeroSection';
import Highlights from './MainComponents/Highlights';
import Testimonials from './MainComponents/Testimonials';
function Main() {
  return (
    <main>
        <HeroSection />
        <Highlights />
        <Testimonials />
        <About />
    </main>
  );
}
export default Main;
import 'bootstrap/dist/css/bootstrap.min.css';
import Navmenu from './component/header/Navmenu';
import './assets/style.css';
import Hero from './component/main/Hero';
import Abaute from './component/main/Abaute';
import Testimonial from './component/main/Testimonial';
import Galeri from './component/main/Galeri';
import Contact from './component/main/Contact';
import Footer from './component/footer/Footer';
function App() {
  return (
    <>
    
<Navmenu />   
      <Hero />
      <Abaute />
      <Testimonial />
      <Galeri/>
<Contact />
      <Footer />
      </>
  )
}

export default App

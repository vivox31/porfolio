import './app.scss'
import Contact from './components/Contact/Contact';
import Cursor from './components/Cursor/Cursor';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
const App = () => {
  return <div>
    <Cursor/>
    <section id='HomePage'> 
    <Navbar/> 
    <Hero/>
    </section>
    <section id='Services'><Parallax type="services"/> </section>
    <section ><Services/></section>
    <section id='Portfolio'><Parallax type="portfolio" /> </section>
    <section style={{height:"auto"}}><Portfolio/></section>
    <section id='Contact'><Contact/> </section>
    

  </div>;
};

export default App;

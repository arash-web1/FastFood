import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Foodlist from './components/Foodlist/Foodlist';
import About from './components/About/About'

export default function App() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <Foodlist/>
      <About />
    </div>
  );
}

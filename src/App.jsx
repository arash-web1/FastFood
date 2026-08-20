import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Foodlist from './components/Foodlist/Foodlist';
import PopularPosition from './components/PopularPositions/PopularPositions';

export default function App() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <Foodlist/>
      <PopularPosition />
    </div>
  );
}

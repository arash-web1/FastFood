import Button from '../Button/Button';
import styles from './Hero.module.css';
import heroBurger from './hero-burger.png';

export default function Hero() {
  const background = `linear-gradient(
      90deg,
      rgba(20, 15, 16, 0.96) 0%,
      rgba(20, 15, 16, 0.82) 30%,
      rgba(20, 15, 16, 0.3) 56%,
      rgba(20, 15, 16, 0) 76%
    ), url(${heroBurger})`;

  return (
    <section className={styles.hero} style={{ backgroundImage: background }}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>Fast Food Burgers</span>

        <h1 className={styles.title}>
          The fastest food, for<br />
          instant hunger.
        </h1>

        <p className={styles.subtitle}>
          Some food has looked so awful that it's looked like something that
          the dog's brought home, yet after one mouthful I've been left eating
          my thoughts, my words &amp; my food and gone back for seconds.
        </p>

        <div className={styles.actions}>
          <Button>Order Now</Button>
        </div>
      </div>
    </section>
  );
}

import Button from '../Button/Button';
import styles from './Header.module.css';
import logo from './logo.png';

const navLinks = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Pages', href: '#pages' },
  { label: 'Our Offer', href: '#offer' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Shop', href: '#shop' },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <img src={logo} alt="Fast Food" className={styles.logoImg} />
        </a>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${link.active ? styles.active : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button>Order Now</Button>
      </div>
    </header>
  );
}

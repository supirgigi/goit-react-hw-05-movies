import { NavLink } from 'react-router-dom';
import items from './items';

import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {items.map(({ id, to, text }) => (
            <li key={id}>
              <NavLink className={styles.link} to={to}>
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

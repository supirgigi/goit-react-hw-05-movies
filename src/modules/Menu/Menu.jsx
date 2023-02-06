import { NavLink } from 'react-router-dom';
import items from './items';

import styles from './menu.module.css';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${styles.link} ${styles.active}` : styles.link;

  return className;
};

const Menu = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {items.map(({ id, to, text }) => (
            <li key={id}>
              <NavLink className={getClassName} to={to}>
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Menu;

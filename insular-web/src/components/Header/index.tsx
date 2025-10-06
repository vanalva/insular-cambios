import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoUrl from '../../assets/insular-logo.svg';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { path: '/', label: 'Inicio' },
    { path: '/conocenos', label: 'Conocenos' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/aliados', label: 'Aliados' },
    { path: '/contacto', label: 'Contacto' }
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo} aria-label="Volver al inicio">
            <img
              src={logoUrl}
              alt="Insular Casa de Cambio"
              className={styles.logoImage}
              loading="eager"
            />
          </Link>

          <nav className={`${styles.nav} ${isMobileOpen ? styles.mobileOpen : ''}`}>
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${styles.navLink} ${location.pathname === item.path ? styles.active : ''}`}
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className={styles.mobileToggle}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Abrir o cerrar menu"
            aria-expanded={isMobileOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

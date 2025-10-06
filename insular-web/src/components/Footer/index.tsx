import { Link } from 'react-router-dom';
import logoUrl from '../../assets/insular-logo.svg';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <Link to="/" className={styles.brandLink} aria-label="Volver al inicio">
              <img src={logoUrl} alt="Insular Casa de Cambio" className={styles.brandLogo} loading="lazy" />
            </Link>
            <p className="body-sm">
              Tu socio confiable para todas tus necesidades de cambio de divisas.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4 className="h4">Enlaces rapidos</h4>
            <ul className={styles.footerLinks}>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/conocenos">Conocenos</Link></li>
              <li><Link to="/servicios">Servicios</Link></li>
              <li><Link to="/aliados">Aliados</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className="h4">Legal</h4>
            <ul className={styles.footerLinks}>
              <li><a href="/terminos">Terminos y condiciones</a></li>
              <li><a href="/privacidad">Politica de privacidad</a></li>
              <li><a href="/cookies">Politica de cookies</a></li>
              <li><a href="/aml">Politica AML</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className="h4">Siguenos</h4>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com" aria-label="Facebook">f</a>
              <a href="https://twitter.com" aria-label="Twitter">t</a>
              <a href="https://instagram.com" aria-label="Instagram">i</a>
              <a href="https://linkedin.com" aria-label="LinkedIn">in</a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className="body-xs">
            Ac 2024 Insular Casa de Cambio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

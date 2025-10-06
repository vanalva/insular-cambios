import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../../components/Section';
import styles from './Conocenos.module.css';

const Conocenos = () => {
  useEffect(() => {
    // ScrollTrigger animations will be added here
  }, []);

  return (
    <>
      <Helmet>
        <title>Conócenos - Insular Casa de Cambio</title>
        <meta name="description" content="Conoce a Insular Casa de Cambio, líder en servicios de cambio de divisas con más de 20 años de experiencia." />
      </Helmet>

      <Section className={styles.hero}>
        <div className="container">
          <h1 className="h1" data-animate="fade-up">Conócenos</h1>
          <p className="body" data-animate="fade-up" data-delay="0.2">
            Más de dos décadas construyendo confianza en el mercado cambiario
          </p>
        </div>
      </Section>

      <Section className={styles.about}>
        <div className="container">
          <div className="grid grid-2 gap-xl">
            <div data-animate="fade-right">
              <h2 className="h2">Nuestra historia</h2>
              <p className="body">
                Desde nuestra fundación, hemos sido pioneros en ofrecer servicios de cambio de divisas
                con transparencia, seguridad y las mejores tasas del mercado. Nuestro compromiso con
                la excelencia nos ha posicionado como la casa de cambio preferida por miles de clientes.
              </p>
            </div>
            <div data-animate="fade-left">
              <div className="card module">
                <h3 className="h3 text-white">Misión</h3>
                <p className="body-sm text-white">
                  Proporcionar servicios de cambio de divisas seguros, transparentes y convenientes,
                  superando las expectativas de nuestros clientes.
                </p>
              </div>
              <div className="card module" style={{ marginTop: 'var(--space-md)' }}>
                <h3 className="h3 text-white">Visión</h3>
                <p className="body-sm text-white">
                  Ser la casa de cambio digital líder en la región, reconocida por nuestra innovación
                  y compromiso con el cliente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className={styles.values}>
        <div className="container">
          <h2 className="h2 text-center" data-animate="fade-up">Nuestros valores</h2>
          <div className="grid grid-4">
            <div className="text-center" data-animate="fade-up" data-delay="0.1">
              <h4 className="h4">Transparencia</h4>
              <p className="body-sm">Sin comisiones ocultas</p>
            </div>
            <div className="text-center" data-animate="fade-up" data-delay="0.2">
              <h4 className="h4">Seguridad</h4>
              <p className="body-sm">Máxima protección</p>
            </div>
            <div className="text-center" data-animate="fade-up" data-delay="0.3">
              <h4 className="h4">Rapidez</h4>
              <p className="body-sm">Transacciones inmediatas</p>
            </div>
            <div className="text-center" data-animate="fade-up" data-delay="0.4">
              <h4 className="h4">Confianza</h4>
              <p className="body-sm">20+ años de experiencia</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Conocenos;
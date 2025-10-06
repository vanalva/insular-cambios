import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../../components/Section';
import Card from '../../components/Card';
import styles from './Servicios.module.css';

const Servicios = () => {
  useEffect(() => {
    // ScrollTrigger animations will be added here
  }, []);

  const services = [
    {
      title: 'Cambio de divisas',
      description: 'Compra y venta de más de 20 divisas internacionales con las mejores tasas del mercado.',
      icon: '💱'
    },
    {
      title: 'Transferencias internacionales',
      description: 'Envía dinero a cualquier parte del mundo de forma segura y rápida.',
      icon: '🌍'
    },
    {
      title: 'Cuenta multi-divisa',
      description: 'Mantén saldos en múltiples monedas y cambia entre ellas al instante.',
      icon: '💳'
    },
    {
      title: 'Asesoría financiera',
      description: 'Recibe asesoramiento experto sobre el mejor momento para cambiar tus divisas.',
      icon: '📊'
    },
    {
      title: 'Servicio corporativo',
      description: 'Soluciones personalizadas para empresas con necesidades de cambio frecuentes.',
      icon: '🏢'
    },
    {
      title: 'API para desarrolladores',
      description: 'Integra nuestros servicios de cambio en tu plataforma con nuestra API.',
      icon: '⚡'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Servicios - Insular Casa de Cambio</title>
        <meta name="description" content="Descubre todos nuestros servicios de cambio de divisas, transferencias internacionales y soluciones financieras." />
      </Helmet>

      <Section className={styles.hero}>
        <div className="container">
          <h1 className="h1" data-animate="fade-up">Nuestros servicios</h1>
          <p className="body" data-animate="fade-up" data-delay="0.2">
            Soluciones completas para todas tus necesidades de cambio de divisas
          </p>
        </div>
      </Section>

      <Section className={styles.services}>
        <div className="container">
          <div className="grid grid-3">
            {services.map((service, index) => (
              <div key={index} data-animate="fade-up" data-delay={`${0.1 * (index + 1)}`}>
                <Card>
                  <div className={styles.serviceCard}>
                    <span className={styles.icon}>{service.icon}</span>
                    <h3 className="h3">{service.title}</h3>
                    <p className="body-sm">{service.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className={styles.process}>
        <div className="container">
          <h2 className="h2 text-center" data-animate="fade-up">¿Cómo funciona?</h2>
          <div className={styles.steps}>
            <div className={styles.step} data-animate="fade-up" data-delay="0.1">
              <div className={styles.stepNumber}>1</div>
              <h4 className="h4">Regístrate</h4>
              <p className="body-sm">Crea tu cuenta en minutos con verificación instantánea</p>
            </div>
            <div className={styles.step} data-animate="fade-up" data-delay="0.2">
              <div className={styles.stepNumber}>2</div>
              <h4 className="h4">Cotiza</h4>
              <p className="body-sm">Obtén el tipo de cambio en tiempo real sin compromisos</p>
            </div>
            <div className={styles.step} data-animate="fade-up" data-delay="0.3">
              <div className={styles.stepNumber}>3</div>
              <h4 className="h4">Confirma</h4>
              <p className="body-sm">Acepta la tasa y realiza tu transacción de forma segura</p>
            </div>
            <div className={styles.step} data-animate="fade-up" data-delay="0.4">
              <div className={styles.stepNumber}>4</div>
              <h4 className="h4">Recibe</h4>
              <p className="body-sm">Tu dinero llegará en minutos a tu cuenta destino</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Servicios;
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../../components/Section';
import CTAButton from '../../components/CTAButton';
import styles from './Contacto.module.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    // ScrollTrigger animations will be added here
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>Contacto - Insular Casa de Cambio</title>
        <meta name="description" content="Contáctanos para resolver todas tus dudas sobre cambio de divisas. Estamos aquí para ayudarte." />
      </Helmet>

      <Section className={styles.hero}>
        <div className="container">
          <h1 className="h1" data-animate="fade-up">Contáctanos</h1>
          <p className="body" data-animate="fade-up" data-delay="0.2">
            Estamos aquí para ayudarte con todas tus necesidades de cambio de divisas
          </p>
        </div>
      </Section>

      <Section className={styles.contact}>
        <div className="container">
          <div className="grid grid-2 gap-xl">
            <div data-animate="fade-right">
              <h2 className="h2">Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nombre completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                <CTAButton text="Enviar mensaje" type="submit" />
              </form>
            </div>

            <div data-animate="fade-left">
              <div className={styles.contactInfo}>
                <h3 className="h3">Información de contacto</h3>

                <div className={styles.infoItem}>
                  <h4 className="h4">Teléfono</h4>
                  <p className="body">+1 (555) 123-4567</p>
                </div>

                <div className={styles.infoItem}>
                  <h4 className="h4">Email</h4>
                  <p className="body">info@insularcasadecambio.com</p>
                </div>

                <div className={styles.infoItem}>
                  <h4 className="h4">Horario de atención</h4>
                  <p className="body">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  <p className="body">Sábados: 9:00 AM - 1:00 PM</p>
                </div>

                <div className={styles.infoItem}>
                  <h4 className="h4">Oficina principal</h4>
                  <p className="body">
                    Av. Principal 123<br />
                    Ciudad, País 12345
                  </p>
                </div>
              </div>

              <div className="card module" style={{ marginTop: 'var(--space-lg)' }}>
                <h3 className="h3 text-white">¿Necesitas ayuda inmediata?</h3>
                <p className="body-sm text-white">
                  Nuestro equipo de soporte está disponible 24/7 para atender tus consultas urgentes.
                </p>
                <CTAButton text="Chat en vivo" variant="secondary" />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contacto;
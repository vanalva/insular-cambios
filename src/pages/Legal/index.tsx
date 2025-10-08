import { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { Cookie, Lock, FileText, Search } from 'lucide-react';
import Section from '../../components/Section';
import styles from './Legal.module.css';

const Legal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'cookies' | 'privacy' | 'terms'>('cookies');
  const [searchQuery, setSearchQuery] = useState('');
  const contentRef = useRef<HTMLDivElement>(null);

  // Handle hash navigation on mount and hash changes
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash === 'cookies' || hash === 'privacy' || hash === 'terms') {
      setActiveTab(hash);
    }
  }, [location.hash]);

  // Animate content change
  useEffect(() => {
    if (!contentRef.current) return;

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    );
  }, [activeTab]);

  const tabs = [
    { id: 'cookies' as const, label: 'Política de Cookies', icon: Cookie },
    { id: 'privacy' as const, label: 'Política de Privacidad (LOPD)', icon: Lock },
    { id: 'terms' as const, label: 'Términos y Condiciones', icon: FileText }
  ];

  const handleTabChange = (tabId: typeof activeTab) => {
    setActiveTab(tabId);
    setSearchQuery('');
    navigate(`/legal#${tabId}`, { replace: true });
  };

  const getContent = () => {
    switch (activeTab) {
      case 'cookies':
        return (
          <div>
            <h1>Política de Cookies</h1>
            <p className={styles.lastUpdated}>Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <section className={styles.section}>
              <h2>1. ¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web.
                Estas cookies nos permiten recordar sus preferencias y mejorar su experiencia de navegación.
              </p>
            </section>

            <section className={styles.section}>
              <h2>2. Tipos de cookies que utilizamos</h2>

              <h3>Cookies esenciales</h3>
              <p>
                Son necesarias para el funcionamiento básico del sitio web. Sin estas cookies, el sitio no puede funcionar correctamente.
              </p>

              <h3>Cookies de rendimiento</h3>
              <p>
                Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web, proporcionándonos información sobre las áreas visitadas,
                el tiempo de permanencia y cualquier problema encontrado.
              </p>

              <h3>Cookies funcionales</h3>
              <p>
                Permiten que el sitio web recuerde las elecciones que usted hace y proporcionan características mejoradas y más personales.
              </p>

              <h3>Cookies de marketing</h3>
              <p>
                Se utilizan para rastrear a los visitantes en los sitios web. La intención es mostrar anuncios relevantes y atractivos para el usuario individual.
              </p>
            </section>

            <section className={styles.section}>
              <h2>3. Gestión de cookies</h2>
              <p>
                Puede configurar su navegador para que rechace todas las cookies o para que le avise cuando se envía una cookie.
                Sin embargo, si no acepta las cookies, es posible que no pueda utilizar todas las funciones de nuestro sitio web.
              </p>
              <p>
                Para obtener más información sobre cómo administrar las cookies en los navegadores más populares, consulte los siguientes enlaces:
              </p>
              <ul>
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
                <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>4. Contacto</h2>
              <p>
                Si tiene alguna pregunta sobre nuestra política de cookies, puede contactarnos en:
              </p>
              <p className={styles.contactInfo}>
                <strong>Email:</strong> info@insularcasadecambio.com<br />
                <strong>Teléfono:</strong> +58 (212) 123-4567
              </p>
            </section>
          </div>
        );

      case 'privacy':
        return (
          <div>
            <h1>Política de Privacidad (LOPD)</h1>
            <p className={styles.lastUpdated}>Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <section className={styles.section}>
              <h2>1. Responsable del tratamiento</h2>
              <p>
                <strong>Insular Casa de Cambio, C.A.</strong><br />
                RIF: J-123456789<br />
                Dirección: Av. Francisco de Miranda, Torre Seguros Sudamerica, local PB-7, Urbanización El Rosal, Municipio Chacao, Caracas, Venezuela<br />
                Email: info@insularcasadecambio.com<br />
                Teléfono: +58 (212) 123-4567
              </p>
            </section>

            <section className={styles.section}>
              <h2>2. Datos personales que recopilamos</h2>
              <p>
                En cumplimiento de la Ley Orgánica de Protección de Datos Personales (LOPD), recopilamos y procesamos los siguientes tipos de datos personales:
              </p>
              <ul>
                <li><strong>Datos de identificación:</strong> Nombre completo, cédula de identidad, fecha de nacimiento</li>
                <li><strong>Datos de contacto:</strong> Dirección, número de teléfono, correo electrónico</li>
                <li><strong>Datos financieros:</strong> Información bancaria necesaria para transacciones de cambio de divisas</li>
                <li><strong>Datos de transacciones:</strong> Historial de operaciones realizadas</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>3. Finalidad del tratamiento</h2>
              <p>
                Los datos personales que recopilamos se utilizan para:
              </p>
              <ul>
                <li>Procesar operaciones de cambio de divisas</li>
                <li>Cumplir con obligaciones legales y regulatorias establecidas por SUDEBAN</li>
                <li>Prevenir el lavado de dinero y financiamiento del terrorismo</li>
                <li>Enviar comunicaciones relacionadas con nuestros servicios</li>
                <li>Mejorar nuestros servicios y experiencia del cliente</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>4. Base legal del tratamiento</h2>
              <p>
                El tratamiento de sus datos personales se basa en:
              </p>
              <ul>
                <li>El consentimiento expreso que usted nos otorga</li>
                <li>La ejecución de un contrato en el que usted es parte</li>
                <li>El cumplimiento de obligaciones legales aplicables a nuestra actividad</li>
                <li>El interés legítimo en mejorar nuestros servicios</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>5. Derechos de los titulares</h2>
              <p>
                De acuerdo con la LOPD, usted tiene derecho a:
              </p>
              <ul>
                <li><strong>Acceso:</strong> Conocer qué datos personales tenemos sobre usted</li>
                <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos</li>
                <li><strong>Cancelación:</strong> Solicitar la eliminación de sus datos personales</li>
                <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos en determinadas circunstancias</li>
                <li><strong>Portabilidad:</strong> Recibir sus datos en un formato estructurado</li>
                <li><strong>Revocación del consentimiento:</strong> Retirar su consentimiento en cualquier momento</li>
              </ul>
              <p>
                Para ejercer estos derechos, puede enviarnos un correo a: info@insularcasadecambio.com
              </p>
            </section>

            <section className={styles.section}>
              <h2>6. Seguridad de los datos</h2>
              <p>
                Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra acceso no autorizado,
                pérdida, destrucción o alteración. Estas medidas incluyen:
              </p>
              <ul>
                <li>Encriptación de datos sensibles</li>
                <li>Controles de acceso estrictos</li>
                <li>Auditorías de seguridad regulares</li>
                <li>Capacitación continua del personal en protección de datos</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>7. Tiempo de conservación</h2>
              <p>
                Conservamos sus datos personales durante el tiempo necesario para cumplir con las finalidades para las que fueron recopilados,
                incluyendo cualquier requisito legal, contable o de reporte. En general, conservamos los datos de transacciones durante un mínimo
                de 5 años según lo establecido por las regulaciones de SUDEBAN.
              </p>
            </section>

            <section className={styles.section}>
              <h2>8. Transferencias internacionales</h2>
              <p>
                En el marco de nuestras operaciones de remesas internacionales, podemos transferir sus datos personales a nuestros socios
                internacionales (MoneyGram, Ria, Remitly, Papaya). Estas transferencias se realizan cumpliendo con las garantías adecuadas
                establecidas por la LOPD y con el consentimiento expreso del titular.
              </p>
            </section>

            <section className={styles.section}>
              <h2>9. Contacto</h2>
              <p>
                Para cualquier consulta sobre esta política de privacidad o el tratamiento de sus datos personales, puede contactarnos:
              </p>
              <p className={styles.contactInfo}>
                <strong>Email:</strong> info@insularcasadecambio.com<br />
                <strong>Teléfono:</strong> +58 (212) 123-4567<br />
                <strong>Dirección:</strong> Av. Francisco de Miranda, Torre Seguros Sudamerica, local PB-7, El Rosal, Caracas
              </p>
            </section>
          </div>
        );

      case 'terms':
        return (
          <div>
            <h1>Términos y Condiciones</h1>
            <p className={styles.lastUpdated}>Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <section className={styles.section}>
              <h2>1. Aceptación de los términos</h2>
              <p>
                Al acceder y utilizar los servicios de Insular Casa de Cambio, C.A., usted acepta estar sujeto a estos términos y condiciones,
                todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de las leyes locales aplicables.
              </p>
            </section>

            <section className={styles.section}>
              <h2>2. Servicios ofrecidos</h2>
              <p>
                Insular Casa de Cambio es una institución autorizada por SUDEBAN para ofrecer los siguientes servicios:
              </p>
              <ul>
                <li>Compra y venta de divisas (dólares americanos y euros)</li>
                <li>Recepción de remesas internacionales a través de nuestros aliados</li>
                <li>Dispersión de fondos mediante pago móvil y crédito inmediato</li>
                <li>Retiro de efectivo en nuestras oficinas</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>3. Requisitos para utilizar nuestros servicios</h2>
              <p>
                Para realizar operaciones con nosotros, usted debe:
              </p>
              <ul>
                <li>Ser mayor de 18 años</li>
                <li>Poseer cédula de identidad venezolana vigente</li>
                <li>Proporcionar información veraz y actualizada</li>
                <li>Cumplir con los requisitos de prevención de lavado de dinero</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>4. Tasas de cambio</h2>
              <p>
                Las tasas de cambio son determinadas por Insular Casa de Cambio y pueden variar según las condiciones del mercado.
                Las tasas publicadas en nuestro sitio web son referenciales y pueden cambiar sin previo aviso. La tasa aplicable
                será la vigente al momento de completar la transacción.
              </p>
            </section>

            <section className={styles.section}>
              <h2>5. Comisiones y tarifas</h2>
              <p>
                Nuestras operaciones pueden estar sujetas a comisiones y tarifas que varían según el tipo de servicio y monto de la transacción.
                Las comisiones aplicables serán informadas claramente antes de completar cualquier operación.
              </p>
              <p>
                En el caso de remesas recibidas a través de nuestros aliados, no cobramos comisión adicional por el retiro en nuestras oficinas.
              </p>
            </section>

            <section className={styles.section}>
              <h2>6. Prevención de lavado de dinero</h2>
              <p>
                En cumplimiento de la normativa venezolana de prevención de lavado de dinero y financiamiento del terrorismo, nos reservamos el derecho de:
              </p>
              <ul>
                <li>Solicitar información y documentación adicional sobre el origen de los fondos</li>
                <li>Rechazar transacciones que no cumplan con nuestras políticas de cumplimiento</li>
                <li>Reportar operaciones sospechosas a las autoridades competentes</li>
                <li>Mantener registros de transacciones según lo establecido por SUDEBAN</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>7. Limitación de responsabilidad</h2>
              <p>
                Insular Casa de Cambio no será responsable por:
              </p>
              <ul>
                <li>Demoras o errores en transacciones causados por información incorrecta proporcionada por el cliente</li>
                <li>Pérdidas derivadas de fluctuaciones en las tasas de cambio</li>
                <li>Interrupciones del servicio por mantenimiento programado o causas de fuerza mayor</li>
                <li>Decisiones de inversión tomadas por el cliente basadas en las tasas publicadas</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>8. Modificaciones de los términos</h2>
              <p>
                Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor
                inmediatamente después de su publicación en nuestro sitio web. Es responsabilidad del usuario revisar periódicamente estos términos.
              </p>
            </section>

            <section className={styles.section}>
              <h2>9. Ley aplicable y jurisdicción</h2>
              <p>
                Estos términos y condiciones se rigen por las leyes de la República Bolivariana de Venezuela. Cualquier disputa que surja
                en relación con estos términos será sometida a la jurisdicción exclusiva de los tribunales competentes de Caracas, Venezuela.
              </p>
            </section>

            <section className={styles.section}>
              <h2>10. Contacto</h2>
              <p>
                Para cualquier pregunta sobre estos términos y condiciones, puede contactarnos:
              </p>
              <p className={styles.contactInfo}>
                <strong>Insular Casa de Cambio, C.A.</strong><br />
                <strong>Email:</strong> info@insularcasadecambio.com<br />
                <strong>Teléfono:</strong> +58 (212) 123-4567<br />
                <strong>Dirección:</strong> Av. Francisco de Miranda, Torre Seguros Sudamerica, local PB-7<br />
                Urbanización El Rosal, Municipio Chacao, Caracas, Venezuela<br />
                <strong>Horario de atención:</strong> Lunes a Viernes de 9:00 AM a 5:00 PM
              </p>
            </section>
          </div>
        );
    }
  };

  // Filter content based on search
  const highlightSearchQuery = (content: ReactNode): ReactNode => {
    if (!searchQuery) return content;
    // This is a simple implementation - in production you'd want a more sophisticated search
    return content;
  };

  return (
    <>
      <Helmet>
        <title>Legal - Insular Casa de Cambio</title>
        <meta name="description" content="Información legal, política de privacidad, cookies y términos y condiciones de Insular Casa de Cambio." />
      </Helmet>

      <Section className={styles.legalPage}>
        <div className="container">
          <div className={styles.legalGrid}>
            {/* Sidebar with tabs */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebarSticky}>
                <div className={styles.searchBar}>
                  <input
                    type="search"
                    placeholder="Buscar en documentos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={styles.searchInput}
                  />
                  <Search className={styles.searchIcon} size={16} strokeWidth={2} />
                </div>

                <nav className={styles.tabNav}>
                  {tabs.map((tab) => {
                    const IconComponent = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => handleTabChange(tab.id)}
                        className={`${styles.tabButton} ${activeTab === tab.id ? styles.tabButtonActive : ''}`}
                      >
                        <IconComponent className={styles.tabIcon} size={18} strokeWidth={2} />
                        <span className={styles.tabLabel}>{tab.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <main className={styles.content}>
              <div ref={contentRef} className={styles.contentInner}>
                {highlightSearchQuery(getContent())}
              </div>
            </main>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Legal;

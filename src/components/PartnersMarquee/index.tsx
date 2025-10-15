import styles from './PartnersMarquee.module.css';

const PartnersMarquee = () => {
  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          <img src="/logos/partners/moneygram-collab-logo.svg" alt="MoneyGram" className={styles.partnerLogo} />
          <img src="/logos/partners/ria-collab-logo.svg" alt="Ria" className={styles.partnerLogo} />
          <img src="/logos/partners/remitly-collab-logo.svg" alt="Remitly" className={styles.partnerLogo} />
          <img src="/logos/partners/papaya-collab-logo.svg" alt="Papaya" className={styles.partnerLogo} />
          <img src="/logos/partners/moneygram-collab-logo.svg" alt="MoneyGram" className={styles.partnerLogo} />
          <img src="/logos/partners/ria-collab-logo.svg" alt="Ria" className={styles.partnerLogo} />
          <img src="/logos/partners/remitly-collab-logo.svg" alt="Remitly" className={styles.partnerLogo} />
          <img src="/logos/partners/papaya-collab-logo.svg" alt="Papaya" className={styles.partnerLogo} />
        </div>
        <div className={styles.marqueeContent} aria-hidden="true">
          <img src="/logos/partners/moneygram-collab-logo.svg" alt="MoneyGram" className={styles.partnerLogo} />
          <img src="/logos/partners/ria-collab-logo.svg" alt="Ria" className={styles.partnerLogo} />
          <img src="/logos/partners/remitly-collab-logo.svg" alt="Remitly" className={styles.partnerLogo} />
          <img src="/logos/partners/papaya-collab-logo.svg" alt="Papaya" className={styles.partnerLogo} />
          <img src="/logos/partners/moneygram-collab-logo.svg" alt="MoneyGram" className={styles.partnerLogo} />
          <img src="/logos/partners/ria-collab-logo.svg" alt="Ria" className={styles.partnerLogo} />
          <img src="/logos/partners/remitly-collab-logo.svg" alt="Remitly" className={styles.partnerLogo} />
          <img src="/logos/partners/papaya-collab-logo.svg" alt="Papaya" className={styles.partnerLogo} />
        </div>
      </div>
    </div>
  );
};

export default PartnersMarquee;

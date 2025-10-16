import styles from './PartnersMarquee.module.css';
import { withBase } from '../../utils/base';

const PartnersMarquee = () => {
  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          <img src={withBase('logos/partners/moneygram-collab-logo.svg')} alt="MoneyGram" className={styles.partnerLogo} />
          <img src={withBase('logos/partners/ria-collab-logo.svg')} alt="Ria" className={styles.partnerLogo} />
          <img src={withBase('logos/partners/remitly-collab-logo.svg')} alt="Remitly" className={styles.partnerLogo} />
          <img src={withBase('logos/partners/papaya-collab-logo.svg')} alt="Papaya" className={styles.partnerLogo} />
          <img src={withBase('logos/partners/moneygram-collab-logo.svg')} alt="MoneyGram" className={styles.partnerLogo} />
          <img src={withBase('logos/partners/ria-collab-logo.svg')} alt="Ria" className={styles.partnerLogo} />
          <img src={withBase('logos/partners/remitly-collab-logo.svg')} alt="Remitly" className={styles.partnerLogo} />
          <img src={withBase('logos/partners/papaya-collab-logo.svg')} alt="Papaya" className={styles.partnerLogo} />
        </div>
        <div className={styles.marqueeContent} aria-hidden="true">
          <img src={withBase('logos/partners/moneygram-collab-logo.svg')} alt="MoneyGram" className={styles.partnerLogo} />
          <img src={withBase('logos/partners/ria-collab-logo.svg')} alt="Ria" className={styles.partnerLogo} />
          <img src={withBase('logos/partners/remitly-collab-logo.svg')} alt="Remitly" className={styles.partnerLogo} />
          <img src={withBase('logos/partners/papaya-collab-logo.svg')} alt="Papaya" className={styles.partnerLogo} />
          <img src={withBase('logos/partners/moneygram-collab-logo.svg')} alt="MoneyGram" className={styles.partnerLogo} />
          <img src={withBase('logos/partners/ria-collab-logo.svg')} alt="Ria" className={styles.partnerLogo} />
          <img src={withBase('logos/partners/remitly-collab-logo.svg')} alt="Remitly" className={styles.partnerLogo} />
          <img src={withBase('logos/partners/papaya-collab-logo.svg')} alt="Papaya" className={styles.partnerLogo} />
        </div>
      </div>
    </div>
  );
};

export default PartnersMarquee;

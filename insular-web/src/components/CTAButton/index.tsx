import styles from './CTAButton.module.css';

interface CTAButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  type?: 'button' | 'submit';
}

const CTAButton = ({
  text,
  onClick,
  variant = 'primary',
  type = 'button',
}: CTAButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      data-hover-scroll
    >
      <span className={styles.labelWrap} aria-hidden="true">
        <span className={styles.label}>{text}</span>
        <span className={`${styles.label} ${styles.clone}`}>{text}</span>
      </span>
      <span className={styles.srOnly}>{text}</span>
    </button>
  );
};

export default CTAButton;

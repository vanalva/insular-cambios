import styles from './CTAButton.module.css';

interface CTAButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'inherit';
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
    >
      <span>{text}</span>
    </button>
  );
};

export default CTAButton;

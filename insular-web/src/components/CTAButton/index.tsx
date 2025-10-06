import { useRef } from 'react';
import { gsap } from 'gsap';
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
  const labelContentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  const handleMouseEnter = () => {
    if (!labelContentRef.current) return;

    // Kill any existing animation
    if (animationRef.current) {
      animationRef.current.kill();
    }

    const tl = gsap.timeline();

    // Single smooth loop
    tl.to(labelContentRef.current, {
      yPercent: -100,
      duration: 0.4,
      ease: 'power2.inOut',
    })
    // Reset instantly
    .set(labelContentRef.current, { yPercent: 0 })
    // Settle
    .to(labelContentRef.current, {
      yPercent: 0,
      duration: 0.3,
      ease: 'power3.out',
    });

    animationRef.current = tl;
  };

  const handleMouseLeave = () => {
    if (!labelContentRef.current) return;

    // Kill any running animation
    if (animationRef.current) {
      animationRef.current.kill();
    }

    // Reset to original position
    gsap.to(labelContentRef.current, {
      y: '0%',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={styles.labelWrap} aria-hidden="true">
        <div ref={labelContentRef} className={styles.labelContent}>
          <span className={styles.label}>{text}</span>
          <span className={styles.clone}>{text}</span>
        </div>
      </span>
      <span className={styles.srOnly}>{text}</span>
    </button>
  );
};

export default CTAButton;

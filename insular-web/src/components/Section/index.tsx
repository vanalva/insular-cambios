import type { ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className = '', id }: SectionProps) => {
  return (
    <section
      id={id}
      className={`${styles.section} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;

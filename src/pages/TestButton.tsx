import AnimatedButton from '../components/AnimatedButton';

const TestButton = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      gap: '2rem',
      flexDirection: 'column'
    }}>
      <h1>Test Button</h1>
      <AnimatedButton text="¡Ingresa aquí!" />
      <AnimatedButton text="Ver más" variant="secondary" />
    </div>
  );
};

export default TestButton;

import { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Router from '../router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DomainVerificationModal from '../components/DomainVerificationModal';
import { initAnimations, initParallax, cleanupAnimations } from '../utils/animations';
import '../styles/globals.css';

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    // Clear existing ScrollTriggers/tweens before scheduling new ones
    cleanupAnimations();

    const timer = window.setTimeout(() => {
      initAnimations();
      initParallax();
    }, 80);

    return () => {
      window.clearTimeout(timer);
      cleanupAnimations();
    };
  }, [location.pathname]);

  return (
    <div className="app">
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
      <DomainVerificationModal />
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename="/Insular">
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

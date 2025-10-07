import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Conocenos from './pages/Conocenos';
import Servicios from './pages/Servicios';
import Aliados from './pages/Aliados';
import Contacto from './pages/Contacto';
import Legal from './pages/Legal';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conocenos" element={<Conocenos />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/aliados" element={<Aliados />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/legal" element={<Legal />} />
    </Routes>
  );
};

export default Router;
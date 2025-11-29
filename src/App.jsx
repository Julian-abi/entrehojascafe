import { Routes, Route } from 'react-router-dom';
import Home from './home/home';
import './styles/colors.css';
import Productos from './pages/productos';
import Educacion from './pages/educacion';
import SobreNosotros from './pages/sobrenosotros';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/productos' element={<Productos />} />
      <Route path='/educacion' element={<Educacion />} />
      <Route path='/sobre-nosotros' element={<SobreNosotros />} />
    </Routes>
  )
}

export default App;

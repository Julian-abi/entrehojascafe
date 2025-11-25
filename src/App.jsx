import { Routes, Route } from 'react-router-dom';
import Home from './home/home';
import './styles/colors.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App

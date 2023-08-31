import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavbarWithCTAButton from './components/Nav/Nav';
import Home from './pages/home/Home';
import HotelList from './pages/hotelList/HotelList';

function App() {
  return (
    <Routes>
      <Route  path='/'  element={<Home/>} />
      <Route  path='/hotel/search'  element={<HotelList/>} />
    </Routes>
  );
}

export default App;

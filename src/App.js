import './App.css';
import HomePage from './pages/HomePage/HomePage';
import BookingPage from './pages/BookingPage/BookingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ConfirmedBooking from './components/ConfirmedBooking/ConfirmedBooking';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="booking" element={<BookingPage />}></Route>
        <Route path="booking/success" element={<ConfirmedBooking/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

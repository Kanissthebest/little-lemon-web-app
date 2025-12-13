import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Main, { BookingTimesProvider } from './components/Main';
import Footer from './components/Footer';
import BookingPage from './components/Booking/BookingPage';
import ConfirmedBooking from './components/Booking/ConfirmedBooking';
function App() {
  return (
    <>
    <header className="App-header">
      <Header />
      <Nav />
    </header>
    <BookingTimesProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/bookingPage" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </BookingTimesProvider>
      <Footer />
    </>
  );
}

export default App;

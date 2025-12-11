import './App.css';
import { Routes, Route } from 'react-router-dom';
import Booking from './components/Booking';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <header className="App-header">
      <Header />
      <Nav />
    </header>
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

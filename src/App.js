import './App.css';
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
      <Main />
      <Footer />
    </>
  );
}

export default App;

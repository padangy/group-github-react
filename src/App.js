import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import DM from './components/DM';
import PD from './components/PD';
import VM from './components/VM';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dm" element={<DM />}/>
        <Route path="/pd" element={<PD />}/>
        <Route path="/vm" element={<VM />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

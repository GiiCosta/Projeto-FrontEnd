
import './App.css'
import { Outlet } from 'react-router-dom'
import { Header } from './componentes/Header/Header'
import { Footer } from './componentes/Footer/Footer'

function App() {

  return (
    <>
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
    </>
  );
};

export default App


import './App.css';

import { Registrar } from './rutas/Registrar';
import { CardContenedor } from './componentes/CardContenedor';
import { Header } from './layout/Header';
import { Login } from './rutas/Login';
function App() {
  return (
    <>
      <Header />
      <CardContenedor />
      <Registrar />
      <Login />
    </>
  );
}
export default App;

import { useContext } from "react";
import { FirebaseContext } from "./context/FirebaseContext";

function App() {
  const { productos, usuarios } = useContext(FirebaseContext);
  return (
    <>
      <h1>Lista de Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <span>{producto.nombre}</span>: {producto.descripcion}
          </li>
        ))}
      </ul>
      <h1>usuarios</h1>
      <ul>
        {usuarios.map((user) => (
          <li key={user.id}>
            <span>{user.nombre}</span>: {user.email}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

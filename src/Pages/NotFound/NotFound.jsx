import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <FaExclamationTriangle className="text-indigo-600 text-6xl mb-4" />
      <h1 className="text-5xl font-bold mb-2">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Página no encontrada</h2>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        Lo sentimos, la página que estás buscando no existe o fue removida.
      </p>
    </div>
  );
};

export default NotFound;

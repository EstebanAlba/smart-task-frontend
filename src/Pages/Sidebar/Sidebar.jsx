import React, { useState } from "react";
import {
  FaBars,
  FaHome,
  FaSearch,
  FaCalendarAlt,
  FaBell,
  FaFolderOpen,
  FaUser,
  FaCog,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  
  // ✅ Prefijo común para las rutas del dashboard
  const basePath = "/smarttask";

  const menus = [
    { name: "Inicio", icon: <FaHome />, path: `${basePath}` },
    { name: "Buscar", icon: <FaSearch />, path: `${basePath}/search` },
    { name: "Calendario", icon: <FaCalendarAlt />, path: `${basePath}/calendar` },
    { name: "Notificaciones", icon: <FaBell />, path: `${basePath}/notifications` },
    { name: "Grupos", icon: <FaFolderOpen />, path: `${basePath}/groups` },
  ];

  return (
    <div
      className={`clsh-screen bg-white shadow-md border-r border-gray-200 flex flex-col justify-between transition-all duration-300 ${
        isOpen ? "w-56" : "w-20"
      }`}
    >
      {/* Sección superior */}
      <div>
        {/* Botón hamburguesa */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            <FaBars size={22} />
          </button>
          {isOpen && (
            <h1 className="text-lg font-semibold text-indigo-600">SmartTask</h1>
          )}
        </div>

        {/* Íconos del menú */}
        <nav className="mt-4 flex flex-col gap-2">
          {menus.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-5 py-3 rounded-lg mx-2 transition-all ${
                location.pathname === item.path
                  ? "bg-indigo-100 text-indigo-600 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {isOpen && <span className="text-sm">{item.name}</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* Sección inferior */}
      <div className="flex flex-col gap-2 mb-4">
        <Link
          to="/profile"
          className={`flex items-center gap-3 px-5 py-3 rounded-lg mx-2 transition-all ${
            location.pathname === "/profile"
              ? "bg-indigo-100 text-indigo-600 font-medium"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <FaUser className="text-xl" />
          {isOpen && <span className="text-sm">Perfil</span>}
        </Link>

        <Link
          to="/settings"
          className={`flex items-center gap-3 px-5 py-3 rounded-lg mx-2 transition-all ${
            location.pathname === "/settings"
              ? "bg-indigo-100 text-indigo-600 font-medium"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <FaCog className="text-xl" />
          {isOpen && <span className="text-sm">Configuración</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

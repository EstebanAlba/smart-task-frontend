import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom"; // ← Importante
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determinar vista inicial según la URL
  const [isLoginView, setIsLoginView] = useState(
    location.pathname.includes("/login")
  );

  // Sincronizar estado cuando la URL cambie manualmente
  useEffect(() => {
    setIsLoginView(location.pathname.includes("/login"));
  }, [location.pathname]);

  // Cuando cambie el estado, actualizar la URL
  const handleSwitchView = (toLogin) => {
    setIsLoginView(toLogin);
    navigate(toLogin ? "/auth/login" : "/auth/register");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 p-6">
      <div className="bg-white rounded-3xl shadow-xl flex overflow-hidden w-full max-w-5xl transition-all duration-500">
        
        {/* PANEL IZQUIERDO */}
        <div className="flex-1 p-10 flex flex-col justify-center">
          {/* Marca */}
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white font-bold rounded-xl w-10 h-10 flex items-center justify-center">
              ST
            </div>
            <h1 className="text-2xl font-semibold text-gray-800">SmartTasker</h1>
          </div>

          {/* Switch */}
          <div className="flex bg-gray-100 rounded-full p-1 w-fit mb-2">
            <button
              onClick={() => handleSwitchView(true)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                isLoginView
                  ? "bg-white text-gray-900 shadow"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Iniciar sesión
            </button>
            <button
              onClick={() => handleSwitchView(false)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                !isLoginView
                  ? "bg-white text-gray-900 shadow"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Crear cuenta
            </button>
          </div>

          {/* Área de contenido animada */}
          <AnimatePresence mode="wait">
            <motion.div
              key={isLoginView ? "login" : "register"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-sm min-h-[600px] flex flex-col justify-center"
            >
              {isLoginView ? <Login /> : <Register />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* PANEL DERECHO - Decorativo */}
        <div className="flex-1 bg-gradient-to-br from-gray-900 via-indigo-900 to-indigo-700 text-white p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-4">Tu agenda más inteligente</h2>
            <p className="text-indigo-200 text-lg">
              Agenda reuniones, tareas y recordatorios con sugerencias automáticas
              basadas en tus hábitos diarios.
            </p>
          </div>

          {/* Calendario */}
          <div className="mt-10 bg-white/10 rounded-2xl p-6 backdrop-blur-md text-center">
            <div className="grid grid-cols-7 gap-2 text-sm text-white/90">
              {["L", "M", "X", "J", "V", "S", "D"].map((d) => (
                <div key={d} className="font-semibold text-indigo-300">
                  {d}
                </div>
              ))}
              {Array.from({ length: 30 }, (_, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg ${
                    i === 13
                      ? "bg-indigo-600 font-bold"
                      : "hover:bg-white/20 transition"
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <p className="text-white/70 text-xs mt-4">Octubre 2025</p>
          </div>

          <p className="text-sm text-indigo-300 mt-6 text-center">
            © 2025 SmartTasker
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;

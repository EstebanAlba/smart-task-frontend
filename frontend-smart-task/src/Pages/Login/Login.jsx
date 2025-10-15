import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-sm">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Bienvenido de nuevo
      </h1>
      <p className="text-gray-500 mb-8 text-sm">
        Organiza tu agenda con el calendario inteligente de SmartTasker.
      </p>

      <form className="space-y-4">
        {/* Correo electrónico */}
        <div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Contraseña */}
        <div>
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:outline-none"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* Enlace recuperar */}
        <div className="text-right">
          <button
            type="button"
            className="text-sm text-violet-600 hover:underline font-medium"
          >
            ¿Olvidaste tu contraseña?
          </button>
        </div>

        {/* Botón principal */}
        <button
          type="submit"
          className="w-full bg-violet-600 text-white py-2 rounded-lg font-semibold hover:bg-violet-700 transition"
        >
          Entrar
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center my-6">
        <div className="flex-grow border-t border-gray-300" />
        <span className="mx-3 text-sm text-gray-500">O CONTINÚA CON</span>
        <div className="flex-grow border-t border-gray-300" />
      </div>

      {/* Botón Google */}
      <button
        type="button"
        className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5"
        />
        <span className="text-gray-700 font-medium">Google</span>
      </button>

      {/* Enlace crear cuenta */}
      <p className="text-center text-sm text-gray-500 mt-6">
        ¿Aún no tienes cuenta?{" "}
        <span className="text-violet-600 font-medium hover:underline cursor-pointer">
          Crear cuenta
        </span>
      </p>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // 👈 Importamos useNavigate
import { loginUser } from "../../Apis/Auth/Auth.js"; // 👈 Ajusta la ruta a tu archivo Auth.js

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    
    // 1. Estado para manejar los datos del formulario
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Función para manejar los cambios en los inputs
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    // 2. Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            // Llamada a la API de Login
            const response = await loginUser(credentials);
            
            // Guardar el token (Asumimos que la respuesta es { data: { token: '...' } })
            const token = response.data.token;
            if (token) {
                localStorage.setItem('token', token);
            }

            // ✅ CAMBIO REALIZADO AQUÍ: Redirigir a /smarttask
            navigate('/smarttask'); 

        } catch (err) {
            // Manejo de errores
            console.error("Error al iniciar sesión:", err);
            const errorMessage = err.response?.data?.message || 'Error de red o servidor. Inténtalo de nuevo.';
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        // ... (El resto del JSX se mantiene igual)
        <div className="w-full max-w-sm">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Bienvenido de nuevo
            </h1>
            <p className="text-gray-500 mb-8 text-sm">
                Organiza tu agenda con el calendario inteligente de SmartTasker.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
                
                {/* 🚨 Mostrar Error */}
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg text-sm transition duration-300">
                        {error}
                    </div>
                )}
                
                {/* Correo electrónico */}
                <div>
                    <div className="relative">
                        <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="email"
                            name="email"
                            value={credentials.email}
                            onChange={handleChange}
                            placeholder="Correo electrónico"
                            required
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:outline-none"
                            disabled={isLoading}
                        />
                    </div>
                </div>

                {/* Contraseña */}
                <div>
                    <div className="relative">
                        <FaLock className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            placeholder="Contraseña"
                            required
                            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:outline-none"
                            disabled={isLoading}
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
                    className="w-full bg-violet-600 text-white py-2 rounded-lg font-semibold hover:bg-violet-700 transition disabled:bg-violet-400 disabled:cursor-not-allowed"
                    disabled={isLoading}
                >
                    {isLoading ? 'Conectando...' : 'Entrar'}
                </button>
            </form>

            {/* Divider y Botón Google (sin cambios) */}
            <div className="flex items-center my-6">
                <div className="flex-grow border-t border-gray-300" />
                <span className="mx-3 text-sm text-gray-500">O CONTINÚA CON</span>
                <div className="flex-grow border-t border-gray-300" />
            </div>

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
// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    // 1. Obtener el token. Si no existe, es null.
    const token = localStorage.getItem('token');

    // 2. Verificar el token
    if (!token) {
        // Si NO hay token, redirigir al login. 
        // 'replace' previene que el usuario regrese a la ruta privada usando el botón 'Atrás'.
        console.log("No se encontró token, redirigiendo a login.");
        return <Navigate to="/auth/login" replace />;
    }

    // 3. Si SÍ hay token, permitir el acceso a la ruta anidada
    // <Outlet /> renderiza el componente hijo de la ruta protegida (ej: SmartTaskPage)
    return <Outlet />;
};

export default ProtectedRoute;
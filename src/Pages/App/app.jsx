import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage.jsx"; // Página de inicio
import Auth from "../Auth/Auth.jsx";  //auth
import Sidebar from "../Sidebar/Sidebar.jsx"; // Navbar de prueba
// Layout principal del dashboard
import SmartTask from "../SmartTask/SmartTask.jsx";
import DashboardLayout from "../DashboardLayout/DashboardLayout.jsx";
import Search from "../Search/Search.jsx";
import Calendar from "../Calendar/Calendar.jsx";
import Notifications from "../Notifications/Notifications.jsx";
import Groups from "../Groups/Groups.jsx";
import Profile from "../Profile/Profile.jsx";
import Settings from "../Settings/Settings.jsx";
//

import NotFound from "../NotFound/NotFound.jsx"; // Página 404
import "./app.css"; 
// 🚨 Nuevo Componente Importado
import ProtectedRoute from '../../components/ProtectedRoute.jsx'; // 👈 Asegúrate de que la ruta sea correcta

import "./app.css"; 

function App() {
    return (
        <BrowserRouter>
            <Routes>
                
                {/* RUTAS PÚBLICAS */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/auth/*" element={<Auth />} />
                <Route path="/sidebar" element={<Sidebar />} /> {/* Ruta de prueba */}

                {/* =================================== */}
                {/* 🛡️ BLOQUE DE RUTAS PROTEGIDAS */}
                {/* =================================== */}
                {/* 1. Usamos ProtectedRoute para verificar el token */}
                <Route element={<ProtectedRoute />}> 
                    
                    {/* 2. Anidamos el Layout del Dashboard, el cual ahora está protegido */}
                    <Route path="/smarttask" element={<DashboardLayout />}>
                        
                        {/* 3. Subrutas del Dashboard (Todas ahora protegidas) */}
                        <Route index element={<SmartTask />} /> {/* /smarttask */}
                        <Route path="calendar" element={<Calendar />} />
                        <Route path="search" element={<Search />} />
                        <Route path="notifications" element={<Notifications />} />
                        <Route path="groups" element={<Groups />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="settings" element={<Settings />} />
                        
                        {/* Manejo de 404 dentro del dashboard */}
                        <Route path="*" element={<NotFound />} /> 
                    </Route>

                </Route>

                {/* 🚨 Catch-all: Cualquier otra ruta no definida */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
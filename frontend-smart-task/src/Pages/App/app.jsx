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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página raíz */}
        <Route path="/" element={<LandingPage />} />

        {/* Auth/Login y Register */}
        <Route path="/auth/*" element={<Auth />} />

        {/* Layout principal del Dashboard */}
        <Route path="/smarttask" element={<DashboardLayout />}>
          <Route index element={<SmartTask />} /> {/* /smarttask */}
          <Route path="calendar" element={<Calendar />} />
          <Route path="search" element={<Search />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="groups" element={<Groups />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          {/* ❗ Si dentro de /smarttask no existe la ruta */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Rutas de prueba (puedes mantenerla si quieres) */}
        <Route path="/sidebar" element={<Sidebar />} />

        {/* ❌ Cualquier otra ruta fuera de /smarttask o /auth */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
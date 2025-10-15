import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.jsx";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-50 p-6">
        <Outlet /> {/* Aquí se renderizan las páginas: Home, Calendar, etc. */}
      </main>
    </div>
  )
};
export default DashboardLayout;

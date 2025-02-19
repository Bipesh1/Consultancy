import { Outlet } from "react-router-dom";
import Sidebar from "./(protected)/components/sidebar";
const ProtectedLayout = () => {
  return(
  <div className="flex min-h-screen" >
    <Sidebar/>
    <div className="flex-1 p-4 bg-gray-100 overflow-y-auto">
      <Outlet />
    </div>
  </div>  
);
};

export default ProtectedLayout;
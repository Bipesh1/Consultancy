import { Outlet } from "react-router-dom";
import Navigation from "./components/sections/navigation"; // Your navigation component
import Sparklefooter from "./components/sections/sparkle-footer";

const PublicLayout = () => {
  return (
    <>
      <Navigation/>
      <Outlet />
      <Sparklefooter/>
    </>
  );
};

export default PublicLayout;
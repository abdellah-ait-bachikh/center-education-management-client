import { Outlet } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
const Layout = () => {
  return (
    <HeroUIProvider>
      <Outlet />
    </HeroUIProvider>
  );
};

export default Layout;

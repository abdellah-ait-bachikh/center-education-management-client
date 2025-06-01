import { Outlet } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import Aside from "./components/Aside";
import Header from "./components/Header";
const Layout = () => {
  return (
    <HeroUIProvider className="w-full flex z-[9999]">
      <Aside />
      <section className="flex-grow flex flex-col">
        <Header />
        <main className="bg-gradient-to-br from-primary-50/20 via-primary-50/50 to-primary-50/70 flex-1 transition-all z-[9997]">
          <Outlet />
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
          <div>djdnj </div>
        </main>
      </section>
    </HeroUIProvider>
  );
};

export default Layout;

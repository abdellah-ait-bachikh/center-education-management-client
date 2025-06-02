import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import IconComponent from "./IconComponent";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { TAppInitialState } from "../lib/types";

const Navbar = () => {
  const { asideOpen } = useSelector(
    (state: { app: TAppInitialState }) => state.app
  );
  useEffect(() => {
    console.log(window.innerWidth);
  }, []);
  return (
    <nav className="w-full flex flex-col mt-6 flex-1 overflow-hidden overflow-y-auto gap-2">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
        <NavLink
          key={i}
          to={i === 0 ? "/" : "/test"}
          className={classNames(
            "block hover:bg-gray-100 dark:hover:bg-slate-900/50  bg-gray-50 dark:bg-slate-900/40  rounded-md w-full px-2.5 py-1.5 transition-all",
            {
              "md:rounded-2xl": !asideOpen,
              "md:rounded-lg": asideOpen,
            }
          )}
        >
          <div className="flex items-center justify-start gap-2.5">
            <IconComponent Icon={FaHome} className="text-xl flex-shrink-0" />{" "}
            <span className="text-lg font-semibold">Accuell</span>
          </div>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;

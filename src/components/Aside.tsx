import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TAppInitialState } from "../lib/types";
import ToggleAside from "./ToggleAside";

const Aside = () => {
  const dispatch = useDispatch<TAppDispatch>();
  const { asideOpen } = useSelector(
    (state: { app: TAppInitialState }) => state.app
  );
  return (
    <aside
      className={classNames(
        "h-screen fixed md:sticky top-0 left-0 bg-white overflow-hidden  transition-all z-[9999] ",
        {
          "w-screen md:w-60": asideOpen,
          "w-0 md:w-20": !asideOpen,
        }
      )}
    >
      <div className="relative h-full w-full">
        <div className="absolute top-3 right-3 md:hidden">
          <ToggleAside/>
        </div>
      </div>
    </aside>
  );
};

export default Aside;

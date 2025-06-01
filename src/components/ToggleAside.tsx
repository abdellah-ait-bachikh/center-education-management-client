import { Button } from "@heroui/react";
import { TAppDispatch, TAppInitialState } from "../lib/types";
import { useDispatch, useSelector } from "react-redux";
import { setAsideOpen } from "../redux/slices/appSlice";
import { BsList } from "react-icons/bs";
import IconComponent from "./IconComponent";
import { VscClose } from "react-icons/vsc";

const ToggleAside = () => {
  const dispatch = useDispatch<TAppDispatch>();
  const { asideOpen } = useSelector(
    (state: { app: TAppInitialState }) => state.app
  );
  const handelAsideOpen = () => {
    dispatch(setAsideOpen(!asideOpen));
  };
  return (
    <button className="cursor-pointer rounded-2xl active:bg-gray-200 hover:bg-gray-100 p-2">
      {asideOpen ? (
        <IconComponent Icon={VscClose} className="text-2xl" />
      ) : (
        <IconComponent Icon={BsList} className="text-2xl" />
      )}
    </button>
  );
};

export default ToggleAside;

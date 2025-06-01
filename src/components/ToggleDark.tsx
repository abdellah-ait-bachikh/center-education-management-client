import IconComponent from "./IconComponent";
import { Button } from "@heroui/react";
import { FaRegMoon } from "react-icons/fa";

const ToggleDark = () => {
  return (
    <button className="cursor-pointer rounded-2xl active:bg-gray-200 hover:bg-gray-100 p-2">
      {/* <IconComponent Icon={LuSunMedium} className="text-2xl" /> */}
      <IconComponent Icon={FaRegMoon} className="text-2xl" />
    </button>
  );
};

export default ToggleDark;

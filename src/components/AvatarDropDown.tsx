import { Avatar } from "@heroui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import IconComponent from "./IconComponent";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { avatarDropdownElements } from "../lib/const";
import { Link } from "react-router-dom";

const AvatarDropDown = () => {
  const [avatarDropDownOpen, setAvatarDropDownOpen] = useState(false);
  const handelToggleAvatarDropDown = (value?: boolean) => {
    setAvatarDropDownOpen(
      typeof value === "boolean" ? value : !avatarDropDownOpen
    );
  };

  return (
    <div className="relative flex items-center">
      <button onClick={() => handelToggleAvatarDropDown()}>
        <Avatar />
      </button>
      <motion.div
        initial={{
          scale: avatarDropDownOpen ? 0 : 1,
          opacity: avatarDropDownOpen ? 0 : 1,
        }}
        animate={{
          scale: avatarDropDownOpen ? 1 : 0,
          opacity: avatarDropDownOpen ? 1 : 0,
        }}
        className="absolute top-[60px] right-full p-2 rounded-xl bg-white flex flex-col gap-1"
      >
        {avatarDropdownElements.map((item) =>
          item.href ? (
            <Link
              to={item.href}
              className="flex items-center gap-2 rounded-md p-2 active:bg-gray-100 hover:bg-gray-100 cursor-pointer"
              onClick={() => handelToggleAvatarDropDown(false)}
            >
              <IconComponent Icon={item.icon} className="text-2xl" />
              <div className="font-semibold text-lg text-nowrap ">
                {item.label ? item.label : "abdellah ait bachkh"}
              </div>
            </Link>
          ) : (
            <button
              className="flex items-center gap-2 rounded-md p-2 active:bg-danger-50 hover:bg-danger-50 cursor-pointer"
              onClick={() => handelToggleAvatarDropDown(false)}
            >
              <IconComponent Icon={item.icon} className="text-2xl" />
              <div className="font-semibold text-lg text-nowrap ">
                {item.label ? item.label : "abdellah ait bachkh"}
              </div>
            </button>
          )
        )}
      </motion.div>
    </div>
  );
};

export default AvatarDropDown;

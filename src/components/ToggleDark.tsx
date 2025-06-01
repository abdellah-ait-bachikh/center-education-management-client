import React, { useState } from "react";
import IconComponent from "./IconComponent";
import { LuSunMedium } from "react-icons/lu";
import { Button } from "@heroui/react";
import { FaRegMoon } from "react-icons/fa";

const ToggleDark = () => {
  return (
    <Button variant="light" radius="lg" isIconOnly>
      {/* <IconComponent Icon={LuSunMedium} className="text-2xl" /> */}
      <IconComponent Icon={FaRegMoon} className="text-2xl" />
    </Button>
  );
};

export default ToggleDark;

import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

export const avatarDropdownElements = [
  { id: 1, label: null, href: "/profile",icon:FaRegUser },
  { id: 2, label: "Settings", href: "/settings",icon:IoSettingsOutline },
  { id: 1, label: "Logout", href: null,icon:CiLogout },
] as const;

import classNames from "classnames";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TAppInitialState } from "../lib/types";

const Aside = () => {
  const dispatch = useDispatch<TAppDispatch>();
  const { asideOpen } = useSelector(
    (state: { app: TAppInitialState }) => state.app
  );
  return (
    <aside
      className={classNames(
        "h-screen fixed md:sticky top-0 left-0 bg-primary-50  overflow-hidden  transition-all z-[9999]",
        {
          "w-screen md:w-60": asideOpen,
          "w-0 md:w-20": !asideOpen,
        }
      )}
    >
      Aside
    </aside>
  );
};

export default Aside;

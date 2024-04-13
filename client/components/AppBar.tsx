import React from "react";
import { AppBar as MuiAppBar } from "@mui/material";
import Image from "next/image";

import logo from "../public/images/logo-zti.svg";

export default function AppBar() {
  return (
    <>
      <MuiAppBar className="bg-app-bar-bg h-16" position="fixed">
        <div className="flex items-center">
          <div className="flex items-center  h-14 ml-20 text-xl">
            <Image
              src={logo}
              alt="logo"
              height="40"
              width="40"
              className="mr-3"
            />
            <h1>Pocket Grow</h1>
          </div>
          <div className="flex items-center h-14 text-xl">
            <a
              href="#"
              className="ml-20 mr-20 hover:border-b-2 hover:border-green-500 pb-0.5"
            >
              wallet
            </a>
            <a
              href="#"
              className="mr-20 hover:border-b-2 hover:border-green-500 pb-0.5"
            >
              account
            </a>
            <a
              href="#"
              className="hover:border-b-2 hover:border-green-500 pb-0.5"
            >
              something
            </a>
          </div>
        </div>
      </MuiAppBar>
    </>
  );
}

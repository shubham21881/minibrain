import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="w-full h-[45px] flex justify-center items-center p-4  gap-x-5 text-black">
      <NavLink  className={"text-center m-4 w-[20%] rounded-2xl pl-4 bg-[#C2FFC7]"} to={"/"}>Home</NavLink>
      <NavLink className={"text-center m-4 w-[20%] rounded-2xl pl-4 bg-[#C2FFC7]"} to={"/pastes"}>pastelist</NavLink>
    </div>
  );
}

export default Navbar;

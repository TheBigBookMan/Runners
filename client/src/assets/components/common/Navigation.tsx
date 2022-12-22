import NavLinks from "./NavLinks";
import { useState } from "react";

const Navigation = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <ul className="hidden md:flex gap-5 text-sm">
        <NavLinks setNavOpen={setNavOpen} />
      </ul>
      <div
        className="md:hidden flex flex-col gap-1 absolute -top-2 right-8 group hover:cursor-pointer"
        onClick={(): void => (navOpen ? setNavOpen(false) : setNavOpen(true))}
      >
        <span
          className={`w-8 h-1 bg-orange-400 group-hover:bg-orange-600 transition-all duration-700 ${
            navOpen &&
            "bg-orange-600 origin-top-left rotate-45 group-hover:bg-orange-400 duration-700"
          } `}
        ></span>
        <span
          className={`w-4 h-1 bg-orange-400 group-hover:bg-orange-600 transition-all duration-700 ${
            navOpen && "opacity-0 rotate-45 duration-700"
          } `}
        ></span>
        <span
          className={`w-8 h-1 bg-orange-400 group-hover:bg-orange-600 transition-all duration-700 ${
            navOpen &&
            "bg-orange-600 origin-bottom-right rotate-45 group-hover:bg-orange-400 duration-700"
          } `}
        ></span>
      </div>
      {navOpen && (
        <div className="absolute bg-orange-100 w-[140px] h-[300px] -right-6 top-7 flex flex-col gap-2 p-2">
          <NavLinks setNavOpen={setNavOpen} />
        </div>
      )}
    </div>
  );
};

export default Navigation;

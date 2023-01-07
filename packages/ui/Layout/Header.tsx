import React, {useState} from 'react'

import Menu from "../Icons/Menu";
import LanguageSwitcher from './LanguageSwitcher'
import MobileNav from "./MobileNav";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div
      role="navigation"
      className="h-18 px-2 xs:px-6 md:px-9 lg:px-14 flex lg:grid lg:grid-cols-nav items-center justify-between bg-transparent rxs:bg-neutral-080 w-full fixed z-50"
    >
      <div className="flex items-center h-full">
        <button
          onClick={() => setOpenMenu(true)}
          className="mr-4 w-12 h-12 rounded-full border-none outline-none focus:outline-none flex justify-center items-center md:hidden bg-neutral-080 hover:bg-neutral-090 hover:shadow-gradient-hover active:shadow-gradient-pressed duration-200"
        >
          <Menu/>
        </button>
      </div>
      <MobileNav openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <div className="flex items-center justify-end col-start-3 h-full w-42.75">
        <LanguageSwitcher/>
      </div>
    </div>
  )
}

export default Header

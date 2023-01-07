import classNames from "classnames"
import {useRouter} from "next/router"
import React from 'react'

import LanguageSwitcher from "./LanguageSwitcher";

type MobileNav = {
  openMenu: boolean
  setOpenMenu: (v: boolean) => void
}

const MobileNav = (props: MobileNav) => {
  const {
    openMenu,
    setOpenMenu,
  } = props;
  const router = useRouter();
  const locale: string = router?.locale || 'fa';

  return (
    <div
      role="navigation"
      className={`${
        openMenu ? 'visible' : 'invisible'
      } block md:hidden fixed ease inset-0 w-full min-h-screen z-999`}
    >
      <button
        onClick={() => setOpenMenu(false)}
        className="w-full h-full bg-black bg-opacity-60 outline-none shadow-none border-none"
      />
      <div
        className={classNames(
          'w-64 xzs:w-75 xxs:w-83 xs:w-89 h-full ease duration-200 bg-neutral-100 overflow-hidden z-10 absolute top-0',
          {
            "left-0": locale !== "fa" && openMenu,
            "-left-full": locale !== "fa" && !openMenu,
            'right-0': locale === "fa" && openMenu,
            "-right-full": locale === "fa" && !openMenu,
          })
        }
      >
        <LanguageSwitcher fromMobileNav />
        <div
          onClick={() => setOpenMenu(false)}
          className="py-3.5 px-4 h-18 hover:bg-neutral-090 hover:shadow-gradient-hover active:shadow-gradient-pressed duration-200"
        >
          <span className="text-3.5xl">Home</span>
        </div>
      </div>
    </div>
  )
}

export default MobileNav

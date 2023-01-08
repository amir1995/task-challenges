import classNames from 'classnames';
import { useRouter } from 'next/router';
import React from 'react';

import LanguageSwitcher from './LanguageSwitcher';

type MobileNav = {
  openMenu: boolean;
  setOpenMenu: (v: boolean) => void;
};

const MobileNav = (props: MobileNav) => {
  const { openMenu, setOpenMenu } = props;
  const router = useRouter();
  const locale: string = router?.locale || 'fa';

  return (
    <div
      role="navigation"
      className={`${
        openMenu ? 'visible' : 'invisible'
      } ease z-999 fixed inset-0 block min-h-screen w-full md:hidden`}
    >
      <button
        onClick={() => setOpenMenu(false)}
        className="h-full w-full border-none bg-black bg-opacity-60 shadow-none outline-none"
      />
      <div
        className={classNames(
          'xzs:w-75 xxs:w-83 xs:w-89 ease absolute top-0 z-10 h-full w-64 overflow-hidden bg-neutral-100 duration-200',
          {
            'left-0': locale !== 'fa' && openMenu,
            '-left-full': locale !== 'fa' && !openMenu,
            'right-0': locale === 'fa' && openMenu,
            '-right-full': locale === 'fa' && !openMenu,
          },
        )}
      >
        <LanguageSwitcher fromMobileNav />
        <div
          onClick={() => setOpenMenu(false)}
          className="h-18 hover:bg-neutral-090 hover:shadow-gradient-hover active:shadow-gradient-pressed py-3.5 px-4 duration-200"
        >
          <span className="text-3.5xl">Home</span>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';
import { routes } from 'tasks/constant/routes';
import { TRoute, TRoutes } from 'tasks/types/types/constantTypes';

import Menu from '../Icons/Menu';
import LanguageSwitcher from './LanguageSwitcher';
import MobileNav from './MobileNav';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  const { t } = useTranslation(router.locale);
  const paths: TRoutes = routes.map((p: TRoute) => ({ ...p, active: p.url === router.pathname }));

  return (
    <div
      role="navigation"
      className="max-w-1248 h-18 rxs:bg-neutral-080 fixed left-1/2 z-50 mx-auto flex w-full translate-x-[-50%] items-center justify-between bg-transparent px-4"
    >
      <div>
        <div className="flex h-full items-center">
          <button
            onClick={() => setOpenMenu(true)}
            className="bg-neutral-080 hover:bg-neutral-090 hover:shadow-gradient-hover active:shadow-gradient-pressed mr-4 flex h-12 w-12 items-center justify-center rounded-full border-none outline-none duration-200 focus:outline-none md:hidden"
          >
            <Menu />
          </button>
        </div>
        <div className="hidden md:flex">
          {paths.map(p => (
            <Link key={p.url} href={p.url}>
              <div className="mt-px mr-2 flex h-full items-center text-neutral-900 last:mr-0">
                <div
                  className={classNames(
                    'bg-neutral-080 hover:bg-white8 focus:bg-white16 text-sb rounded-full px-3 py-2.5 font-medium duration-200',
                    {
                      'text-xl font-large': p.active,
                    },
                  )}
                >
                  {t(`${p.name}`)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <MobileNav openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="w-42.75 col-start-3 flex h-full items-center justify-end">
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Header;

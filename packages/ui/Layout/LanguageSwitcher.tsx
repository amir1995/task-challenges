import classNames from 'classnames'
import useOnClickOutside from 'hooks/useOnClickOutside'
import {useRouter} from 'next/router'
import {useTranslation} from 'next-i18next'
import React, {useCallback, useMemo, useRef, useState} from 'react'

import Chevron from "../Icons/Chevron";

type LanguageSwitcherProps = {
  fromMobileNav?: boolean
}

const LanguageSwitcher = (props: LanguageSwitcherProps) => {
  const {fromMobileNav} = props
  const [showMenu, setShowMenu] = useState(false)

  const ref = useRef(null)
  const router = useRouter()
  const handleClickOutside = () => {
    setShowMenu(false)
  }

  useOnClickOutside(ref, handleClickOutside)

  const {i18n} = useTranslation();
  const {language: currentLanguage} = i18n;

  const locales = router?.locales?.filter(item => item !== "default") ?? [currentLanguage];

  const languageNames = useMemo(() => {
    return new Intl.DisplayNames([currentLanguage], {
      type: 'language',
    });
  }, [currentLanguage]);

  const switchToLocale = useCallback(
    (locale: string) => {
      const path = router.asPath;
      return router.push(path, path, {locale});
    },
    [router]
  );

  const languageChanged = useCallback(
    async (option: {value: string, label: string}) => {
      const locale = option.value;
      await switchToLocale(locale);
      document.body.dir = locale === "fa" ? "rtl" : "ltr";
    },
    [switchToLocale]
  );

  return (
    <div
      className={classNames("relative w-full", {"flex md:hidden items-start p-4": fromMobileNav,
        "hidden md:flex items-end": !fromMobileNav})}
    >
      <div className={classNames("flex w-full", {"justify-start": fromMobileNav, "justify-end": !fromMobileNav})}>
        <div
          onClick={() => setShowMenu(!showMenu)}
          role="button"
          tabIndex={-1}
          className="flex items-end relative"
        >
          <div
            className={classNames(
              'w-9 h-9 rounded-full flex items-center justify-center relative bg-colour-g2 hover:bg-colour-g3 mr-1'
            )}
          >
            <div
              className="cursor-pointer flex items-center justify-center focus:outline-none"
            >
              {router?.locale ? router?.locale.toUpperCase() : "FA"}
            </div>
          </div>
          <div className="relative">
            <button
              className="w-9 h-9 rounded-full outline-none border-none focus:outline-none focus:border-none hover:shadow-gradient-hover active:shadow-gradient-pressed duration-200"
            >
              <div className={`mt-0.5 w-6 h-6 mx-auto flex items-center justify-center`}>
                {showMenu ? (
                  <span className="relative -top-0.5">
                  <Chevron dir="up"/>
                </span>
                ) : (
                  <Chevron dir="down"/>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
      <div
        ref={ref}
        className={classNames(
          'absolute bg-neutral-090 rounded-lg shadow-dropdown text-sm top-14 transition-opacity w-42.75 overflow-hidden',
          {
            'opacity-0 pointer-events-none': !showMenu,
            'opacity-100': showMenu,
          }
        )}
      >
        <div
          className="-top-9 absolute right-0 bg-transparent h-11 w-42.75"
        />
        <div
          className="overflow-hidden"
        >
          {locales.map((locale) => {
            const label = languageNames.of(locale) ?? locale;
            const option = {
              value: locale,
              label,
            };
            return (
              <div
                className="w-full px-6 h-16 flex items-center hover:bg-neutral-090 hover:shadow-gradient-hover active:shadow-gradient-pressed duration-200"
                onClick={() => languageChanged(option)}
              >
                <div
                  className="pb-6 mt-5 leading-5 border-b border-neutral-300 group-hover:border-transparent relative w-full text-base duration-75"
                >
                  <span
                    className="relative top-0.5"
                  >
                    {label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

LanguageSwitcher.defaultProps = {
  fromMobileNav: false
}

export default LanguageSwitcher

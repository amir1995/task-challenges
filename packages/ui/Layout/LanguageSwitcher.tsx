import classNames from 'classnames';
import useOnClickOutside from 'hooks/useOnClickOutside';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';

import Chevron from '../Icons/Chevron';

type LanguageSwitcherProps = {
  fromMobileNav?: boolean;
};

const LanguageSwitcher = (props: LanguageSwitcherProps) => {
  const { fromMobileNav } = props;
  const [showMenu, setShowMenu] = useState(false);

  const ref = useRef(null);
  const router = useRouter();
  const handleClickOutside = () => {
    setShowMenu(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  const { i18n } = useTranslation();
  const { language: currentLanguage } = i18n;

  const locales = router?.locales?.filter(item => item !== 'default') ?? [currentLanguage];

  const languageNames = useMemo(() => {
    return new Intl.DisplayNames([currentLanguage], {
      type: 'language',
    });
  }, [currentLanguage]);

  const switchToLocale = useCallback(
    (locale: string) => {
      const path = router.asPath;
      return router.push(path, path, { locale });
    },
    [router],
  );

  const languageChanged = useCallback(
    async (option: { value: string; label: string }) => {
      const locale = option.value;
      await switchToLocale(locale);
      document.body.dir = locale === 'fa' ? 'rtl' : 'ltr';
      setShowMenu(false);
    },
    [switchToLocale],
  );

  useEffect(() => {
    document.body.dir = router.locale === 'fa' ? 'rtl' : 'ltr';
  }, [router.locale])

  return (
    <div
      className={classNames('relative w-full', {
        'flex items-start p-4 md:hidden': fromMobileNav,
        'hidden items-end md:flex': !fromMobileNav,
      })}
    >
      <div
        className={classNames('flex w-full', {
          'justify-start': fromMobileNav,
          'justify-end': !fromMobileNav,
        })}
      >
        <div
          onClick={() => setShowMenu(!showMenu)}
          role="button"
          tabIndex={-1}
          className="relative flex items-end"
        >
          <div
            className={classNames(
              'bg-colour-g2 hover:bg-colour-g3 relative mr-1 flex h-9 w-9 items-center justify-center rounded-full',
            )}
          >
            <div className="flex cursor-pointer items-center justify-center focus:outline-none">
              {router?.locale ? router?.locale.toUpperCase() : 'FA'}
            </div>
          </div>
          <div className="relative">
            <button className="hover:shadow-gradient-hover active:shadow-gradient-pressed h-9 w-9 rounded-full border-none outline-none duration-200 focus:border-none focus:outline-none">
              <div className={`mx-auto mt-0.5 flex h-6 w-6 items-center justify-center`}>
                {showMenu ? (
                  <span className="relative -top-0.5">
                    <Chevron dir="up" />
                  </span>
                ) : (
                  <Chevron dir="down" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
      <div
        ref={ref}
        className={classNames(
          'bg-neutral-090 shadow-dropdown w-42.75 absolute top-14 overflow-hidden rounded-lg text-sm transition-opacity',
          {
            'pointer-events-none opacity-0': !showMenu,
            'opacity-100': showMenu,
          },
        )}
      >
        <div className="w-42.75 absolute -top-9 right-0 h-11 bg-transparent" />
        <div className="overflow-hidden">
          {locales.map(locale => {
            const label = languageNames.of(locale) ?? locale;
            const option = {
              value: locale,
              label,
            };
            return (
              <div
                className="hover:bg-neutral-090 hover:shadow-gradient-hover active:shadow-gradient-pressed flex h-16 w-full items-center px-6 duration-200"
                onClick={() => languageChanged(option)}
                key={label}
              >
                <div className="relative mt-5 w-full border-b border-neutral-300 pb-6 text-base leading-5 duration-75 group-hover:border-transparent">
                  <span className="relative top-0.5">{label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

LanguageSwitcher.defaultProps = {
  fromMobileNav: false,
};

export default LanguageSwitcher;

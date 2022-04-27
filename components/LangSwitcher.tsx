import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import style from 'styles/langSwitcher.module.scss';
import clsx from 'clsx';

const localesOptions = {
  ru: {
    btnText: 'Рус',
    title: 'переключить язык',
    icon: {
      path: '/img/lang/Flag-RU.svg',
      alt: 'флаг России',
    },
  },
  en: {
    btnText: 'Eng',
    title: 'switch language',
    icon: {
      path: '/img/lang/Flag-ENG.svg',
      alt: 'Great Britain flag',
    },
  },
};

const Icon = (props: { lang: string }) => {
  const { lang } = props;

  return (
    <span className={style.icon}>
      <Image
        src={localesOptions[lang]['icon']['path']}
        width={24}
        height={24}
        alt={localesOptions[lang]['icon']['alt']}
      />
    </span>
  );
};

const LangSwitcher = () => {
  const { locale, pathname, asPath, query } = useRouter();
  const [shownDropdown, setShownDropdown] = useState(false);

  function toggleDpordown() {
    setShownDropdown(!shownDropdown);
  }

  function closeDropdown() {
    setShownDropdown(false);
  }

  return (
    <div className={clsx(style.wrapper, shownDropdown && style.open)}>
      <button className={style.toggleBtn} onClick={toggleDpordown} title={localesOptions[locale]['title']}>
        <Icon lang={locale} /> {localesOptions[locale]['btnText']}
      </button>

      <nav className={style.nav}>
        <ul>
          <Link href={{ pathname, query }} as={asPath} locale="ru" passHref>
            <a className={style.btn} onClick={closeDropdown}>
              <Icon lang="ru" /> {localesOptions['ru']['btnText']}
            </a>
          </Link>

          <Link href={{ pathname, query }} as={asPath} locale="en" passHref>
            <a className={style.btn} onClick={closeDropdown}>
              <Icon lang="en" /> {localesOptions['en']['btnText']}
            </a>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default LangSwitcher;

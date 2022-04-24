import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image'
import LangSwitcher from 'components/LangSwitcher'

type Props = {
  children?: ReactNode
  title?: string
};

const Layout = ({ children, title = '' }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <div className='container header-inner'>
          <Link href='/' passHref>
            <a>
              <Image src='/img/logo.svg' alt='logo' width={160} height={16} priority/>
            </a>
          </Link>

          <div className='header-lang'>
            <LangSwitcher />
          </div>
        </div>
      </header>
      {children}
    </>
  );
};

export default Layout;

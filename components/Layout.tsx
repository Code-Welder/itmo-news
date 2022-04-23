import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image'

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
        <div className='container'>
          <Link href='/' passHref>
            <a>
              <Image src='/logo.svg' alt='logo' width={160} height={16}/>
            </a>
          </Link>
        </div>
      </header>
      {children}
    </>
  );
};

export default Layout;

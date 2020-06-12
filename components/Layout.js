import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Container } from 'react-bootstrap';

const Layout = ({ children, title }) => (
  <Container>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </Container>
);

export default Layout;

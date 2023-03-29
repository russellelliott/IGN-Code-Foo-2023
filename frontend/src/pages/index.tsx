import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Head from 'next/head';
//import React from 'react';
import Poll from '../components/poll';

import type { GetServerSideProps } from 'next'

//import { useTranslation } from 'next-i18next';




const theme = createTheme();

/**
 * ---- TO-DO ----
 *
 * 1. Save current category and subcategory as state in context.
 */

export default function Home() {

  return (
    <>
      <Head>
        <title>Yumbai</title>
        <meta name="description" content="CSE 187 Marketplace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Poll/>
        </Container>
      </ThemeProvider>
    </>
  );
}
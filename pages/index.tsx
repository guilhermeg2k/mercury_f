import { Box } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import LeftBar from '../components/LeftBar';
import Main from '../components/Main';
import NavBar from '../components/NavBar';
import VerifyAuth from '../components/VerifyAuth';
import { NavBarContext } from '../contexts/navbar';

const Home: NextPage = () => {
  const { isOpen } = useContext(NavBarContext);
  return (
    <>
    <Head>
      <title>Home page</title>
    </Head>
      <Box>
        <VerifyAuth />
        <NavBar />
        <Box display="flex">
          <LeftBar />
          <Main open={isOpen}>laulau</Main>
        </Box>
      </Box>
    </>
  );
};

export default Home;

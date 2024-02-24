import HomeContainer from '@/components/views/Home/HomeContainer';
import TestHomeContainer from '@/components/views/TestHome/TestHomeContainer';
import { GetServerSideProps } from 'next/types';

// const Home = () => {
//   return <HomeContainer />;
// };

const Home = () => {
  return <TestHomeContainer />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default Home;

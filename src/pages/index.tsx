import HomeContainer from '@/components/views/Home/HomeContainer';
import { GetServerSideProps } from 'next/types';

const Home = () => {
  return <HomeContainer />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default Home;

import React from 'react';
import TestContainer from "@/components/views/Test/TestContainer";
import {GetServerSideProps} from "next/types";

const Test = () => {
  return <TestContainer/>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default Test;
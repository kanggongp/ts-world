import React from 'react';
import CertificationContainer from "@/components/views/Certification/CertificationContainer";
import {GetServerSideProps} from "next/types";

const Certification = () => {
  return <CertificationContainer/>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default Certification;
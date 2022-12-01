import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured/Featured";
import Header from "../components/Header/Header";
import LatestWork from "../components/LatestWork/LatestWork";
import MainSection from "../components/MainSection/MainSection";
import OurPartner from "../components/OurPartner/OurPartner";
import Testimonial from "../components/Testimonial/Testimonial";
import Web3Steps from "../components/Web3Steps/Web3Steps";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <OurPartner />
      <MainSection />
      <Web3Steps />
      <LatestWork />
      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;

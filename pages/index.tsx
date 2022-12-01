import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner/Banner";
import Blogs from "../components/Blog/Blogs";
import FAQ from "../components/FAQ/FAQ";
import Featured from "../components/Featured/Featured";
import Footer from "../components/Footer/Footer";
import HashingBits from "../components/HasingBits/HashingBits";
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
      <FAQ />
      <Blogs />
      <HashingBits />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;

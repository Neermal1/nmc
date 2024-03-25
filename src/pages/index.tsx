import Layout from "@/components/Layout/Layout";
import HeroSection from "@/pageComponents/Home/components/HeroSection";
import Metatag from "@/utils/Metatag";
import React from "react";

const index = () => {
  return (
    <Layout>
      <Metatag heading="NMC" subheading="Home" og_image="" />
      <HeroSection />
    </Layout>
  );
};

export default index;

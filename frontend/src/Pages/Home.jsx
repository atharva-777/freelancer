import React from "react";
import Header from "../components/layout/Header";
import ForTalent from "../components/ForTalent";
import FirstSection from "../components/FirstSection";
import UpYourWork from "../components/layout/UpYourWork";
import ForClint from "../components/ForClint";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <header className="">
      <Header></Header>
      <FirstSection></FirstSection>
      <UpYourWork></UpYourWork>
      <ForClint></ForClint>
      <ForTalent></ForTalent>
      <Footer></Footer>
    </header>
  );
};

export default Home;

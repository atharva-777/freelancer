import React from "react";
import ForTalent from "../components/ForTalent";
import FirstSection from "../components/FirstSection";
import UpYourWork from "../components/layout/UpYourWork";
import ForClint from "../components/ForClint";
import Footer from "../components/layout/Footer";
import NavbarWithCTAButton from "../components/layout/NavbarWithCTAButton";
import {
  HorizontalCard,
  HorizontalCard2,
} from "../components/HorizontalCardForTalent";

const Home = () => {
  return (
    <header className="">
      <NavbarWithCTAButton></NavbarWithCTAButton>
      <FirstSection></FirstSection>
      <UpYourWork></UpYourWork>
      <ForClint></ForClint>
      <ForTalent></ForTalent>
      <Footer></Footer>
    </header>
  );
};

export default Home;

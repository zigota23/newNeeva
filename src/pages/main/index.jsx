import React from "react";
import Header from "../../components/header";
import FirstSection from "./section/FirstSection";
import SecondSection from "./section/SecondSection";
import ThirdSelection from "./section/ThirdSection";
import FouthSelection from "./section/FouthSelection";
import FifthSection from "./section/FifthSection";
import SixthSection from "./section/SixthSection";
import SevenSection from "./section/SevenSection";
import EightSection from "./section/EigthSection";
import NinthSection from "./section/NinethSection";
import Footer from "../../components/footer";


const Main = (props)=>{

  return(
    <div>
      <Header/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSelection/>
      <FouthSelection/>
      <FifthSection/>
      <SixthSection/>
      <SevenSection/>
      <EightSection/>
      <NinthSection/>
      <Footer/>
    </div>  
  )
}

export default Main;
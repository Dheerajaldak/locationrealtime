import React from "react";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import UnoloComponent from "./UnoloComponent";
import ShuffleHero from "./ShuffleHero";
import { TextParallaxContentExample } from "./TextParallaxContentExample";
import { BouncyCardsFeatures } from "./BouncyCardsFeatures";
import HomePage from "./HomePage";
import Footer from "./Footer";
import ChatBot from 'react-chatbotify';
import config from "../chatbot/config";
import ActionProvider from "../chatbot/ActionProvider";
import MessageParser from "../chatbot/MessageParser";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <UnoloComponent />
      <BouncyCardsFeatures/>
      <ShuffleHero/>
      <TextParallaxContentExample/>
      <HomePage/>
      <Footer/>
      <ChatBot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </>
  );
};

export default LandingPage;

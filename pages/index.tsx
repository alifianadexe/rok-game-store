import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/organisme/navbar";
import MainBanner from "../components/organisme/MainBanner/index";
import TransactionStep from "../components/organisme/TransactionStep";
import FeaturedGame from "../components/organisme";
import Reached from "../components/organisme/Reached";
import Story from "../components/organisme/Story";
import Footer from "../components/organisme/Footer";
import TopUp from "../components/organisme/TopUp";
import JokiAccount from "../components/organisme/JokiAccount";
import BotPage from "../components/organisme/BotPage";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <TopUp />
      <JokiAccount />
      <BotPage />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}

//export default Home

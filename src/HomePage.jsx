import CopyRight from "./components/CopyRight";
import FeaturesSection from "./components/FeaturesSection";
import GetStarted from "./components/GetStarted";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
const HomePage = () => {
  return (
    <>
      {/* <div className="overflow-x-hidden relative min-h-screen">
        <div className="absolute left-1/2 top-40  -z-50 w-96 h-96 bg-green-400 rounded-full blur-[150px]"></div>
        <Navbar /> */}
        <HeroSection />
        <FeaturesSection />
        <GetStarted />
        <CopyRight />
      {/* </div> */}
    </>
  );
};

export default HomePage;

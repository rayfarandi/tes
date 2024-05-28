import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import MyPortfolio from "../MyPortfolio";
import ContactMe from "../ContactMe";
import ScrollEffect from "../../../component/ScrollEffect";

export default function Home() {
  return (
    <>
      <ScrollEffect>
        <HeroSection />
      </ScrollEffect>
      <ScrollEffect>
        <MySkills />
      </ScrollEffect>
      <ScrollEffect>
        <AboutMe />
      </ScrollEffect>
      <ScrollEffect>
        <MyPortfolio />
      </ScrollEffect>
      <ScrollEffect>
        <ContactMe />
      </ScrollEffect>
      
    </>
  );
}

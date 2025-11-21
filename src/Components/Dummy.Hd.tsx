import { useEffect, useState } from "react";
import AboutPage from "../Pages/AboutPage";
import LeadershipPage from "../Pages/LeadershipPage";
import ProjectPage from "../Pages/ProjectPage";
import SkillsPage from "../Pages/SkillsPage";
import CustomButton from "./CustomButton";
import Hero from "./Hero";
import Nav from "./Nav";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-[#121a35] via-[#08180ff5] to-[#010305] text-white relative">
        <div
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 
          ${
            scrolled
              ? "bg-white/15 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              : "bg-transparent backdrop-blur-0 shadow-none"
          }`}
        >
          <div className="flex justify-between items-center px-6 py-4">
            <h1 className="text-xl bg-linear-to-r from-blue-500 via-purple-500 to-green-400 bg-clip-text text-transparent font-semibold">
              💼 OT
            </h1>
            <Nav />
          </div>
        </div>

        <div className="pt-20"></div>

        <div className="flex items-center pt-3 justify-center">
          <CustomButton
            title="Frontend Developer"
            icon="⚡"
            className="border border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.7)] animate-pulse [animation-duration:3s] rounded-full px-3 py-1"
          />
        </div>

        <Hero />
      </div>

      <div className="bg-black pt-15">
        <AboutPage />
      </div>

      <SkillsPage />
      <ProjectPage />
      <LeadershipPage />
    </>
  );
};

export default Header;

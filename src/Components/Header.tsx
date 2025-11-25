import { useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

import AboutPage from "../Pages/AboutPage";
import LeadershipPage from "../Pages/LeadershipPage";
import ProjectPage from "../Pages/ProjectPage";
import SkillsPage from "../Pages/SkillsPage";

import CustomButton from "./CustomButton";
import Hero from "./Hero";
import Nav from "./Nav";
import { X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const links = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Leadership", id: "leadership" },
    { name: "Contact", id: "contact" },
    { name: "Get In Touch", id: "contact" },
  ];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <>
        <div className="min-h-screen bg-linear-to-b from-[#121a35] via-[#08180ff5] to-[#010305] text-white relative">
          <div
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 
          ${
            scrolled
              ? "bg-white/1 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.3)] pb-3"
              : "bg-transparent backdrop-blur-0 shadow-none"
          }`}
          >
            <div className="flex justify-between items-center px-4 pt-4 md:px-8">
              <h1 className="text-xl md:text-xl bg-linear-to-r from-blue-500 via-purple-500 to-green-400 bg-clip-text text-transparent font-semibold">
                💼 OT
              </h1>

              <div className="hidden lg:block">
                <Nav />
              </div>

              <button
                onClick={showDrawer}
                className="lg:hidden text-white text-2xl"
              >
                <MenuOutlined />
              </button>
            </div>
          </div>

          <Drawer
            placement="right"
            onClose={onClose}
            open={open}
            width="100%"
            className="bg-transparent! backdrop-blur-md"
            bodyStyle={{ padding: 0 }}
            headerStyle={{ display: "none" }}
            styles={{
              wrapper: { height: "80vh" }, // custom height for right drawer
            }}
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <p className="font-bold text-lg bg-linear-to-r from-blue-500 via-purple-500 to-green-400! text-transparent bg-clip-text!">
                  💼 OT
                </p>
              </div>

              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col py-6 px-5 gap-6">
              {links.map((link, index) => {
                const isGetInTouch = link.name === "Get In Touch";

                return (
                  <button
                    key={index}
                    onClick={() => {
                      onClose();
                      document.getElementById(link.id)?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className={
                      isGetInTouch
                        ? "hover-gradient-glow bg-linear-to-r from-blue-500 via-purple-500 to-teal-400 text-black text-[15px] font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-500 hover:-translate-y-2"
                        : "text-gray-400 text-[16px] font-medium hover:text-white transition-all text-left"
                    }
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>
          </Drawer>

          <div className="pt-13"></div>
          <div className="flex items-center pt-3 justify-center md:pt-3">
            <CustomButton
              title="Frontend Developer"
              icon="⚡"
              className="border border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.7)] animate-pulse [animation-duration:3s] rounded-full px-3 py-1"
            />
          </div>

          <Hero />
        </div>

        <div id="about" className="">
          <AboutPage />
        </div>

        <div id="skills" className="">
          <SkillsPage />
        </div>

        <div id="projects" className="">
          <ProjectPage />
        </div>

        <div id="leadership" className="">
          <LeadershipPage />
        </div>
      </>
    </div>
  );
};

export default Header;

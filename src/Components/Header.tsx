import { useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Menu } from "antd";

import AboutPage from "../Pages/AboutPage";
import LeadershipPage from "../Pages/LeadershipPage";
import ProjectPage from "../Pages/ProjectPage";
import SkillsPage from "../Pages/SkillsPage";

import CustomButton from "./CustomButton";
import Hero from "./Hero";
import Nav from "./Nav";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      onClose(); // Close drawer after click
    }
  };

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
            title="Oluwatosin T"
            placement="right"
            onClose={onClose}
            open={open}
            width="50%"
            style={{ maxWidth: 300 }}
            bodyStyle={{ padding: 0 }}
          >
            <Menu mode="vertical" selectable={false}>
              <Menu.Item key="about" onClick={() => scrollToSection("about")}>
                About
              </Menu.Item>

              <Menu.Item key="skills" onClick={() => scrollToSection("skills")}>
                Skills
              </Menu.Item>

              <Menu.Item
                key="projects"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </Menu.Item>

              <Menu.Item
                key="leadership"
                onClick={() => scrollToSection("leadership")}
              >
                Leadership
              </Menu.Item>

              <Menu.Item
                key="contact"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </Menu.Item>
            </Menu>
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

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 pt-5">
      <h1
        className="flex flex-wrap gap-2 text-center justify-center font-bold 
                     text-[35px] sm:text-[45px] md:text-[55px] lg:text-[65px] leading-tight"
      >
        I am
        <span
          className="bg-linear-to-r from-blue-400 via-purple-400 to-teal-300 
                         bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
        >
          Oluwatosin Temitope
        </span>
      </h1>

      <div
        className="text-center text-gray-400 font-medium 
             text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-4 leading-relaxed px-2"
      >
        <p>
          A frontend developer with 2+ years of experience building scalable
          <br />
          and responsive web applications. From startups to establish
          <br />
          teams, I help turn product ideas into fast, accessible, and
          <br />
          maintainable web experiences.
        </p>
      </div>

      <div className="flex flex-wrap cursor-pointer mt-6 justify-center gap-2 sm:gap-3 mb-10">
        {["React", "TypeScript", "Node.js", "AWS", "Docker", "JavaScript"].map(
          (skill, i) => (
            <span
              key={i}
              className="px-3 py-1 font-semibold text-xs sm:text-sm bg-transparent rounded-full 
                         border border-gray-800 hover:bg-green-700 hover:-translate-y-1 
                         transition-transform duration-300"
            >
              {skill}
            </span>
          )
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 justify-center py-3">
        <CustomButton
          title="View My Work"
          icon="✨"
          className="hover-gradient-glow cursor-pointer rounded-lg px-7 py-3 text-base sm:text-lg
                     bg-linear-to-r from-blue-500 via-purple-500 to-teal-400 text-black 
                     transition-all duration-500 ease-in-out hover:-translate-y-2"
        />

        <CustomButton
          title="Let's Connect"
          icon="🚀"
          className="border border-gray-600 text-base sm:text-lg bg-black rounded-lg px-7 py-3 
                     hover:bg-purple-700 hover:-translate-y-2"
        />
      </div>

      <div className="flex justify-center items-center pt-10 gap-6 sm:gap-7 cursor-pointer">
        {[Github, Linkedin, Mail].map((Icon, i) => (
          <p
            key={i}
            className="text-gray-300 bg-transparent py-2 px-2 sm:py-3 sm:px-3 rounded-lg 
                       transition-all duration-500 hover:text-black hover:bg-purple-500"
          >
            <Icon size={20} className="sm:size-[18px]" />
          </p>
        ))}
      </div>

      <div className="flex justify-center mt-4 animate-bounce">
        <ArrowDown
          size={24}
          className="text-blue-500 sm:size-[26px] md:size-[30px]"
        />
      </div>
    </div>
  );
};

export default Hero;

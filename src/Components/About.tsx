import { CodeXml, Heart, Users, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <CodeXml className="text-white w-5 h-5" />,
      title: "Clean Code",
      text: "Writing modular, maintainable code with strong attention to detail",
    },
    {
      icon: <Users className="text-white w-5 h-5" />,
      title: "Team Collaboration",
      text: "Thriving in cross-functional teams and smooth collaboration",
    },
    {
      icon: <Heart className="text-white w-5 h-5" />,
      title: "User-First",
      text: "Creating intuitive, accessible interfaces that users love",
    },
    {
      icon: <Zap className="text-white w-5 h-5" />,
      title: "Performance",
      text: "Building fast, optimized applications with great user experience",
    },
  ];

  return (
    <div className="bg-[#080808] min-h-screen w-full overflow-hidden">
      {/* Top Button */}
      <div className="flex justify-center pt-10">
        <button className="border border-blue-400 rounded-full px-3 py-1 text-sm text-white">
          ✨ About Me
        </button>
      </div>

      {/* Heading */}
      <h1 className="text-white text-center text-3xl sm:text-4xl font-bold py-6">
        Passionate About{" "}
        <span className="bg-linear-to-r from-blue-400 via-purple-400 to-teal-300 bg-clip-text text-transparent">
          Innovation
        </span>
      </h1>

      {/* Description */}
      <div className="text-gray-400 font-semibold text-center text-lg px-6 max-w-3xl mx-auto space-y-2">
        <p>
          I'm a software developer with a passion for building scalable,
          user-centric applications.
        </p>
        <p>
          My experience spans from startup environments to enterprise systems,
          always focusing on clean code and collaboration.
        </p>
        <p>
          I believe in continuous learning and crafting accessible, intuitive
          user experiences.
        </p>
      </div>

      {/* Main Section */}
      <section className="text-gray-200 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
              My Journey
            </h2>

            <p className="mb-4 text-gray-400 font-semibold leading-relaxed">
              I'm passionate about building intuitive, accessible user
              interfaces and writing clean, modular code. Over the years, I’ve
              collaborated with teams to ship modern web applications that are
              visually polished and technically solid.
            </p>

            <p className="mb-4 text-gray-400 font-semibold leading-relaxed">
              Whether I'm spinning up projects with Vite, crafting components in
              React, or refining responsiveness with Tailwind CSS, I always
              bring a user-first mindset.
            </p>

            <p className="text-gray-400 font-semibold leading-relaxed">
              I care deeply about UX consistency, performance, and smooth
              collaboration — thriving in environments where improvement is
              valued.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, i) => (
              <div
                key={i}
                className="bg-[#1b1b1f] border border-gray-700 rounded-xl p-5 cursor-pointer
                hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] hover:-translate-y-2 
                duration-300 transition"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-950 shadow-[0_0_30px_rgba(59,130,246,0.6)] animate-pulse">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

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
        <button className="border border-blue-400 rounded-full px-3 text-sm text-white">
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
          I'm a frontend developer with hands-on experience building responsive
          web applications and reuseable UI components. i focus on clean code,
          accessibility and delivering seamless user experiences. I,m obsessed
          with growth, constantly exploring new tools improving my skills to
          stay sharp and effective in the fast-moving world of frontend
          developer.
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
              I'm focused on creating fast, scalable, and user-centered web
              applications using modern frontend technologies. I work with
              React, Typescript, Javascript, Tailwind CSS, and clean component
              architecture to bing structure, clarity and perfomance to every
              project.
            </p>

            <p className="mb-4 text-gray-400 font-semibold leading-relaxed">
              What drives me is the ability to translate ideas into real
              products: reuseable system, dynamic interfaces and smooth user
              interactions.
            </p>

            <p className="text-gray-400 font-semibold leading-relaxed">
              My goal is to continue developing high-quality applications, and
              contribute solutions that make the web faster, smater, and more
              intuitive for everyone.
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

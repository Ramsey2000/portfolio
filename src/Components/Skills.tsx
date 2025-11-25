const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript (ES6+)", level: 80 },
      { name: "CSS/Tailwind", level: 90 },
    ],
  },
  {
    title: "Tools & Practices",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "REST APIs", level: 85 },
      { name: "Figma", level: 90 },
      { name: "GraphQL", level: 85 },
    ],
  },
  {
    title: "Leadership",
    skills: [
      { name: "Team Management", level: 95 },
      { name: "Mentoring", level: 90 },
      { name: "Architecture Design", level: 90 },
      { name: "Agile/Scrum", level: 85 },
    ],
  },
];

const Accs = [
  "React & Typescript Developer",
  "Responsive Web Design",
  "API Integration & Interactive UI",
  "Live Deployed Project",
];

const Skills = () => {
  return (
    <section className="text-gray-200 bg-[#000000] py-20 px-6 md:px-20">
      <div className="flex justify-center pt-3 items-center">
        <button className="border border-blue-400 rounded-full px-2 text-sm text-white">
          ⚡ Technical Skills
        </button>
      </div>
      {/* Header */}
      <div className="text-center my-6 mb-12">
        <h2 className="text-4xl font-bold text-white">
          Expertise &{" "}
          <span className="bg-linear-to-r from-blue-400 via-purple-400 to-teal-300 bg-clip-text text-transparent">
            Proficiencies
          </span>
        </h2>
        <p className="text-gray-400 mt-5 text-lg">
          A comprehensive skill set built through years of hands-on experience,
          continuous
        </p>
        <p className="text-lg text-gray-400">
          learning, and leading diverse technical projects.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {skillsData.map((category, i) => (
          <div
            key={i}
            className="bg-[#1b1b1f] border-none rounded-xl p-6 shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] hover:-translate-y-2 duration-300 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-5">
              {category.title}
            </h3>

            {category.skills.map((skill, index) => (
              <div key={index} className="mb-5">
                <div className="flex justify-between">
                  <span className="text-white font-semibold text-[14px]">
                    {skill.name}
                  </span>
                  <span className="text-gray-400 text-[13px]">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full mt-2 bg-green-600 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-2 rounded-full bg-blue-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-16 px-2">
        <div className="flex justify-center items-center gap-2 text-center">
          <p className="text-yellow-400 text-xl sm:text-2xl">🏆</p>
          <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
            Certifications & Achievements
          </h3>
        </div>

        <div
          className="
      flex flex-wrap justify-center items-center 
      gap-2 sm:gap-3 md:gap-4 mt-7 max-w-6xl mx-auto
    "
        >
          {Accs.map((Acc, index) => (
            <div
              key={index}
              className="
          px-3 sm:px-4 sm:py-1.5 
          font-semibold text-xs sm:text-sm md:text-[13px]
          cursor-pointer bg-transparent rounded-full 
          border border-gray-900/40 hover:bg-green-700 
          hover:-translate-y-1 transition-transform duration-300
        "
            >
              {Acc}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

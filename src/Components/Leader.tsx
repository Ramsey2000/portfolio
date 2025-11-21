import { Users, BookOpen, Award, Zap } from "lucide-react";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const leadershipData = [
  {
    icon: <Users className="text-white w-6 h-6" />,
    title: "Team Leadership",
    subtitle: "Led 3 cross-functional teams totaling 25+ developers",
    points: [
      "Managed teams ranging from 5–12 developers across different time zones",
      "Implemented agile methodologies resulting in 30% faster delivery",
      "Maintained 95% team retention rate through mentorship programs",
      "Coordinated with product, design, and stakeholder teams",
    ],
  },
  {
    icon: <BookOpen className="text-white w-6 h-6" />,
    title: "Mentorship",
    subtitle: "Mentored 15+ developers from junior to senior level",
    points: [
      "Developed structured onboarding programs for new team members",
      "Created internal tech talks and knowledge sharing sessions",
      "Guided 8 junior developers to mid-level positions",
      "Established code review standards and best practices",
    ],
  },
  {
    icon: <Award className="text-white w-6 h-6" />,
    title: "Recognition",
    subtitle: "Industry awards and community contributions",
    points: [
      "AWS Community Builder (2022–2024)",
      "Speaker at 5+ international tech conferences",
      "Open source maintainer with 10k+ GitHub stars",
      "Technical reviewer for O’Reilly Media publications",
    ],
  },
  {
    icon: <Zap className="text-white w-6 h-6" />,
    title: "Innovation",
    subtitle: "Driving technical excellence and innovation",
    points: [
      "Architected microservices platform serving 2M+ users",
      "Reduced infrastructure costs by 40% through optimization",
      "Introduced automated testing reducing bugs by 60%",
      "Led digital transformation initiatives for enterprise clients",
    ],
  },
];

const Leadership = () => {
  return (
    <section className="bg-[#000000] text-gray-300 py-20 px-6 md:px-20">
      {/* Header */}
      <div className="flex justify-center pt-3 items-center">
        <button className="border border-gray-400/20 rounded-full px-3 text-sm text-white">
          👥 Leadership & Impacts
        </button>
      </div>

      <div className="text-center my-6 mb-12">
        <h2 className="text-4xl font-bold text-white">
          Leading
          <span className="ml-2 bg-linear-to-r from-blue-400 via-purple-400 to-teal-300 bg-clip-text text-transparent">
            Teams
          </span>{" "}
          to Success
        </h2>
        <p className="text-gray-400 mt-5 text-lg">
          Beyond technical expertise, I focus on building high-performing teams,
          fostering growth,
        </p>
        <p className="text-lg text-gray-400">
          and delivering measurable business impact through effective leadership
          and
        </p>
        <p className="text-lg text-gray-400">collaboration.</p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {leadershipData.map((item, index) => (
          <div
            key={index}
            className="bg-transparent border-[0.1px] border-gray-700/40 rounded-2xl p-6 shadow-md"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-[#0e0e20] border-none text-3xl font-bold outline-none p-4 rounded-xl">
                {item.icon}
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-gray-400 font-semibold text-[16px] mt-1">
                  {item.subtitle}
                </p>
              </div>
            </div>

            <ul className="mt-8 text-gray-400 text-sm">
              {item.points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 leading-relaxed"
                >
                  <span className="text-blue-500 text-3xl">•</span>
                  <span className="font-semibold">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="">
        <Testimonials />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </section>
  );
};

export default Leadership;

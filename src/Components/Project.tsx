import ProjectCards from "./ProjectCards";

const Project = () => {
  return (
    <div id="project">
      <div className="bg-[#080808] w-full overflow-x-hidden py-10 px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Label */}
        <div className="flex justify-center items-center pt-4">
          <button className="border border-blue-400 rounded-full px-3 text-xs sm:text-sm text-white">
            🚀 Featured Projects
          </button>
        </div>

        {/* Heading */}
        <h1
          className="
          text-white text-center font-bold py-6 
          text-3xl sm:text-4xl md:text-5xl flex flex-wrap justify-center gap-2
        "
        >
          Building
          <span className="bg-linear-to-r from-blue-400 via-purple-400 to-teal-300 bg-clip-text text-transparent">
            Impact
          </span>
          at scale
        </h1>

        {/* Subtext */}
        <div
          className="
          text-gray-400 font-medium text-center 
          text-sm sm:text-base md:text-lg leading-relaxed 
          max-w-2xl mx-auto space-y-2 px-2
        "
        >
          <p>
            A selection of projects that showcase technical excellence,
            leadership, and measurable business impact across different domains
            and technologies.
          </p>
        </div>

        {/* Project Cards */}
        <div className="mt-10">
          <ProjectCards />
        </div>
      </div>
    </div>
  );
};

export default Project;

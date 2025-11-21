const testimonials = [
  {
    quote:
      "One of the most effective technical leaders I’ve worked with. Their ability to balance technical excellence with team development is exceptional.",
    name: "Sarah Chen",
    title: "VP of Engineering, TechCorp",
  },
  {
    quote:
      "Their mentorship was instrumental in my growth from junior to senior developer. They have a unique ability to explain complex concepts clearly.",
    name: "Michael Rodriguez",
    title: "Senior Software Engineer, StartupXYZ",
  },
  {
    quote:
      "Led our most successful product launch with zero downtime. Their architectural decisions and team coordination were flawless.",
    name: "Jennifer Park",
    title: "Product Manager, Scale Inc.",
  },
];

const Testimonials = () => {
  return (
    <section className="text-gray-200 py-20">
      <h2 className="text-center text-2xl  font-bold mb-12">
        What Colleagues Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-transparent px-8 py-4 font-semibold text-sm text-gray-400 rounded-lg shadow-md border border-gray-700/40 hover:shadow-lg transition duration-300"
          >
            <p className="italic text-gray-500 mb-6">"{item.quote}"</p>

            <div className="h-[0.5px] w-full bg-gray-700 my-3 opacity-50"></div>

            <div>
              <h3 className="font-semibold text-white">{item.name}</h3>
              <p className="text-sm font-semibold text-gray-400">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

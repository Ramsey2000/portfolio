const links = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Leadership", id: "leadership" },
  { name: "Contact", id: "contact" },
  { name: "Get In Touch", id: "contact" },
];

const Nav = () => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex gap-8">
      {links.map((link, index) => {
        const isLast = index === links.length - 1;

        return (
          <button
            key={index}
            onClick={() => handleScroll(link.id)}
            className={
              isLast
                ? "hover-gradient-glow bg-linear-to-r from-blue-500 via-purple-500 to-teal-400 text-black text-[14px] font-semibold px-6 py-2 cursor-pointer rounded-lg shadow-md transition-all duration-500 ease-in-out hover:-translate-y-2"
                : "relative capitalize font-medium cursor-pointer text-gray-400 mt-2 text-lg hover:bg-linear-to-r from-blue-500 via-purple-500 to-teal-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-blue-500 after:via-purple-500 after:to-teal-400 after:transition-all after:duration-500 hover:after:w-full"
            }
          >
            {link.name}
          </button>
        );
      })}
    </div>
  );
};

export default Nav;

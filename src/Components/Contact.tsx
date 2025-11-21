import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="bg-[#000000]">
      <div className="flex justify-center pt-3 items-center">
        <button className="border border-blue-400 rounded-full px-3 text-sm text-white">
          📬 Get In Touch
        </button>
      </div>

      <div className="text-center my-4 mb-12">
        <h2 className="text-4xl font-bold text-white">
          Let's
          <span className="ml-2 bg-linear-to-r from-blue-400 via-purple-400 to-teal-300 bg-clip-text text-transparent">
            Connect
          </span>{" "}
        </h2>
        <p className="text-gray-400 mt-5 text-lg">
          I'm always interested in discussing new opportunities, innovative
          projects, or potential
        </p>
        <p className="text-lg text-gray-400">
          collaborations. Let's build something amazing together.
        </p>
      </div>

      <div className="">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

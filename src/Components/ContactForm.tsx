import { Download, Github, Linkedin, Mail, Map, Phone } from "lucide-react";
import CustomButton from "./CustomButton";

const contactData = [
  {
    icon: <Mail className="text-blue-400 w-6 h-6" />,
    title: "Email",
    subtitle: "ogundiniyioluwatosin@gmail.com",
  },
  {
    icon: <Phone className="text-blue-400 w-6 h-6" />,
    title: "Phone",
    subtitle: "+2347063730271",
  },
  {
    icon: <Map className="text-blue-400 w-6 h-6" />,
    title: "Location",
    subtitle: "Lagos, Nigeria",
  },
];

const ContactForm = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-7 items-start">
      <div className="bg-[#171718] text-white shadow-[0_0_20px_rgba(59,130,246,0.7)] rounded-xl w-full max-w-3xl flex flex-col items-center justify-center px-6 py-5">
        <div className="w-full max-w-3xl grid gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form>
              <div className="flex flex-col md:flex-row gap-4">
                <div>
                  <label className="font-semibold">Name *</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="border border-gray-500/40 w-full! mt-2 text-gray-400 bg-black py-2 px-4 rounded-xl"
                  />
                </div>

                <div>
                  <label className="font-semibold">Email *</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="border text-gray-400 border-gray-500/40 w-full mt-2 bg-black py-2 px-4 rounded-xl"
                  />
                </div>
              </div>

              <div className="mt-3">
                <label className="font-semibold">Subject *</label>
                <input
                  type="text"
                  placeholder="What's this subject?"
                  className="w-full border text-gray-400 border-gray-500/40 mt-2 bg-black py-2 px-4 rounded-xl"
                />
              </div>

              <div className="mt-3">
                <label className="font-semibold">Message *</label>
                <textarea
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full text-gray-400 border border-gray-500/40 bg-black mt-3 py-2 px-4 rounded-xl"
                ></textarea>
              </div>

              <div className="mt-4">
                <CustomButton
                  title="Send Message"
                  icon="🚀"
                  className="hover-gradient-glow cursor-pointer rounded-lg px-6 bg-linear-to-r text-sm text-black from-blue-500 via-purple-500 to-teal-400 py-1 border-none outline-none transition-all duration-500 ease-in-out hover:-translate-y-2"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-7 w-full lg:w-[30%]">
        <div className="bg-[#171718] text-white shadow-[0_0_20px_rgba(59,130,246,0.7)] rounded-xl h-fit">
          <div className="mt-5 pl-6 pb-6">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-3">
              {contactData.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-blue-950 w-10 h-10 p-3 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.7)] animate-pulse duration-700">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-400">
                      {item.title}
                    </h3>
                    <p className="text-white cursor-pointer hover:text-blue-500 duration-300 text-sm">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#0f0f0f] border border-gray-500/20 text-white rounded-xl h-60 p-6">
          <h2 className="text-2xl font-bold mb-3">Resume</h2>
          <p className="text-sm font-semibold text-gray-400 leading-relaxed">
            Download my complete resume with detailed experience, education, and
            project <br /> information.
          </p>

          <div className="flex mt-7 bg-transparent rounded-lg border border-gray-500/20 py-2 hover:bg-purple-700 hover-text-black duration-300 cursor-pointer justify-center items-center gap-3 ">
            <p>
              <Download size={18} />
            </p>
            <button className="font-semibold cursor-pointer">
              Download Resume (PDF)
            </button>
          </div>
        </div>

        <div className="bg-[#0f0f0f] border border-gray-500/20 text-white rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-7">Follow Me</h2>

          <div className="p-3 rounded-lg flex items-start gap-3 mb-3 hover:bg-[#1b1919f6] cursor-pointer duration-300">
            <div className="bg-[#0e0e20] border-none text-lg font-bold outline-none p-3 rounded-xl">
              <Github size={19} />
            </div>
            <div className="text-[14px]">
              <h3 className="font-semibold text-white">Github</h3>
              <p className="text-gray-400 font-semibold">@temitope</p>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-3 rounded-lg p-3 hover:bg-[#1b1919f6] cursor-pointer duration-300">
            <div className="bg-[#0e0e20] border-none text-lg font-bold outline-none p-3 rounded-xl">
              <Linkedin size={19} />
            </div>
            <div className="text-[14px]">
              <h3 className="font-semibold text-white">Linkedin</h3>
              <p className="text-gray-400 font-semibold">@temitope</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

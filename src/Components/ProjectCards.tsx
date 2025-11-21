import { TrendingUp, User } from "lucide-react";

const ProjectCards = () => {
  return (
    <>
      <div className="mx-auto mt-17 bg-[#05060f] border border-gray-800 rounded-2xl p-6 shadow-lg overflow-hidden">
        <div className="max-w-5xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-white">
              E-Commerce Platform Redesign{" "}
              <span className="text-xs bg-blue-600 text-black font-bold px-3 py-0.5 rounded-full">
                Featured
              </span>
            </h2>
          </div>

          <div className="flex text-gray-400 mb-6 leading-relaxed">
            <p>
              Led the complete architectural overhaul of a high-traffic
              e-commerce platform, improving performance by 40% and reducing
              infrastructure costs by 30%.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {["React", "Node.js", "PostgreSQL", "Redis", "AWS"].map(
              (skill, index) => (
                <span
                  className="bg-green-500 border-none outline-none text-white px-3 rounded-full text-sm font-semibold"
                  key={index}
                >
                  {skill}
                </span>
              )
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={18} className="text-white" />
                <h3 className="text-white font-semibold">Key Metrics</h3>
              </div>
              <ul className="text-gray-400 font-semibold text-sm space-y-1 ml-6 list-disc">
                <li>2M+ daily users</li>
                <li>40% performance improvement</li>
                <li>99.9% uptime</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <User size={18} className="text-white" />
                <h3 className="text-white font-semibold">Role Highlights</h3>
              </div>
              <ul className="text-gray-400 font-semibold text-sm space-y-1 ml-6 list-disc">
                <li>Team Lead</li>
                <li>Architecture Design</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="text-white">
          <button>
            <Code2 className="bg-red-500" /> Code
          </button>
          <button>
            <ExternalLink /> Demo
          </button>
        </div> */}
      </div>
      <div className="mx-auto mt-8 bg-[#09090a] border-[0.1px] border-gray-600/20 rounded-2xl p-6 shadow-lg">
        <div className="max-w-5xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-white">
              Real-time Dashboard App
            </h2>
          </div>

          <div className="flex text-gray-400 mb-6 leading-relaxed">
            <p>
              Built a performant analytics dashboard using React and Vite.
              Integrated chart visualizations and responsive layout optimized
              for mobile and desktop.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {["Typescript", "React", "TailwindCSS", "Vite"].map(
              (skill, index) => (
                <span
                  className="bg-green-500 border-none outline-none text-white px-3 rounded-full text-sm font-semibold"
                  key={index}
                >
                  {skill}
                </span>
              )
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={18} className="text-white" />
                <h3 className="text-white font-semibold">Key Metrics</h3>
              </div>
              <ul className="text-gray-400 font-semibold text-sm space-y-1 ml-6 list-disc">
                <li>50M+ events/day</li>
                <li>Sub-second latency</li>
                <li> 15+ enterprise clients</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <User size={18} className="text-white" />
                <h3 className="text-white font-semibold">Role Highlights</h3>
              </div>
              <ul className="text-gray-400 font-semibold text-sm space-y-1 ml-6 list-disc">
                <li>Real-time Processing</li>
                <li>Scalable Architecture</li>
                <li>Data Visualization</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="text-white">
          <button>
            <Code2 className="bg-red-500" /> Code
          </button>
          <button>
            <ExternalLink /> Demo
          </button>
        </div> */}
      </div>

      <div className="mx-auto mt-8 bg-[#09090a] border-[0.1px] border-gray-60020 rounded-2xl p-6 shadow-lg">
        <div className="max-w-5xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-white">
              Open Source UI Library
            </h2>
          </div>

          <div className="flex text-gray-400 mb-6 leading-relaxed">
            <p>
              Created and maintain a popular React component library with 10k+
              GitHub stars, used by hundreds of companies worldwide.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {["React", "Typescript", "Storybook", "Jest", "Github Actions"].map(
              (skill, index) => (
                <span
                  className="bg-green-500 border-none outline-none text-white px-3 rounded-full text-sm font-semibold"
                  key={index}
                >
                  {skill}
                </span>
              )
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={18} className="text-white" />
                <h3 className="text-white font-semibold">Key Metrics</h3>
              </div>
              <ul className="text-gray-400 font-semibold text-sm space-y-1 ml-6 list-disc">
                <li> 10k+ GitHub stars</li>
                <li>500k+ weekly downloads</li>
                <li>200+ contributors</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <User size={18} className="text-white" />
                <h3 className="text-white font-semibold">Role Highlights</h3>
              </div>
              <ul className="text-gray-400 font-semibold text-sm space-y-1 ml-6 list-disc">
                <li>Open Source</li>
                <li>Community Building</li>
                <li>API Design</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="text-white">
          <button>
            <Code2 className="bg-red-500" /> Code
          </button>
          <button>
            <ExternalLink /> Demo
          </button>
        </div> */}
      </div>

      <div className="mx-auto mt-8 bg-[#09090a] border-[0.1px] border-gray-600/20 rounded-2xl p-6 shadow-lg">
        <div className="max-w-5xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-white">
              Microservices Migration
            </h2>
          </div>

          <div className="flex text-gray-400 mb-6 leading-relaxed">
            <p>
              Orchestrated the migration from monolithic architecture to
              microservices for a fintech startup, enabling 10x team scaling and
              faster feature delivery.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {["Kubernetes", "Docker", "gRPC", "PostgreSQL", "Istio"].map(
              (skill, index) => (
                <span
                  className="bg-green-500 border-none outline-none text-white px-3 rounded-full text-sm font-semibold"
                  key={index}
                >
                  {skill}
                </span>
              )
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={18} className="text-white" />
                <h3 className="text-white font-semibold">Key Metrics</h3>
              </div>
              <ul className="text-gray-400 text-sm font-semibold space-y-1 ml-6 list-disc">
                <li>10x team scaling</li>
                <li>50% faster deployments</li>
                <li>Zero downtime migration</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <User size={18} className="text-white" />
                <h3 className="text-white font-semibold">Role Highlights</h3>
              </div>
              <ul className="text-gray-400 text-sm font-semibold space-y-1 ml-6 list-disc">
                <li>System Architecture</li>
                <li>Team Coordination</li>
                <li>Migration Strategy</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="text-white">
          <button>
            <Code2 className="bg-red-500" /> Code
          </button>
          <button>
            <ExternalLink /> Demo
          </button>
        </div> */}
      </div>

      <div className="mx-auto mt-8 bg-[#09090a] border-[0.1px] border-gray-600/20 rounded-2xl p-6 shadow-lg">
        <div className="max-w-5xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-white">
              AI-Powered Code Review Tool
            </h2>
          </div>

          <div className="flex text-gray-400 mb-6 leading-relaxed">
            <p>
              Developed an intelligent code review assistant that identifies
              security vulnerabilities and suggests improvements, now used by
              500+ developers.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {["Python", "TensorFlow", "FastAPI", "React", "PostgreSQL"].map(
              (skill, index) => (
                <span
                  className="bg-green-500 border-none outline-none text-white px-3 rounded-full text-sm font-semibold"
                  key={index}
                >
                  {skill}
                </span>
              )
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={18} className="text-white" />
                <h3 className="text-white font-semibold">Key Metrics</h3>
              </div>
              <ul className="text-gray-400 text-sm font-semibold space-y-1 ml-6 list-disc">
                <li>500+ active users</li>
                <li>30% faster code reviews</li>
                <li>85% accuracy rate</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <User size={18} className="text-white" />
                <h3 className="text-white font-semibold">Role Highlights</h3>
              </div>
              <ul className="text-gray-400 text-sm font-semibold space-y-1 ml-6 list-disc">
                <li>Machine Learning</li>
                <li>Developer Tools</li>
                <li>Security Focus</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="text-white">
          <button>
            <Code2 className="bg-red-500" /> Code
          </button>
          <button>
            <ExternalLink /> Demo
          </button>
        </div> */}
      </div>

      <div className="mx-auto mt-8 bg-[#09090a] border-[0.1px] border-gray-600/20 rounded-2xl p-6 shadow-lg">
        <div className="max-w-5xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-white">
              Multi-tenant SaaS Platform
            </h2>
          </div>

          <div className="flex text-gray-400 mb-6 leading-relaxed">
            <p>
              Architected and built a scalable SaaS platform serving 100+
              enterprise clients with advanced security, compliance, and
              customization features.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {["Next.JS", "Node.js", "MongoDB", "Stripe", "AWS"].map(
              (skill, index) => (
                <span
                  className="bg-green-500 border-none outline-none text-white px-3 rounded-full text-sm font-semibold"
                  key={index}
                >
                  {skill}
                </span>
              )
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={18} className="text-white" />
                <h3 className="text-white font-semibold">Key Metrics</h3>
              </div>
              <ul className="text-gray-400 text-sm font-semibold space-y-1 ml-6 list-disc">
                <li>100+ enterprise clients</li>
                <li>$2M+ ARR</li>
                <li>SOC 2 compliant</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <User size={18} className="text-white" />
                <h3 className="text-white font-semibold">Role Highlights</h3>
              </div>
              <ul className="text-gray-400 font-semibold text-sm space-y-1 ml-6 list-disc">
                <li>SaaS Architecture</li>
                <li>Security & Compliance</li>
                <li>Business Impact</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="text-white">
          <button>
            <Code2 className="bg-red-500" /> Code
          </button>
          <button>
            <ExternalLink /> Demo
          </button>
        </div> */}
      </div>
    </>
  );
};

export default ProjectCards;

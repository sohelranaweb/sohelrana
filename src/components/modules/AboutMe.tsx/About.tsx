"use client";
import Link from "next/link";

const About = () => {
  return (
    <section className="container mx-auto px-4 py-20" id="about">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Image - 1/3 */}
        <div className="md:col-span-1 ">
          <img
            //     src="https://i.ibb.co.com/Pst6TmQs/sohel-rana.png"
            src="https://i.ibb.co.com/1t5Zzr1M/sohel-rana-portfolio.png"
            alt="Sohel Rana"
            className="w-full border border-white/20 rounded-full object-cover"
          />
        </div>

        {/* Content - 2/3 */}
        <div className="md:col-span-2 rounded-lg p-8 border border-white/10">
          <h2 className="text-4xl font-bold text-white mb-8">Who I Am</h2>
          <p className="text-gray-300 text-lg text-justify">
            Hi, I’m Sohel Rana, a passionate full-stack web developer focused on
            building scalable, responsive, and user-centered web applications. I
            work with modern technologies like React, Next.js, Redux Toolkit,
            Tailwind CSS, JavaScript (ES6+), and TypeScript on the frontend, and
            Node.js, Express.js, MongoDB, and PostgreSQL on the backend.
          </p>
          <br />
          <p className="text-gray-300 text-lg text-justify">
            I enjoy turning complex problems into clean, efficient solutions
            while maintaining performance, security, and code quality. One of my
            notable projects is SR-Health-Care, where I implemented
            authentication, role-based access control, secure APIs, and a smooth
            user experience to deliver a reliable healthcare management system.
            I’m always eager to learn, improve, and build products that make a
            real impact.
          </p>
          <br />
          <p className="text-gray-300 text-lg text-justify">
            When I’m not coding, I spend my time exploring new frameworks,
            experimenting with emerging technologies, and sharpening my skills
            to stay aligned with industry trends. I’m always learning and
            pushing myself to grow as a developer. Interested in working
            together or learning more about what I do? Take a look at my
            projects below.
          </p>

          {/* Project Show Button  */}
          <Link
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("projects");
              if (element) {
                const offsetPosition =
                  element.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
            className="relative mt-8 px-4 py-3 text-white font-semibold rounded-lg overflow-hidden group transition-all duration-300 hover:scale-105 inline-block"
          >
            {/* Slow spinning gradient border with subtle glow */}
            <span className="absolute -inset-px bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-border-slow blur-sm opacity-75"></span>
            <span className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-border-slow"></span>
            <span className="absolute inset-0.5 bg-[#0a0e27] rounded-[6px] z-10"></span>

            {/* Content */}
            <span className="relative z-20 flex items-center gap-2">
              Explore Projects
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;

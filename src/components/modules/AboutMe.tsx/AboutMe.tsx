import React from "react";

const AboutMe = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Image - 1/3 */}
        <div className="md:col-span-1">
          <img
            src="https://i.ibb.co.com/Pst6TmQs/sohel-rana.png"
            alt="Sohel Rana"
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Content - 2/3 */}
        <div className="md:col-span-2 bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
          <h2 className="text-4xl font-bold text-white mb-8">Get to know Me</h2>
          <p className="text-gray-300 text-lg text-justify">
            Hi, I’m Obidy Hasan, a passionate front-end developer skilled in
            creating dynamic, responsive, and visually appealing web
            applications. My expertise lies in technologies like React, Tailwind
            CSS, and JavaScript. I thrive on solving challenging problems and
            delivering seamless user experiences.
          </p>
          <br />
          <p className="text-gray-300 text-lg text-justify">
            My journey in web development began with a curiosity for building
            interactive websites, and it has grown into a deep love for crafting
            elegant and functional digital solutions. I’ve worked on exciting
            projects like 'BPL Dream 11,' where I combined creativity and
            technical knowledge to deliver a fantasy league platform.
          </p>
          <br />
          <p className="text-gray-300 text-lg text-justify">
            When I’m not coding, I enjoy playing video games, exploring new
            frameworks, and honing my skills to keep pace with industry trends.
            Want to collaborate or learn more about me? Check out my projects
            below!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

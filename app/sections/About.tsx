import { categorizedTechnologies } from "@/datas/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section
      className="flex flex-col w-full mx-0 xl:mx-[10%] lg:mx-[7%] md:mx-[7%] items-center min-h-screen py-20 lg:py-32"
      id="about"
    >
      {/* Title */}
      <header className="flex flex-row gap-4 justify-start items-center font-b mb-10 w-full">
        <div className="flex flex-row gap-4 justify-center items-center font-medium">
          <span className="font-medium text-lg sm:text-2xl font-idgrotesk">
            01. About Me
          </span>
          <div className="w-[5%] lg:w-36 border-b-[1px] border-b-border-color"></div>
        </div>
      </header>

      {/* Content */}
      <div className="flex flex-col lg:flex-row w-full items-start justify-start gap-8 lg:gap-12">
        
        {/* Technologies I work with - LEFT SIDE */}
        <div className="w-full lg:w-[35%] flex flex-col p-4 lg:p-0 order-2 lg:order-1" data-aos="fade-right">
          <h3 className="text-xl sm:text-2xl font-normal font-display text-gray-900 dark:text-gray-100 mb-6">
            Technologies I work with
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 w-full">
            {categorizedTechnologies.map((cat, idx) => (
              <div key={idx} className="flex flex-col gap-3 bg-gray-50 dark:bg-gray-800/20 px-4 py-3 rounded-xl border border-gray-100 dark:border-gray-800/50">
                <h4 className="text-base font-bold text-gray-800 dark:text-gray-200">{cat.category}</h4>
                <div className="grid grid-cols-2 gap-2">
                  {cat.items.map((tech, i) => (
                    <a
                      key={i}
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-center p-1.5 bg-white dark:bg-gray-800 rounded-lg hover:bg-[#E88D67]/20 dark:hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md cursor-pointer border border-gray-100 dark:border-gray-700"
                    >
                      <Image
                        src={tech.iconLink}
                        alt={tech.name}
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                      />
                      <span className="absolute -top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 z-10 font-medium whitespace-nowrap">
                        {tech.name}
                      </span>
                    </a>
                  ))}
                </div>
                <p className="text-[11px] text-gray-600 dark:text-gray-400 mt-auto pt-1 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Who am I? - RIGHT SIDE */}
        <div className="flex flex-col w-full lg:w-[45%] p-4 lg:p-0 order-1 lg:order-2" data-aos="fade-left">
          <div className="flex flex-col gap-6 sticky top-24">
            <h3 className="text-3xl sm:text-4xl font-bold font-display text-primary-color dark:text-white mb-2">
              Who am I?
            </h3>
            <article className="leading-relaxed text-base md:text-lg text-gray-700 dark:text-gray-300">
              I'm Lixin Liu, a Master's student in Electronic Information at{" "}
              <a href="https://www.tsinghua.edu.cn/en/" target="_blank" rel="noopener noreferrer" className="text-[#E88D67] font-bold hover:underline">Tsinghua University</a> (Rank: 1/30, GPA: 4.0/4.0). I hold a B.S. in Digital Media Technology from <a href="https://english.bupt.edu.cn/" target="_blank" rel="noopener noreferrer" className="text-[#E88D67] font-bold hover:underline">BUPT</a> (Rank: 2/55, GPA: 3.75/4.0). My English proficiency is certified with IELTS 7.0 and CET-6 547.
              <br />
              <br />
              Based in Shenzhen, I specialize in <strong className="text-[#E88D67]">full-stack development</strong>, <strong className="text-[#E88D67]">E-Learning platforms</strong>, and <strong className="text-[#E88D67]">AI applications</strong>. I am highly proficient in building end-to-end web solutions, seamlessly handling front-end interfaces, back-end logic, databases, and RESTful APIs. My expertise spans Python, Java, web technologies, as well as <strong className="text-[#E88D67]">Unity</strong> for <strong className="text-[#E88D67]">AR/VR</strong> development and creative design. With a strong foundation in <strong className="text-[#E88D67]">Machine Learning</strong> and <strong className="text-[#E88D67]">Data Analysis</strong>, I excel at integrating <strong className="text-[#E88D67]">LLMs/MLLMs</strong> into practical, high-performance digital experiences.
              <br />
              <br />
              Beyond coding, I actively champion cultural preservation. I founded a student Intangible Cultural Heritage association and foster cross-cultural exchange by performing the <strong className="text-[#E88D67]">Ruan</strong> alongside international students.
            </article>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

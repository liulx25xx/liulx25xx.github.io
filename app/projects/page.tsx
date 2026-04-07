import { projects, childrenProjects } from "@/datas/data";
import Card from "../components/Card";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="flex flex-col xl:mx-[10%] lg:mx-[7%] mx-0 md:mx-[7%] my-24 mt-24  py-8 gap-16">
      <div className=" flex items-center gap-2 sm:gap-8">
        <Link
          href={"/"}
          className=" p-2 bg-[#FBEDDD] rounded-full text-black flex w-min"
        >
          <IoMdArrowRoundBack size={25} />
        </Link>
        <h1 className=" font-medium text-4xl sm:text-3xl">Projects</h1>
      </div>
      {projects.map(
        (project, id) =>
          project && (
            <Card
              key={id}
              id={id}
              name={project?.name}
              description={project?.description}
              image={project?.image}
              liveLink={project?.liveLink}
              githubLink={project?.githubLink}
              stacks={project?.stacks}
              type={project?.type}
            />
          ),
      )}

      {/* Selected Works Grid (Projects without specific links) */}
      <div className="w-full px-4 sm:px-6 md:px-0 mt-8">
        <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white mb-8 text-center lg:text-left">
          Projects for Children
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {childrenProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#FBEDDD]/30 dark:bg-gray-800/30 rounded-xl overflow-hidden border border-transparent dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all group"
              data-aos="fade-up"
            >
              {/* Image Box */}
              <div className="relative w-full h-48 sm:h-56 bg-transparent dark:bg-gray-800 overflow-hidden flex items-center justify-center p-4">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Box */}
              <div className="p-6 flex flex-col flex-grow">
                <h6 className="text-sm font-grotesk text-secondary-color-3 mb-1">
                  {project.type}
                </h6>
                <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white mb-3">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stacks Tag */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stacks.map((stack, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium bg-white dark:bg-gray-800 text-secondary-color-3 rounded shadow-sm border border-gray-100 dark:border-gray-700"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

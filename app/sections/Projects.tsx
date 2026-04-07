import { projects, childrenProjects } from "@/datas/data";
import Card from "../components/Card";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Projects = () => {
  return (
    <section
      className="flex flex-col mx-0 xl:mx-[10%] lg:mx-[7%] md:mx-[7%] py-28 pb-48 lg:pt-48"
      id="projects"
    >
      <header className="flex flex-row gap-4  justify-start lg:justify-end items-center font-b">
        <div className="flex flex-row gap-4 justify-center lg:justify-end items-center font-medium">
          <span className=" font-medium text-lg sm:text-2xl font-idgrotesk">
            03. Things I've Built
          </span>
          <div className="w-[5%] lg:w-36 border-b-[1px] border-b-border-color"></div>
        </div>
      </header>
      <div className="flex flex-col gap-24 mt-10">
        {projects
          .slice(0, 9)
          .map(
            (project, id) =>
              project && (
                <Card
                  key={id}
                  id={id}
                  name={project?.name}
                  description={project?.description}
                  image={project?.image}
                  githubLink={project?.githubLink}
                  // @ts-ignore
                  loomLink={project?.loomLink}
                  liveLink={project?.liveLink}
                  stacks={project?.stacks}
                  type={project?.type}
                />
              ),
          )}
        {/* Selected Works Grid (Projects without specific links) */}
        <div className="w-full px-4 sm:px-6 md:px-12 mt-8">
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

        <div className="flex justify-center items-center mt-12">
          <Button asChild variant={"link"}>
            <Link
              href={"/projects"}
              className=" flex font-medium border-b border-transparent  transition-all "
            >
              <span className="">View All Projects</span>

              <span>
                <IoArrowForward size={20} className=" text-secondary-color-3" />
              </span>
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
};
export default Projects;

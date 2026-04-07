import { activities } from "@/datas/data";

const Activities = () => {
  return (
    <section
      className="flex flex-col mx-0 xl:mx-[10%] lg:mx-[7%] md:mx-[7%] py-28 pb-48 lg:pt-48"
      id="activities"
    >
      <header className="flex flex-row gap-4 justify-start items-center font-b mb-10">
        <div className="flex flex-row gap-4 justify-center items-center font-medium">
          <span className="font-medium text-lg sm:text-2xl font-idgrotesk">
            04. Activities I've Organized
          </span>
          <div className="w-[5%] lg:w-36 border-b-[1px] border-b-border-color"></div>
        </div>
      </header>

      <div className="flex flex-col gap-8 mt-10">
        {activities.map((activity, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 p-6 rounded-xl bg-[#FBEDDD]/50 dark:bg-gray-800/30 shadow-sm border border-transparent dark:border-gray-700/50 transition-all hover:shadow-md"
            data-aos="fade-up"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-primary-color dark:text-white">
                {activity.title}
              </h3>
              <span className="text-sm font-medium text-secondary-color-3 font-idgrotesk whitespace-nowrap">
                {activity.date}
              </span>
            </div>
            <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300">
              {activity.organization}
            </h4>
            <p className="mt-2 text-base md:text-lg leading-relaxed">
              {activity.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
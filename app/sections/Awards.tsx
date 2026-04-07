"use client";
import React from "react";
import { awards } from "@/datas/data";

const Awards = () => {
  return (
    <section
      className="flex flex-col mx-0 xl:mx-[10%] lg:mx-[7%] md:mx-[7%] items-center py-20 lg:py-32"
      id="awards"
      data-aos="fade-up"
    >
      {/* Title */}
      <header className="flex flex-row gap-4 justify-start items-center font-b mb-10 w-full">
        <div className="flex flex-row gap-4 justify-center items-center font-medium">
          <span className="font-medium text-lg sm:text-2xl font-idgrotesk">
            05. Awards I won
          </span>
          <div className="w-[5%] lg:w-36 border-b-[1px] border-b-border-color"></div>
        </div>
      </header>

      {/* Content */}
      <div className="w-full flex flex-col gap-6">
        {awards.map((award, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-4 md:items-center justify-between p-6 bg-gray-50 dark:bg-gray-800/20 rounded-xl border border-gray-100 dark:border-gray-800/50 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col gap-2 w-full md:w-3/4">
              <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white">
                {award.title}
              </h3>
              <span className="text-sm font-medium text-secondary-color-3">
                {award.organization}
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {award.description}
              </p>
            </div>
            <div className="w-full md:w-1/4 md:text-right">
              <span className="text-base font-semibold text-gray-500 font-idgrotesk">
                {award.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
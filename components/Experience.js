import userData from "@constants/data";
import React from "react";

export default function Experience() {
  return (
    <section className="bg-[#F4F3EE]} dark:bg-[#1F1F1F]">
      <div className="max-w-6xl mx-auto h-48 bg-[#F4F3EE] dark:bg-[#1F1F1F]">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Experience
        </h1>
      </div>
      <div className="bg-[#F4F3EE] dark:bg-[#1F1F1F] -mt-4">
        <div className="grid grid-cols-1 dark:bg-[#1F1F1F] max-w-xl mx-auto pt-20">
          {/* Experience card */}
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-[#00A39B] rounded-full relative z-10">
                    <div className="w-4 h-4 bg-[#00A39B] rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-[#E7E4DA] dark:bg-[#474747] rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ title, desc, year, company, companyLink }) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-[#FFFFFF] dark:bg-[#3D3D3D] z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl font-bold text-[#D7D2C1] dark:text-[#474747]">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <a href={companyLink} className="text-gray-400">
        {company}
      </a>
      <p className="text-gray-600 dark:text-gray-300 my-2">{desc}</p>
    </div>
  );
};


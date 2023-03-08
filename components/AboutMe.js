import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="bg-[#f4f3ee] dark:bg-[#1F1F1F]">
      <div className="max-w-6xl mx-auto h-48 bg-[#f4f3ee] dark:bg-[#1F1F1F]">
        <h1 className=" text-5xl md:text-8xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-[#f4f3ee] -mt-10 dark:bg-[#1F1F1F]">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-3xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}. Currently working on{" "}
            <a
              className="bg-[#517B57] dark:bg-[#F3F5F7] rounded-md px-2 py-1 text-[#F4F3EE] dark:text-[#6C5B4B]"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#f4f3ee] dark:bg-[#1F1F1F] px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact Me!
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any sort help / enquiry, shoot me a{" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                 e-mail
                </a>{" "}
                and I'll get back as soon as possible!
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I'm looking for a job currently, If you see me as a good fit,
                check my{" "}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  CV/Resume
                </a>{" "}
                and I'd love to work for you.
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center ">
                <a
                  href={userData.socialLinks.facebook}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Facebook
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.twitter}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Twitter
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.instagram}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                    Instagram
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

            <h1 className="bg-[#517B57] dark:bg-[#F3F7F3] text-3xl rounded-md px-2 py-1 inline-block font-bold text-[#FFFFFF] dark:text-[#483A33]">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                className="h-20 w-20 mx-4 my-4"
              />

              <img
              src="https://tse1.mm.bing.net/th?id=OIP.ADqbtRNCtoGE-1bvvoSQdgHaE8&pid=Api&P=0"
              className="h-20 w-30 mx-4 my-4"
              />
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.Uilr4jt8dw8tPN6lxISq1wHaGu&pid=Api&P=0"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.zfG8FW1Z61TDDwJjGR2T-AHaIU&pid=Api&P=0"
                className="h-20 w-20 mx-4 my-4"
              />
           

<img
                src="https://tse2.mm.bing.net/th?id=OIP.Ue2JZ0sSt-1MEZJNdi9IfwHaIi&pid=Api&P=0
                "
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.RBEEEh9FaW1dsFVobvP28wHaHa&pid=Api&P=0"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.v2Yc6P3hpLB6o22BYOCftAAAAA&pid=Api&P=0"
                className="h-20 w-20 mx-4 my-4"
              />

<img
                src="https://tse2.mm.bing.net/th?id=OIP.yepaGaLfhC__XZi9oPDZagAAAA&pid=Api&P=0
                "
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.b45WH7HHExZq88GsFxtNDAHaF7&pid=Api&P=0"
                className="h-20 w-20 mx-4 my-4"
              />
             




            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";

// Reusable component for a card with a GitHub link
const GitHubCard = ({ href, imageSrc, title, index }) => {
  return (
    <a href={href} className="github-card w-full sm:w-80 h-96 object-cover md:mx-2">
      <div className="relative h-full overflow-hidden flex flex-col justify-center items-center">
        <img
          src={imageSrc}
          alt={title}
          className="transform hover:scale-125 transition duration-2000 ease-out"
        />
        <h1 className="absolute top-5 left-4 text-gray-50 font-bold text-lg bg-[#517B57] rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-5 left-5 text-gray-50 font-bold text-xl">
          {index.toString().padStart(2, "0")}
        </h1>
      </div>
      <style jsx>{`
        .github-card img {
          height: 70%;
          max-height: 300px;
        }
      `}</style>
    </a>
  );
};


export default function FavouriteProjects() {
  return (
    <div className="bg-[#f4f3ee] -mt-40 dark:bg-[#1F1F1F]">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:my-20 lg:my-0">
          <h1 className="text-6xl lg:text-7xl max-w-lg font-bold text-gray-500 my-20 md:my-10 md:text-[#221E1B] dark:text-[#FFFFFF] text-center-left ">
            Favorite Projects
          </h1>
        </header>

        {/* Grid starts here */}
        <div className="flex flex-wrap justify-center gap-10 md:justify-start lg:-mt-100 pb-40">
          {/* GitHub cards */}
          <GitHubCard
            href="https://github.com/jdurham38/discord-bot"
            imageSrc="/DcBot.png"
            title="Discord Music Bot"
            index={1}
            className="w-full sm:w-80 h-96 object-cover md:mx-2"
          />
          <GitHubCard
            href="https://github.com/jdurham38/Java-Bug-Tracker"
            imageSrc="/bugtracker.png"
            title="Java Bug Tracking Management System"
            index={2}
            className="w-full sm:w-80 h-96 object-cover md:mx-2"
          />
          <GitHubCard
            href="https://github.com/jdurham38/Dabloon-Token/"
            imageSrc="/dabloontoken.png"
            title="Dabloon Token"
            index={3}
            className="w-full sm:w-80 h-96 object-cover md:mx-2"
          />
        </div>
        {/* Grid ends here */}

        {/* Call to Action starts here */}
        <div className="flex flex-col justify-center items-center py-20 text-center bg-[#f4f3ee] dark:bg-[#1F1F1F]">
          <h1 className="text-3xl font-bold text-gray-500 dark:text-white mb-4">
            Want to see more of my projects?
          </h1>
          <Link href="https://github.com/jdurham38?tab=repositories" passHref={true} legacyBehavior={true}>
            <a className="bg-[#517B57] text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-80 transition duration-300">
              View All Projects
            </a>
          </Link>
        </div>
        {/* Call to Action ends here */}
      </div>
    </div>
  );
}

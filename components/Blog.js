import React, { useState } from "react";

// Define the userData array
const userData = [
  {
    title: "Tile 1",
    content: "Content for Tile 1",
    category: "personal life",
    date: "June 1, 2023",
  },
  {
    title: "Tile 2",
    content: "Content for Tile 2",
    category: "tech",
    date: "June 3, 2023",
  },
  {
    title: "Tile 3",
    content: "Content for Tile 3",
    category: "outdoors",
    date: "June 5, 2023",
  },
  // Add more blog posts with title, content, category, and date properties
];

export default function Blog() {
  const [selectedTile, setSelectedTile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredData, setFilteredData] = useState(userData);

  const handleTileClick = (tileId) => {
    setSelectedTile(tileId === selectedTile ? null : tileId);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    filterData(event.target.value, selectedCategories);
  };

  const handleCategoryChange = (category) => {
    const newSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newSelectedCategories);
    filterData(searchTerm, newSelectedCategories);
  };

  const filterData = (searchTerm, categories) => {
    if (categories.length === 0 && searchTerm === "") {
      // If no categories selected and no search term entered, show all blogs
      setFilteredData(userData);
    } else {
      const filteredResults = userData.filter((tile) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const lowerCaseCategory = tile.category.toLowerCase();

        return (
          (categories.length === 0 || categories.includes(lowerCaseCategory)) &&
          (tile.title.toLowerCase().includes(lowerCaseSearchTerm) ||
            tile.content.toLowerCase().includes(lowerCaseSearchTerm) ||
            tile.date.toLowerCase().includes(lowerCaseSearchTerm))
        );
      });

      setFilteredData(filteredResults);
    }
  };

  const categoryColors = {
    "personal life": "#FCE7F3",
    tech: "#FCEAC1",
    outdoors: "#CAF3FC",
    // Add more category colors as needed
  };

  return (
    <section className="bg-[#F4F3EE] dark:bg-[#1F1F1F]">
      <div className="max-w-6xl mx-auto h-48 bg-[#F4F3EE] dark:bg-[#1F1F1F]">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left flex justify-center items-center">
          Blog
        </h1>
      </div>
      <div className="bg-[#F4F3EE] dark:bg-[#1F1F1F] -mt-4">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-semibold mb-4">Example Blog Post Title</h2>

          <div className="flex items-center mb-4">
            <label className="mr-2">
              <input
                type="checkbox"
                checked={selectedCategories.includes("personal life")}
                onChange={() => handleCategoryChange("personal life")}
              />
              Personal Life
            </label>
            <label className="mr-2">
              <input
                type="checkbox"
                checked={selectedCategories.includes("tech")}
                onChange={() => handleCategoryChange("tech")}
              />
              Tech
            </label>
            <label className="mr-2">
              <input
                type="checkbox"
                checked={selectedCategories.includes("outdoors")}
                onChange={() => handleCategoryChange("outdoors")}
              />
              Outdoors
            </label>
            {/* Add more category checkboxes */}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {filteredData.map((tile, index) => (
              <div
                key={index}
                className={`p-4 border rounded`}
                style={{
                  width: "300px",
                  height: "170px",
                  backgroundColor: categoryColors[tile.category.toLowerCase()],
                }}
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => handleTileClick(index)}
                >
                  <h3 className="text-lg font-semibold">{tile.title}</h3>
                  <div className="text-sm text-gray-500">{tile.category}</div>
                  <div className="text-xs text-gray-500">{tile.date}</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transition-transform ${
                      selectedTile === index ? "transform rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10 14l6-6H4l6 6z" clipRule="evenodd" />
                  </svg>
                </div>
                {selectedTile === index && (
                  <div className="mt-4">{tile.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

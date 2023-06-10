import React, { useEffect, useState } from "react";





//add functionality to the cat when clicked
//add random actions the cat does like lay down



export default function CatAnimation() {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);
  const catWidth = 40; // Width of the cat element
  const boundaryPadding = 460; // Padding to prevent the cat from crossing the boundaries
  const [showOptions, setShowOptions] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [isPetting, setIsPetting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isWaiting) {
        setPosition((prevPosition) => {
          const newPosition = prevPosition + direction;
          const maxPosition = window.innerWidth - catWidth - boundaryPadding;

          if (newPosition >= maxPosition) {
            setDirection(-1);
            return maxPosition;
          } else if (newPosition <= boundaryPadding) {
            setDirection(1);
            return boundaryPadding;
          } else {
            return newPosition;
          }
        });
      }
    }, 10);

    return () => clearInterval(interval);
  }, [direction, isWaiting]);

  useEffect(() => {
    const handleResize = () => {
      const maxPosition = window.innerWidth - catWidth - boundaryPadding;

      if (position > maxPosition) {
        setPosition(maxPosition);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [position]);

  const handleClick = () => {
    setShowOptions(true);
    setIsWaiting(true);
    setIsPetting(false); // Reset the isPetting state when options appear
    setTimeout(() => {
      setIsWaiting(false);
      setShowOptions(false);
    }, 10000);
  };

  const handlePet = () => {
    console.log("Pet button clicked"); // Added console log statement
    setIsWaiting(false);
    setShowOptions(false);
    setIsPetting(true); // Set isPetting to true when the user pets the cat
  };

  const handleGiveTreat = () => {
    setIsWaiting(false);
    setShowOptions(false);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "60px",
        left: `${position}px`,
        fontSize: "24px",
        animation: "catWalk 1s infinite",
        zIndex: "9999",
      }}
      onClick={handleClick}
    >
      {isPetting ? "😺" : "🐱"} {/* Display the appropriate cat emoji based on the petting state */}
      {showOptions && (
        <div
          style={{
            position: "absolute",
            top: "30px",
            left: "-20px",
            padding: "5px",
            background: "white",
            borderRadius: "5px",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            minWidth: "120px",
            color: "#333",
          }}
        >
          <div>
            <p style={{ margin: 0, marginBottom: "5px", fontSize: "14px" }}>Choose an option:</p>
            <div>
              <button onClick={handlePet} style={{ margin: "5px", fontSize: "14px", padding: "3px 10px" }}>
                1. Pet
              </button>
              <span style={{ margin: "0 5px", fontSize: "14px" }}>|</span>
              <button onClick={handleGiveTreat} style={{ margin: "5px", fontSize: "14px", padding: "3px 10px" }}>
                2. Give Treat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// import React from "react";
// import NMIXXimg from "../../../../Data/Girl/assets/NMIXX.jpg";
// import BTSimg from "../../../../Data/Boy/assets/BTS.jpg";
// import IUimg from "../../../../Data/Soloists/assets/IU.jpg";

// // Utility function to shuffle an array
// const shuffleArray = (array) => {
//   return array.sort(() => Math.random() - 0.5);
// };

// const Background = () => {
//   const images = [NMIXXimg, BTSimg, IUimg];
//   const columns = 100; // Number of columns in the grid
//   const rows = 12; // Number of rows in the grid

//   const imageCount = columns * rows;
//   const repeatedImages = Array(imageCount).fill().flatMap(() => shuffleArray(images)).slice(0, imageCount);

//   return (
//     <div className="relative overflow-hidden h-screen w-screen">
//       <div className="absolute inset-0 overflow-hidden">
//         <div 
//           className="grid grid-cols-12 grid-rows-12 gap-0 w-[2400px] h-[2400px] animate-moving-collage"
//         >
//           {repeatedImages.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Collage Image ${index}`}
//               className="w-[200px] h-[200px] object-cover"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Background;

import React from "react";
import NMIXXimg from "../../../../Data/Girl/assets/NMIXX/NMIXX.jpg";
import BTSimg from "../../../../Data/Boy/assets/BTS/BTS.jpg";
import IUimg from "../../../../Data/Soloists/assets/IU/IU.jpg";

// Utility function to shuffle an array
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Background = () => {
  const images = [NMIXXimg, BTSimg, IUimg];
  const columns = 100; // Number of columns in the grid
  const rows = 12; // Number of rows in the grid

  const imageCount = columns * rows;
  const repeatedImages = Array(imageCount).fill().flatMap(() => shuffleArray(images)).slice(0, imageCount);

  const cellSize = 200;
  const gridWidth = columns * cellSize;
  const gridHeight = rows * cellSize;

  return (
    <div className="relative overflow-hidden h-screen w-screen">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="grid gap-0 animate-moving-collage"
          style={{
            gridTemplateColumns: `repeat(${columns}, ${cellSize}px)`,
            gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
            width: `${gridWidth}px`,
            height: `${gridHeight}px`,
          }}
        >
          {repeatedImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Collage Image ${index}`}
              className="w-[200px] h-[200px] object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Background;

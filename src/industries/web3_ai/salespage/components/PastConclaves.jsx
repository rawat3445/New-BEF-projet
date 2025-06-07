import React, { useState } from "react";
import img1 from "../assets/PastConclaves/img1.png";
import img2 from "../assets/PastConclaves/img2.png";
import img3 from "../assets/PastConclaves/img3.png";
import img4 from "../assets/PastConclaves/img4.png";

const images = [img1, img2, img3, img4];

const PastConclaves = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);

  const openLightbox = (img) => {
    setCurrentImg(img);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImg(null);
  };

  return (
    <section
      className="bg-gradient-to-r from-orange-100 via-white to-green-100 border border-green-200 rounded-lg py-10 px-6 shadow-sm"
      id="past"
    >
      <div className="flex justify-center items-center mb-4 space-x-3">
        {/* <span className="text-4xl">🎞️</span> */}
        <h2 className="text-3xl font-semibold text-green-900 tracking-wide border-b-4 border-green-400 pb-1">
          Glimpse from Past Conclaves
        </h2>
      </div>
      <p className="text-center text-gray-700 mb-8 italic max-w-lg mx-auto">
        <span className="text-2xl">❝ </span> Every snapshot captures a moment —
        a story of inspiration, learning, and networking from our past
        conclaves. <span className="text-2xl">❞</span>
      </p>
      <div className="flex justify-center flex-wrap gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="w-60 h-40 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => openLightbox(img)}
          >
            <img
              src={img}
              alt={`Past Conclave ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={currentImg}
            alt="Enlarged past conclave"
            className="max-w-full max-h-full rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-red-500"
            aria-label="Close image"
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

export default PastConclaves;

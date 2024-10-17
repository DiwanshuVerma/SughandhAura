// src/Gallery.jsx
import React from 'react';

const images = [
  'src/assets/gallery1.jpg',
  'src/assets/gallery2.jpg',
  'src/assets/gallery3.jpg',
  'src/assets/gallery4.jpg',
  'src/assets/gallery5.jpg',
  'src/assets/gallery6.jpg',
  'src/assets/gallery7.jpg',
  'src/assets/gallery8.jpg',
  'src/assets/gallery9.jpg',
  'src/assets/gallery10.jpg',
  'src/assets/gallery11.jpg',
  'src/assets/gallery12.jpg',
];

export const Gallery = () => {
  return (
    <div className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
    {images.map((image, index) => (
      <div
        key={index}
        className={`overflow-hidden rounded-lg shadow-2xl ${
          index % 2 === 0 ? 'h-72' : 'h-80'
        }`}
      >
        <img
          src={image}
          alt={`Perfume ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
  );
};


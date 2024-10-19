// src/Gallery.jsx
import React, { useEffect, useState } from 'react';

const images = [
  '/assets/gallery1.jpg',
  '/assets/gallery2.jpg',
  '/assets/gallery3.jpg',
  '/assets/gallery4.jpg',
  '/assets/gallery5.jpg',
  '/assets/gallery6.jpg',
  '/assets/gallery7.jpg',
  '/assets/gallery8.jpg',
  '/assets/gallery9.jpg',
  '/assets/gallery10.jpg',
  '/assets/gallery11.jpg',
  '/assets/gallery12.jpg',
];



export const Gallery = () => {
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false)

      return () => clearTimeout(timer)
    }, 3000);
  }, [])

  return (
    <div className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

      {showLoading && (
      <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white'>Loading...</p>
      )}
      
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


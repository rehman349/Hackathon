import React from "react";
import Image from "next/image";

const Imagegrid = () => {
  const images = [
    { src: "/images/livingroom.jpg", alt: "Desk setup" },
    { src: "/images/dining.jpg", alt: "Dining area" },
    { src: "/images/bedroom.jpg", alt: "Bedroom setup" },
    { src: "/images/kitchen.jpg", alt: "Kitchen setup" },
    { src: "/images/chair.jpg", alt: "Chair with table" },
    { src: "/images/frame.jpg", alt: "Decorative frame" },
  ];

  return (
    <div className="p-8 text-center font-sans">
      <h1 className="text-2xl font-bold mb-8">
        Share your setup with{" "}
        <span className="text-orange-500">#FuniroFurniture</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400} // Adjust width
              height={300} // Adjust height
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Imagegrid;

  
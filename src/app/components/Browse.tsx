import Image from 'next/image';

const BrowseTheRange = () => {
  const categories = [
    { title: 'Dining', image: '/dining.jpg', alt: 'Dining Area' },
    { title: 'Living', image: '/living.jpg', alt: 'Living Room' },
    { title: 'Bedroom', image: '/bedroom.jpg', alt: 'Bedroom' },
  ];

  return (
    <div className="bg-gray-100 py-16 text-center">
      <h1 className="text-2xl font-bold text-gray-800">Browse The Range</h1>
      <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden w-64 transition-transform transform hover:scale-105"
          >
            <div className="relative w-full h-48">
              <Image
                src={category.image}
                alt={category.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 py-4">{category.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseTheRange;


import React from 'react';

const SpaWellnessSection = () => {
  const sections = [
    {
      title: 'Relax Spa',
      img: 'https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Replace with your image
      hoverText:
        'Leather detail shoulder contrasting colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket.',
    },
    {
      title: 'Wellness',
      img: 'https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Replace with your image
      hoverText:
        'Leather detail shoulder contrasting colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket.',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      {sections.map((section, index) => (
        <div
          key={index}
          className="relative group w-full md:w-1/2 h-1/2 md:h-full overflow-hidden"
        >
          <img
            src={section.img}
            alt={section.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-60 transition duration-500" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-4">{section.title}</h2>
            {section.hoverText && (
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm md:text-base">
                {section.hoverText}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpaWellnessSection;

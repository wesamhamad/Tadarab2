import React, { useRef } from 'react';

const Hero = ({ heading, message }) => {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    const offset = -260; // Adjust the offset value as needed
    const sectionTop = sectionRef.current.getBoundingClientRect().top;
    window.scrollTo({
      top: sectionTop + window.pageYOffset - offset,
      behavior: 'smooth',
    });
  };

  return (
    <div className="custom-img-container">
      <div className="content">
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]" />
        <div className="p-5 text-white z-[2] mt-[3rem]">
          <h2 className="text-5xl font-bold">{heading}</h2>
          <p className="py-5 text-xl">{message}</p>
          <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow" onClick={scrollToSection}>
            <div className="absolute inset-0 w-3 bg-gray-400 bg-opacity-50 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">الـمزيد</span>
          </button>
        </div>
        <div ref={sectionRef} />
      </div>
    </div>
  );
};

export default Hero;

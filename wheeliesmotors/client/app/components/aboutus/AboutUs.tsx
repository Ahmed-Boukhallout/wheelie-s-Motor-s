import React, { useRef, useEffect, useState } from 'react';

const AboutUs = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const aboutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 } // Only consider visible when 50% of the element is in the viewport
    );

    if (aboutRef.current) {
      aboutObserver.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        aboutObserver.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div ref={aboutRef} className="flex flex-wrap">
        <div
          className={`w-full md:w-1/2 pr-4 mb-4 md:mb-0 transition-transform duration-1000 ${
            isVisible ? 'transform translate-x-0' : 'transform -translate-x-full'
          }`}
        >
          <img
            src="/images/aboutuspic.png"
            className="w-full rounded-md"
            alt="Banner image"
          />
        </div>
        <div
          className={`w-full md:w-1/2 transition-transform duration-1000 ${
            isVisible ? 'transform translate-x-0' : 'transform translate-x-full'
          }`}
        >
          <h2 className="text-2xl font-bold mb-[-3.5rem] text-black text-center mt-24">About Us</h2>
          <p className="text-gray-700 mt-32">
            We, dummy company, situated at area, city, state run our business
            with experience of supplying quality scooter & bikes. All our bikes
            & scooters are sourced from highly reputable suppliers and always
            checked to make sure they achieve the highest standards that we
            have set ourselves over the years. The success has simply been
            down to quality vehicles at great prices all backed up by second to
            none customer care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

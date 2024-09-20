import React, { useState, useEffect, useRef } from "react";
import { FaUsers, FaBuilding, FaChartLine } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

function ClientCounter() {
  const [startCount, setStartCount] = useState(false); // State to control when to start counting
  const sectionRef = useRef(null); // Reference for the section

  useEffect(() => {
    Aos.init({
      duration: 1200,
    });

    // Create IntersectionObserver to detect when section comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStartCount(true); // Trigger counting
          observer.unobserve(entry.target); // Unobserve once it's triggered
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Cleanup on unmount
      }
    };
  }, []);

  const counters = [
    {
      icon: <FaUsers />,
      count: 100, // Target value
      label: "Satisfied Clients",
      suffix: "+",
    },
    {
      icon: <FaChartLine />,
      count: 23, // Target value
      label: "Years of Growth",
      suffix: "",
    },
    {
      icon: <FaBuilding />,
      count: 15, // Target value
      label: "Global Offices",
      suffix: "+",
    },
  ];

  return (
    <section
      ref={sectionRef} // Set the section reference
      className="p-6 bg-gradient-to-r to-orange-400 from-blue-700 text-background mt-12 w-[90%] mx-auto overflow-hidden rounded-md"
    >
      <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3 max-md:grid-cols-1">
        {counters.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-start m-4 lg:m-6 overflow-hidden"
            data-aos="fade-up"
          >
            <span className="text-6xl mx-auto mb-4 max-md:text-8xl text-primary bg-gray-200 w-20 h-20 flex justify-center items-center rounded-md text-blue-700 max-sm:text-5xl">
              {item.icon}
            </span>
            <p className="text-4xl font-bold leading-none lg:text-6xl">
              {/* Trigger CountUp only when the section is in view */}
              {startCount && (
                <CountUp start={0} end={item.count} duration={6} />
              )}
              {item.suffix}
            </p>
            <p className="text-sm sm:text-base">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientCounter;
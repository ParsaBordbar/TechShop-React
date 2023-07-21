import React, { useEffect, useRef } from 'react';

const CustomScroll: React.FC = () => {
  const customScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (customScrollRef.current) {
        const scrollTop = window.scrollY;
        const documentHeight = document.body.clientHeight;
        const windowHeight = window.innerHeight;
        const scrollPercent = scrollTop / (documentHeight - windowHeight);
        const scrollPercentRounded = Math.round(scrollPercent * 100);
        customScrollRef.current.style.width = `${scrollPercentRounded}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div id="scroll" ref={customScrollRef} />;
};

export default CustomScroll;

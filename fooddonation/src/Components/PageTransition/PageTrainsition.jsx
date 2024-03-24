import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PageTransition = (WrappedComponent) => {
  return function PageTransitionComponent(props) {
    const slider = useRef(null);
    const component = useRef(null);

    useEffect(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        slider.current,
        { y: '-100%' },
        { y: '0%', duration: 1.2}
      );
    }, []);

    return (
      <div className="main">
        <div className="slider" ref={slider}></div>
        <div ref={component} className='wrap'>
        <WrappedComponent {...props} />
        </div>
      </div>
    );
  };
};

export default PageTransition;

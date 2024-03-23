import { MutableRefObject, useEffect, useState } from 'react';

export const useContainerDimensions = (
  myRef: MutableRefObject<HTMLDivElement | HTMLButtonElement | null | undefined>
) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const getDimensions = () => {
      if (!myRef || !myRef.current) {
        return dimensions;
      }

      return {
        width: myRef.current.offsetWidth,
        height: myRef.current.offsetHeight,
      };
    };

    const handleResize = () => {
      setDimensions(getDimensions());
    };

    if (myRef.current) {
      setDimensions(getDimensions());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [myRef]);

  return dimensions;
};

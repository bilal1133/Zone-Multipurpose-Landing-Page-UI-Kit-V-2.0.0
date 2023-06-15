import { useEffect, useState, useCallback } from 'react';

// ----------------------------------------------------------------------

type ContainerProps = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
};

export default function useBoundingClientRect(containerRef: React.RefObject<HTMLDivElement>) {
  const [container, setContainer] = useState<ContainerProps | null>(null);

  const handleResize = useCallback(() => {
    if (containerRef.current) {
      const value = containerRef.current.getBoundingClientRect();
      setContainer(value);
    }
  }, [containerRef]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return container;
}

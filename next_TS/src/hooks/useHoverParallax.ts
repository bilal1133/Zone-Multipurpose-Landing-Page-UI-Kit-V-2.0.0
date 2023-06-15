/* eslint-disable react-hooks/rules-of-hooks */
import { useSpring, useTransform, MotionValue } from 'framer-motion';

// ----------------------------------------------------------------------

type ReturnType = {
  offsetX: (force: number) => MotionValue<number>;
  offsetY: (force: number) => MotionValue<number>;
  onMouseMoveHandler: (event: React.MouseEvent<HTMLInputElement>) => void;
  onMouseLeaveHandler: VoidFunction;
};

function useHoverParallax(stiffness = 250, damping = 20): ReturnType {
  const x = useSpring(0, {
    stiffness,
    damping,
  });
  const y = useSpring(0, {
    stiffness,
    damping,
  });

  const offsetX = (force: number) => useTransform(x, (event) => event / force);
  const offsetY = (force: number) => useTransform(y, (event) => event / force);

  const onMouseMoveHandler = (event: React.MouseEvent<HTMLInputElement>) => {
    x.set(event.clientX);
    y.set(event.clientY);
  };

  const onMouseLeaveHandler = () => {
    x.set(0);
    y.set(0);
  };

  return {
    offsetX,
    offsetY,
    onMouseMoveHandler,
    onMouseLeaveHandler,
  };
}

export default useHoverParallax;

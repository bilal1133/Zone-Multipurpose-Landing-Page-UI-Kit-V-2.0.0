import { useState, useEffect } from 'react';

// ----------------------------------------------------------------------

export default function useCountdown(date: Date) {
  const [countdown, setCountdown] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const interval = setInterval(() => setNewTime(), 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setNewTime = () => {
    const startTime = date;
    const endTime = new Date();
    const distanceToNow = startTime.valueOf() - endTime.valueOf();

    const getDays = Math.floor(distanceToNow / (1000 * 60 * 60 * 24));

    const getHours = `0${Math.floor(
      (distanceToNow % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )}`.slice(-2);

    const getMinutes = `0${Math.floor((distanceToNow % (1000 * 60 * 60)) / (1000 * 60))}`.slice(-2);

    const getSeconds = `0${Math.floor((distanceToNow % (1000 * 60)) / 1000)}`.slice(-2);

    setCountdown({
      days: getDays.toString() || '000',
      hours: getHours || '00',
      minutes: getMinutes || '00',
      seconds: getSeconds || '00',
    });
  };

  return countdown;
}

// Usage
// const countdown = useCountdown(new Date('07/07/2022 21:30'));

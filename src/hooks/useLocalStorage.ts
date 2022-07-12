import { useState, useEffect } from 'react';

// ----------------------------------------------------------------------

export default function useLocalStorage(key: string, defaultValue: any) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const storedValue = window.localStorage.getItem(key);
    if (storedValue !== null) {
      setValue(JSON.parse(storedValue));
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

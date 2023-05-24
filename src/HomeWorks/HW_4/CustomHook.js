import { useState, useEffect } from 'react';

function CustomHook(initialValue) {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    console.log('Custom hook was called');
    return () => {
      console.log('Custom hook cleanup');
    };
  }, []);

  return [state, setState];
}

export default CustomHook;

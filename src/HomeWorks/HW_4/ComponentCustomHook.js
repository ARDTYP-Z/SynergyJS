import React from 'react';
import useCustomHook from './CustomHook';

function ComponentCustomHook() {
  const [value, setValue] = useCustomHook('initial value');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Value: {value}</p>
    </div>
  );
}

export default ComponentCustomHook;

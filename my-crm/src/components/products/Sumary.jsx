import React from 'react';
import { useSelector } from 'react-redux';


function DisplayFields() {
  const data = useSelector((state) => state.product);


  return (
    <div>
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <strong>{key}: </strong>
          {value}
        </div>
      ))}
    </div>
  );
}

export default DisplayFields;

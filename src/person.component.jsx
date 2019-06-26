import React from 'react';

const Person = ({ person }) => {
  console.log('rendering');
  return (
    <div>
      <p>{person.name}</p>
      <p>{person.age}</p>
    </div>
  );
};

export default React.memo(Person);

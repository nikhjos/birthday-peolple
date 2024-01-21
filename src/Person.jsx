import React from "react";

const Person = ({ id, name, age, image }) => {
  return (
    <div className="person">
      <img src={image} alt={name} />

      <div>
        <h3>{name} </h3>
        <p>{age} years</p>
      </div>
      <p className="id">{id} </p>
    </div>
  );
};

export default Person;

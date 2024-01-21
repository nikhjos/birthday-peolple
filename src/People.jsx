import React from "react";
import Person from "./Person";
import data from "./data";

const People = ({ people, setPeople }) => {
  return (
    <div className="people">
      <h1>{people.length} birthday today </h1>
      {people.map((person) => {
        return <Person {...person} key={person.id} />;
      })}

      {people.length === 0 ? (
        <button type="button" onClick={() => setPeople(data)}>
          fetch all
        </button>
      ) : (
        <button type="button" onClick={() => setPeople([])}>
          clear all
        </button>
      )}
    </div>
  );
};

export default People;

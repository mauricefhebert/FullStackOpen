import React from "react";

const PersonList = props => {
  return (
    <>
      {props.filteredPersons.map(person => (
        <div key={person.id}>
          <p>Name: {person.name}</p>
          <p>Phone: {person.number}</p>
        </div>
      ))}
    </>
  );
};

export default PersonList;

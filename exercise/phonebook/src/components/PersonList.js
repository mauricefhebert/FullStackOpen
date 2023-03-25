import React from "react";
import personsService from "../services/persons";

const PersonList = ({ filteredPersons, persons, setPersons }) => {
  const handleDelete = async id => {
    const person = await personsService.getById(id);
    const confirmation = window.confirm(`Delete ${person.name}`);
    if (confirmation) {
      personsService.deleteById(id);
    }
  };

  return (
    <>
      {filteredPersons.map(({ id, name, number }) => (
        <div key={id}>
          <p>Name: {name}</p>
          <p>Phone: {number}</p>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default PersonList;

import { React, useState } from "react";
import personsService from "../services/persons";

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (persons.find(x => x.name === newName)) {
      alert(
        `The name ${newName} is already in the application please use another name`
      );
      return;
    }
    const newPerson = { name: newName, number: newPhone };
    personsService.create(newPerson).then(returnPerson => {
      setPersons(persons.concat(returnPerson));
      setNewName("");
      setNewPhone("");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:{" "}
        <input value={newName} onChange={e => setNewName(e.target.value)} />
      </div>
      <div>
        phone:{" "}
        <input value={newPhone} onChange={e => setNewPhone(e.target.value)} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;

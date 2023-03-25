import { React, useState } from "react";

const PersonForm = props => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (props.persons.find(x => x.name === newName)) {
      alert(
        `The name ${newName} is already in the application please use another name`
      );
      return;
    }
    const temp = [...props.persons];
    const x = { name: newName, phone: newPhone };
    temp.push(x);
    props.setPersons(temp);
    setNewName("");
    setNewPhone("");
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

import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/db").then(response => {
      setPersons(response.data.persons);
    });
  }, []);

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
      <h2>Add a person</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <PersonList filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;

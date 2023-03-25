import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await personsService.getAll();
      setPersons(data);
    };
    fetchData();
  }, []);

  const filteredPersons = persons.filter(({ name }) =>
    name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
      <h2>Add a person</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <PersonList
        filteredPersons={filteredPersons}
        persons={persons}
        setPersons={setPersons}
      />
    </div>
  );
};

export default App;

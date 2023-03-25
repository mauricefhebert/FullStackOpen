const Hello = props => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const family = [
    { name: "Maurice", age: 26 },
    { name: "Caroline", age: 24 },
    { name: "Mokka", age: 6 },
    { name: "Luna", age: 5 },
  ];
  const friends = ["Sam", "Lee"];

  return (
    <div>
      <p>
        {family[0].name} {family[0].age}
      </p>
      <p>
        {family[1].name} {family[1].age}
      </p>
      <p>
        {family[2].name} {family[2].age}
      </p>
      <p>
        {family[3].name} {family[3].age}
      </p>
      <p>{friends}</p>
    </div>
  );
};

export default App;

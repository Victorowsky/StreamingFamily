import Party from "./Party";
const Netflix = () => {
  const color = "#e50914";

  const data = [
    {
      type: "Netflix",
      name: "Poszukiwanie członków",
      users: 3,
      maxUsers: 5,
      id: 1,
    },
    {
      type: "Netflix",
      name: "Poszukiwanie członków",
      users: 3,
      maxUsers: 5,
      id: 1,
    },
    {
      type: "Netflix",
      name: "Poszukiwanie członków",
      users: 3,
      maxUsers: 5,
      id: 1,
    },
  ];


  const list = data.map((party) => (
    <Party
      key={party.id}
      name={party.name}
      users={party.users}
      maxUsers={party.maxUsers}
      color={color}
    />
  ));

  return (
    <div className="partiesContainer">
      <h1>Netflix Families</h1>
      <div className="Parties">{list}</div>
    </div>
  );
};

export default Netflix;

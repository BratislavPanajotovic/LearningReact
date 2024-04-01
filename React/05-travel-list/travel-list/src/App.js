export default function App() {
  return (
    <div>
      <Logo /> <Form /> <PackingList /> <Stats />{" "}
    </div>
  );
}
let initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function Logo() {
  return <h1>Far Away</h1>;
}

function Form() {
  return (
    <form className="add-form">
      <h3>What do you need for your trip ?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return <li>{item.description}</li>;
}

function Stats() {
  return (
    <footer className="stats">
      You have X items on your list, and you already packed X
    </footer>
  );
}

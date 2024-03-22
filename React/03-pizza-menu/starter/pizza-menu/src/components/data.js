const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}
function Menu() {
  return (
    <div>
      {" "}
      <h2>Our menu</h2>
      <Pizza
        name="Pizza Spinnaci"
        ingredients="Tomato,mozarella,spinachmand ricotta cheese"
        photoName="../pizzas/spinaci.jpg"
        price="10"
      />
      <Pizza
        name="Funghi"
        ingredients="Tomato,mushrooms"
        price="12"
        photoName="../pizzas/funghi.jpg"
      />
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  else alert("Sorry we're closed");

  return (
    <footer>{new Date().toLocaleTimeString()}. We're currently open!</footer>
  );
}
function Pizza(props) {
  return (
    <div>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h2>{props.name}</h2> <p>{props.ingredients}</p>
      </div>
    </div>
  );
}

export { Header, Menu, Footer, Pizza };

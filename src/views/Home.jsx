import React from "react";
import PizzaCard from "../components/PizzaCard";
import { useCart } from "../contexts/CartContext";

const Home = () => {
  const { pizzaVarieties } = useCart();

  return (
    <div className="baseCenter">
      <h1>¡Pizería Mamma Mia!</h1>
      <h2>¡Tenemos las mejores pizzas que podrás encontrar!</h2>
      <div className="pizza-list">
        {pizzaVarieties.map((pizza, index) => (
          <PizzaCard
            key={index}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            img={pizza.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
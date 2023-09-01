import React from "react";
import UserCard from "./UserCard";
import CarCard from "./CarCard";

//Usuários
const user1: User = {
  id: 1,
  name: "sheldon",
  age: 24,
  email: "sheldon@email.com",
};
const user2: UserWithoutEmail = { id: 2, name: "sheldon", age: 24 };

//Carros
const car1: Car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "Silver",
  price: 25000,
};

const car2: CarWithSelectedProps = {
  brand: "Honda",
  model: "Civic",
  year: 2021,
};

//Produtos

const product1 = {
    id: 1,
    name: 'Cup',
    price: 9.99,
    description: 'Product 1',
    category: 'Kitchen'
}

const product2 = {
    id: 2,
    name: 'Dish',
    price: 4.99,
    description: 'Product 2',
    category: 'Kitchen'
}

const SecondComp = () => {
  return (
    <>
      <div className="secondComp">
        <div>
          <h2>Exercício 1 ✅</h2>
          <UserCard title="User 1" user={user1} />
          <UserCard title="User 2" user={user2} />
        </div>
        <div>
          <h2>Exercício 2 ✅</h2>
          <CarCard title="Car 1" car={car1} />
          <CarCard title="Car 2" car={car2} />
        </div>
        <div>
          <h2>Exercício 3</h2>
        </div>
      </div>
    </>
  );
};

export default SecondComp;

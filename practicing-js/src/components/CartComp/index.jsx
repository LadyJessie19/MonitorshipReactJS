import React, { useState } from 'react';
import {BookContainer, Button} from "./styled"

const Ecommerce = () => {
  const [cart, setCart] = useState([]);
  
  const books = [
    { id: 1, title: 'Livro 1' },
    { id: 2, title: 'Livro 2' },
    { id: 3, title: 'Livro 3' },
    { id: 4, title: 'Livro 4' },
    { id: 5, title: 'Livro 5' },
    { id: 6, title: 'Livro 6' }
  ];

  const addToCart = (book) => {
    const existingItem = cart.find(item => item.id === book.id);

    if (existingItem) {
      setCart(cart.map(item => item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  };

  const removeFromCart = (book) => {
    const existingItem = cart.find(item => item.id === book.id);

    if (existingItem && existingItem.quantity > 1) {
      setCart(cart.map(item => item.id === book.id ? { ...item, quantity: item.quantity - 1 } : item));
    } else {
      setCart(cart.filter(item => item.id !== book.id));
    }
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <h2>E-commerce de Livros</h2>
      <p>Carrinho: {totalItems} itens</p>

      <div className="books-list">
        <BookContainer>
        {books.map(book => (
          <div key={book.id} className="book">
            <h3>{book.title}</h3>

            <Button onClick={() => addToCart(book)}>Adicionar ao Carrinho</Button>
            
            {cart.find(item => item.id === book.id) && (
              <div className="quantity">
                <Button onClick={() => removeFromCart(book)}> - </Button>
                {cart.find(item => item.id === book.id).quantity}
                <Button onClick={() => addToCart(book)}> + </Button>
              </div>
            )}
          </div>
        ))}
        </BookContainer>
      </div>
    </div>
  );
};

export default Ecommerce;

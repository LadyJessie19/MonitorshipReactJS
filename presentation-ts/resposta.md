import React, { useState, useEffect } from 'react';
import './App.css';

interface Quote {
  _id: string;
  tags: string[];
  content: string;
  author: string;
  authorSlug: string;
  length: number;
}

function App() {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => setQuote(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {quote ? (
          <div>
            <p>{quote.content}</p>
            <p>- {quote.author}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </header>
    </div>
  );
}

export default App;

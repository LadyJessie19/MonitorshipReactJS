import React from 'react';

function Button(props) {
  return (
    <div>
      <button style={{ backgroundColor: props.cor }}>
        {props.texto}
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Meus Botões Personalizados</h1>
      <Button cor="red" texto="Clique em mim!" />
      <br />
      <Button cor="blue" texto="Não clique em mim!" />
      <br />
      <Button cor="yellow" texto="Perigo!" />
      <br />
      <Button cor="pink" texto="Feliz Aniversário" />
    </div>
  );
}

export default App;

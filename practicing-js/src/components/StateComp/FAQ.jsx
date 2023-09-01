import React, { useState } from "react";

const FAQ = () => {
  const [first, setFirst] = useState(false);
  const [sign, setSign] = useState('+')

  const clicked = () => {
    setFirst(!first)

    if(sign === '-'){
        setSign('+')
    } else{
        setSign('-')
    }
  }

  return (
    <>
      <h1>FAQ</h1>

      <span>Como posso me inscrever?</span>
      <button onClick={clicked}>{sign}</button>

        {first ? <p>Basta clicar no botão, doido</p> : ''}

        {/* {first && <p>Basta clicar no botão</p>}

        {first ?? ''} */}
    </>
  );
};

export default FAQ;

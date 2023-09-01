import React, { useState } from "react";
import RealModal from "./RealModal";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const print = () => {
    alert("Agora funfa!");
  };

  return (
    <>
      <h1>Modal</h1>

      <button onClick={print}>Imprimir</button>

      <button onClick={() => setIsOpen(!isOpen)}>Abrir/fechar o modal</button>

      {isOpen ? <RealModal setIsOpen={setIsOpen}/> : " "}
    </>
  );
};

export default Modal;
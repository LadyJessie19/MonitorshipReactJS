import React from "react";
import Card from "./Card";
import Buttons from './Buttons'

const PropsComp = () => {
  return (
    <>
      <h2>PropsComp</h2>

      <div>

      Imagine que você está construindo um quebra-cabeça, onde cada peça é um componente no React. 
      
      Agora, pense que cada peça desse quebra-cabeça pode ter diferentes cores, tamanhos ou comportamentos, certo? 
      
      As "props" são como pequenas instruções que você dá para cada peça do quebra-cabeça, para que elas sejam únicas.

      Props são como os pedaços de informação que você dá a cada componente para personalizá-los de maneira única, assim como dar instruções específicas a cada peça do quebra-cabeça para que ele se encaixe perfeitamente no seu design React.

      </div>

      <ul>
        <Card name="Jessica" />
        <Card name="João" />
        <Card name="Juliana" />
        <li>Ana Maria</li>
        <li>Ana Maria</li>
      </ul>
      <Buttons />
    </>
  );
};

export default PropsComp;

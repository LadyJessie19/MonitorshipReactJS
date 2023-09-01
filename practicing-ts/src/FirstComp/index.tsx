import React from "react";
import MessageBox from "./MessageBox";

const FirstComp = () => {
  return (
    <>
      <MessageBox type="success" message="Tudo certo" />
      <MessageBox type="error" message="Tudo errado" />
      <MessageBox type="warning" message="Apareceu um problema" />

      <MessageBox type="waiting" message="Aguardando..." />
    </>
  );
};

export default FirstComp;

import React from "react"

//Steps
/* 
1 - Criar o comp
2 - criar o type alias e a tipagem de props
3 - variavel let
4 - switch case para os tipos 
5 - Criar o obj de estilo
6 - retorno do comp
7 - importar no app

// extras 
-- tarefas status são mais de um
-- mostrar o que vai acontecer se um valor a mais for add
*/

type MessageType = 'success' | 'warning' | 'error' | 'waiting'

type MixedLiteral = 'frase' | 121 | false;

type NumberLiteral = 1 | 2 | 3 | 4;

type BooleanTaskStatus = true | false;

type TaskStatus = 'doing' | 'paused' | 'done';

interface IProps {
    type: MessageType;
    message: string;
}

type Props = {
    type: MessageType,
    message: string
}

const MessageBox:React.FC<Props> = ({type, message}) => {
  let backgroundColor:string;

  switch(type){
    case "success":
      backgroundColor = 'green';
      break;
    case "error":
      backgroundColor = 'red';
      break;
    case "warning":
      backgroundColor = 'yellow';
      break;
    case "waiting":
      backgroundColor = 'lightblue';
      break;
    default:
      backgroundColor = 'gray';
  }

  const styleMessageBox = {
    backgroundColor,
    padding: '10px',
    borderRadius: '4px', 
    margin: '10px'
  }

  return (
    <div style={styleMessageBox}>
        <p>{message || "Alguma msg"}</p>
    </div>
  )
}

export default MessageBox
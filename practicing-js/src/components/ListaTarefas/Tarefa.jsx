import React from 'react'

const Tarefa = ({id, texto, isFinished, remove, toggleTask}) => {
  return (
    <>
        <span onClick={() => toggleTask(id)}>{isFinished ? '[x]' : '[ ]'}</span>
        <span>  </span>
        <span>{texto}</span>
        <span>  </span>
        <span onClick={() => remove(id)}>&times;</span>
    </>
  )
}

export default Tarefa
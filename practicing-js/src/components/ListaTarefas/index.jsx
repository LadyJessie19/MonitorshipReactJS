import React,{ useState } from 'react'
import { tarefas } from './tarefas'
import Tarefa from './Tarefa'

const ListaTarefas = () => {
    const [tasks, setTasks] = useState(tarefas)

    const remove = (id) => {
        setTasks((tasks) => tasks.filter(tarefa => tarefa.id !== id))
    }

    const toggleTask = (id) => {
        setTasks(oldTasks => oldTasks.map(task => task.id === id ? { ...task, isFinished: !task.isFinished } : task))
    }

  return (
    <>
        <h1>Lista de Tarefas</h1>
        {tasks.map((item) => (
            <li><Tarefa key={item.id} id={item.id} texto={item.texto} isFinished={item.isFinished} remove={remove}toggleTask={toggleTask}/></li>
        ))}
    </>
  )
}

export default ListaTarefas
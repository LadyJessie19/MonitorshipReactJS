import React from 'react'

interface Props {
    title:string
    user:UserType
}

const AnswerCard = ({title, user}:Props) => {
  return (
    <>
        <h2>{title}</h2>
        <ul>
            <li>id: {user.id}</li>
            <li>name: {user.name}</li>
            <li>age: {user.age}</li>
            {user.email && <li>email: {user.email}</li>}
        </ul>
    </>
  )
}

export default AnswerCard
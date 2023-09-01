import React from 'react'

const Table = ({children}) => {
  return (
    <>
        <h1>TABELA</h1>

        <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {children}
        </tbody>
        </table>
    </>
  )
}

export default Table
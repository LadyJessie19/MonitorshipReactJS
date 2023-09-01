import React from 'react'

const TableRow = ({name, age, email}) => {
  return (
    <>
        <tr>
            <td>{name}</td>
            <td>{age}</td>
            <td>{email}</td>
        </tr>
    </>
  )
}

export default TableRow
import React from 'react'
import { useState } from 'react'

const Quote = () => {

    const [name, setName] = useState('Jéssica')

  return (
    <>
        {name}
        <button onClick={() => setName('Jonathan')}>Mudar nome</button>
    </>
  )
}

export default Quote
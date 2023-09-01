import React from 'react'
import Table from './Table'
import TableRow from './TableRow'

const ChildrenComp = () => {
  return (
    <>
      <div>

      Imagine que você está construindo uma casa de blocos de brinquedo. Cada andar da casa é um componente no React. Agora, imagine que você quer colocar coisas dentro de cada andar, como móveis ou decorações. O "children" é como o espaço dentro de cada andar onde você pode colocar essas coisas extras.

      Children é uma forma de colocar elementos ou componentes dentro de outros componentes no React, permitindo criar componentes mais flexíveis e reutilizáveis. 
        
      É como decorar os diferentes andares da sua casa de blocos com móveis e brinquedos!
      
      </div>
        <Table>
                <TableRow name="Angela" age="24" email="angela@gmail.com" />
                <TableRow name="Daniel" age="34" email="daniel@gmail.com" />
                <TableRow name="Aline" age="44" email="aline@gmail.com" />
      </Table>
    </>
  )
}

export default ChildrenComp


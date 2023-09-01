import React from 'react'

interface Props {
    title:string
    car: CarType
}

const CarCard = ({title, car}:Props) => {
  return (
        <>
            <h2>{title}</h2>
        <ul>
            <li>brand: {car.brand}</li>
            <li>model: {car.model}</li>
            <li>year: {car.year}</li>
            {car.color && <li>color: {car.color}</li>}
            {car.price && <li>price: {car.price}</li>}
        </ul>
        </>
    )
}

export default CarCard

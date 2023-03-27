import React from 'react'
import Cards from '../Cards/Cards'

const Main = () => {

  return (
    <div>
      <div className='container d-flex justify-content-evenly flex-wrap'>
        
        <Cards imagen = "../imagen/crema.jpg" titulo="Nomre del producto" descripcion="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        
        <Cards imagen = "../imagen/crema.jpg" titulo="Nomre del producto" descripcion="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        
        <Cards imagen = "../imagen/crema.jpg" titulo="Nomre del producto" descripcion="Some quick example text to build on the card title and make up the bulk of the card's content."/>

        <Cards imagen = "../imagen/crema.jpg" titulo="Nomre del producto" descripcion="Some quick example text to build on the card title and make up the bulk of the card's content."/>

        <Cards imagen = "../imagen/crema.jpg" titulo="Nomre del producto" descripcion="Some quick example text to build on the card title and make up the bulk of the card's content."/>

        <Cards imagen = "../imagen/crema.jpg" titulo="Nomre del producto" descripcion="Some quick example text to build on the card title and make up the bulk of the card's content."/>

      </div>
    </div>
  )
}

export default Main
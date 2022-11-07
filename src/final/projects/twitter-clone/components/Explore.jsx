import React from 'react'
import { Link } from 'react-router-dom'

const Explore = () => {
  return (
    <div className='row row-cols-1'>
        <h4 className='m-4'>Explore</h4>
        <Link className='p-2 bg-green text-light text-decoration-none m-1' to="2023">#2023</Link>
        <Link className='p-2 bg-green text-light text-decoration-none m-1' to="porsche">#Porsche</Link>
        <Link className='p-2 bg-green text-light text-decoration-none m-1' to="hotchocolate">#HotChocolate</Link>
        <Link className='p-2 bg-green text-light text-decoration-none m-1' to="vegan">#Vegan</Link>
        <Link className='p-2 bg-green text-light text-decoration-none m-1' to="dogs">#Dogs</Link>
        <Link className='p-2 bg-green text-light text-decoration-none m-1' to="cats">#Cats</Link>
    
    </div>
  )
}

export default Explore
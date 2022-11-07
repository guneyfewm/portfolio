import React from 'react'
import {Link} from 'react-router-dom'
const Widgets = () => {
  return (
    <div className='d-flex justify-content-center m-5'>
      <div className='d-flex flex-column border border-1 p-3'>
      <h4>Hot topics</h4>
      <Link className='bg-green text-decoration-none px-4 py-2 text-white rounded-1 fs-5 my-3' to="explore/2023">#2023</Link>
      <Link className='bg-green text-decoration-none px-4 py-2 text-white rounded-1 fs-5 my-3' to="explore/dogs">#Dogs</Link>
      <Link className='bg-green text-decoration-none px-4 py-2 text-white rounded-1 fs-5 my-3' to="explore/porsche">#Porsche</Link>
        
      </div>

    
    </div>
  )
}

export default Widgets
import React from 'react'
import {Link} from 'react-router-dom'
import {Bag, X} from 'react-bootstrap-icons'


const HamburgerBar = ({hamburger,setHamburger}) => {
  return (<div className='position-absolute bg-white start-0 top-0 p-5 py-5' style={{height:"80vh",boxShadow: "57px -1px 216px 900px rgba(0,0,0,0.76)"}}>
    <Link className='fs-5 mt-2 px-3 py-2 d-flex align-items-center px btn btn-dark' to="/projects/shopbest">Home</Link>
    <Link className='fs-5 mt-2 px-3 py-2 d-flex align-items-center px btn btn-dark' to="/projects/shopbest/catalog">Catalog</Link>
    <Link className='fs-5 mt-2 px-3 py-2 d-flex align-items-center px btn btn-danger' to="/projects/shopbest/cart">Cart<Bag className='ms-3'></Bag></Link>
    <button className='d-md-none border-0 px-1 btn fs-3' onClick={()=>setHamburger(!hamburger)}><X/></button>

    </div> )
}

export default HamburgerBar
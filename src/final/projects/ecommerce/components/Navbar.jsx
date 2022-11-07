import React, { useState } from 'react'
import {Link,Outlet} from 'react-router-dom'
import {Bag,List} from 'react-bootstrap-icons'
import HamburgerBar from './HamburgerBar';

const Navbar = () => {
  const [isHamburgerOn,setIsHamburgerOn] = useState(false);

  return (<>
    <div className='p-3 z-index-1 hamburger bg-light d-flex justify-content-between position-sticky '>
        
        <div className='d-none d-flex d-md-block px-4 py-2'>
        <Link className='fs-4 me-2 px-5 py-2 rounded-0 btn btn-dark' to="/projects/shopbest">Home</Link>
        <Link className='fs-4 ms-2 px-5 py-2 rounded-0 btn btn-dark' to="/projects/shopbest/catalog">Catalog</Link>
        </div>
        <button className='d-md-none border-0 px-1 btn fs-3' onClick={()=>setIsHamburgerOn(!isHamburgerOn)}><List/></button>
        {isHamburgerOn? <HamburgerBar hamburger = {isHamburgerOn} setHamburger={setIsHamburgerOn}></HamburgerBar>:""}
<div>
<Link className='fs-5 d-none d-md-block mt-2 px-3 py-2 d-flex align-items-center px btn btn-danger' to="/projects/shopbest/cart">Cart<Bag className='ms-3'></Bag></Link>

</div>
    </div>
        <Outlet></Outlet>
        </>
  )
}

export default Navbar
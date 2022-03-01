import React from 'react'
import {Link} from 'react-router-dom'

function Navigation1() {
  const cartstyle = {
    background: '#fecaca',
    display: 'flex',
    padding: '6px 12px',
    borderRadius: '35px'
  }

  
    return (
        <>
          <nav className="container mx-auto flex items-center justify-between py-4 max-w-screen-xl" >
            
                <Link to="/">
                   <img  style={{height:50}} src="img/logo.png" alt="logo"  />
                </Link>
                <ul className='flex items-center '>
                  <li className='ml-6'><Link to='/'>Home</Link></li>
                  <li className='ml-6'><Link to='/Products'>Products</Link></li>
                  <li className='ml-6'>
                    <Link to='cart'>
                        <div style={cartstyle}>
                         
                          <img src="img/cart.png" alt="cart-logo" />
                        </div>
                    </Link>
                  </li>
                </ul>
            
          </nav>
        </>
    )
}

export default Navigation1


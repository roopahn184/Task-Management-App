import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className='nav'>
            <div className="nav-left">
                <a className='brand' href="#">Tasks</a>
            </div>
            <div className="nav-right">
                <div className="tabs">
                    <a href="">Task Management App</a>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header
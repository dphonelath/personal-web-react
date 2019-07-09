import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <header>
                <Link to='/' >Home</Link>
                <Link to='/products' >Products</Link>
            </header>
        </div>
    )
}

export default Navigation
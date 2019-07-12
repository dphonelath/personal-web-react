import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <header>
                <Link to='/' >Home</Link>
                <Link to='/products' >Projects</Link>
                <Link to='#'>Blog</Link>
                <Link to='#'>Timeline</Link>
            </header>
        </div>
    )
}

export default Navigation
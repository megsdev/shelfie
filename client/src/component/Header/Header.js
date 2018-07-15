import React from 'react'
import '../../App.css';
import {Link} from 'react-router-dom'



export default function Header()  {
        return (
            <div className="header">
                <h2>SHELFIE</h2>
                <Link to='/'><button className="red-btn">Dashboard</button></Link>
                <Link to='/add'><button className="red-btn">Add Inventory</button></Link>
            </div>
        )
}
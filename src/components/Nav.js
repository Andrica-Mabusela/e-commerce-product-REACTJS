import React, { useContext } from 'react'
import logo from '../images/logo.svg'
import cartIcon from '../images/icon-cart.svg'
import avatarIcon from '../images/image-avatar.png'
import Basket from './Basket'
import { basketContext } from '../App'


const Nav = ({basketOpener}) => {

    const data = useContext(basketContext)

    return (
        <div className="nav-wrapper">

        <nav>
            <div className="menu-wrapper">

                <div className="navbar-brand">
                    <a href="#">
                        <img src={logo} alt="Not Found" />
                    </a>
                </div>

                    <ul>
                        <li>
                            <a href="#">Collections</a>
                        </li>
                        <li>
                            <a href="#">Men</a>
                        </li>
                        <li>
                            <a href="#">Women</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>

            <div>
                <div onClick={basketOpener} className="cart">
                    <img src={cartIcon} alt="Not Found"  />
                    <span>{ data.counter }</span>
                </div>
                <img src={avatarIcon} alt="Not Found" />
            </div>
        </nav>
        { data.isBasketOpen ? <Basket /> : '' }
        
        </div>
    )
}

export default Nav

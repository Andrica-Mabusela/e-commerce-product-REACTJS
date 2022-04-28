import React, { useContext } from 'react'
import product1Thumbnail from '../images/image-product-1-thumbnail.jpg'
import { basketContext } from '../App'

const Basket = ({ count, total }) => {

    const data = useContext(basketContext)
    console.log(data.counter)
    console.log(data.total)
    return (
        <div className="basket">
            <h3>Cart</h3>
            <div>
                <div>
                    <img src={product1Thumbnail} alt="Not Found" />
                </div>
                <div>
                    <p>Fall Limited Edition Sneakers $125.00 x { data.counter }  <span>${ data.total }.00</span></p>
                    <span>
                        <i className=""></i>
                    </span>
                </div>
            </div>
            <button>checkout</button>
        </div>
    )
}

export default Basket

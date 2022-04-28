import React, { useState, useRef } from 'react'
import Modal from './Modal'
import Overlay from './Overlay'

// product images 
import product1Img from '../images/image-product-1.jpg'
import product2Img from '../images/image-product-2.jpg'
import product3Img from '../images/image-product-3.jpg'
import product4Img from '../images/image-product-4.jpg'

// product images thumbnails 
import product1Thumbnail from '../images/image-product-1-thumbnail.jpg'
import product2Thumbnail from '../images/image-product-2-thumbnail.jpg'
import product3Thumbnail from '../images/image-product-3-thumbnail.jpg'
import product4Thumbnail from '../images/image-product-4-thumbnail.jpg'

// icons
import cartIcon from '../images/icon-cart.svg'
import minusIcon from '../images/icon-minus.svg'
import plusIcon from '../images/icon-plus.svg'

const Main = ({ setter }) => {

    const [count, setCount] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [initialImage, setInitialImage] = useState(0)
    const [total, setTotal] = useState(0)

    function increment(){
        setCount(prevCount => prevCount + 1)
    }

    function decrement(){
        if (count == 0) {
            setCount(0)
        } else {
            setCount(prevCount => prevCount - 1)
        }
    }

    function setValues(imageNumber) {
        setInitialImage(imageNumber)
        setIsModalOpen(!isModalOpen)
    }

    function closeModal(){
        setIsModalOpen(false)
    }

    return (
        <>
        <main>
            <section>
                <div className="product">
                    <img src={product1Img} alt="Not Found" />
                </div>
                <div className="thumbnails">
                    <img src={product1Thumbnail} onClick={() => setValues(0)} alt="Not Found" />
                    <img src={product2Thumbnail} onClick={() => setValues(1)} alt="Not Found" />
                    <img src={product3Thumbnail} onClick={() => setValues(2)} alt="Not Found" />
                    <img src={product4Thumbnail} onClick={() => setValues(3)} alt="Not Found" />
                </div>
            </section>
            <section>
                    <h5>SNEAKER COMPANY</h5>
                    <h1>Fall Limited Edition Sneakers</h1>
                    <p>These low-profile sneakers are your perfect casual wear companion.
                        Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                    </p>
                    <div>
                        <h4>$125.00</h4>
                        <p>50%</p>
                    </div>
                    <p>$250</p>
                    <article>
                        <div>
                            <button onClick={decrement}>
                                <img src={minusIcon}  alt="Not Found" />
                            </button>
                            <div>
                                <span>{ count }</span>
                            </div>
                            <button onClick={increment}>
                                <img src={plusIcon}  alt="Not Found" />
                            </button>
                        </div>
                        <div>
                            <button onClick={() => setter(count)}>
                                <span>
                                    <img src={cartIcon} alt="Not Found" />
                                </span>
                                <span>Add to cart</span>
                            </button>
                        </div>
                    </article>
            </section>
            
        </main>
            { isModalOpen ? <div><Overlay /><Modal imageNumber={initialImage} closeModal={closeModal} /></div> : '' }
        </>
    )
}

export default Main

import React, { useState, useRef } from 'react'
import Overlay from './Overlay'

// icon images
import iconPrevious from '../images/icon-previous.svg'
import iconNext from '../images/icon-next.svg'
import iconClose from '../images/icon-close.svg'


// product images thumbnails 
import product1Thumbnail from '../images/image-product-1-thumbnail.jpg'
import product2Thumbnail from '../images/image-product-2-thumbnail.jpg'
import product3Thumbnail from '../images/image-product-3-thumbnail.jpg'
import product4Thumbnail from '../images/image-product-4-thumbnail.jpg'

// product images 
import product1Img from '../images/image-product-1.jpg'
import product2Img from '../images/image-product-2.jpg'
import product3Img from '../images/image-product-3.jpg'
import product4Img from '../images/image-product-4.jpg'

const images = [product1Img, product2Img, product3Img, product4Img]




const Modal = ({imageNumber, closeModal}) => {

    const [currentImageNumber, setCurrentImageNumber] = useState(imageNumber)
    
    const firstRef = useRef()

    const [currentImage, setCurrentImage] = useState(() => {    
        return images[currentImageNumber]
    })

    console.log(currentImageNumber)

    function previousImage(){
        let num
        if(currentImageNumber == 0) {
            num = 3
        } else {
            num = currentImageNumber - 1
        }
        
        setCurrentImageNumber(num)
        setCurrentImage(images[num])
    }   

    function nextImage(){
        let num
        if( currentImageNumber == 3 ){
            num = 0
        } else {
            num = currentImageNumber + 1
        }

        setCurrentImageNumber(num)
        setCurrentImage(images[num])
    }

    function changeImage(num) {
        setCurrentImage(images[num])
        setCurrentImageNumber(num)
    }


    return (
        <section className="modal-wrapper">
            
        <div className="modal">
            <div className="icon-close-wrapper">
                <img src={iconClose} alt="Not found" onClick={() => { closeModal() }} />
            </div>
            <div>
            <img src={iconPrevious} onClick={previousImage} className="img-icon img-icon-1" alt="Not Found" />
            <div className="modal-img-container">
                <img src={currentImage}  alt="Not Found" />
            </div>
            <img src={iconNext} onClick={nextImage} className="img-icon img-icon-2" alt="Not Found" />

            <div className="thumbnails">
                <div className="thumbnail">
                    <div style={ currentImageNumber == 0 ? {width: '100%', height: '100%', backgroundColor: 'white', position: 'absolute', opacity: '0.6', borderRadius: '10px', display: 'block', border: '2px solid hsl(26, 100%, 55%)'} : {display: 'none'} } ></div>
                    <img className="img-1" src={product1Thumbnail} style={currentImageNumber == 0 ? {border: '2px solid hsl(26, 100%, 55%)'} : {color: 'orange'}} onClick={() => changeImage(0)} alt="Not Found" />
                </div>
                <div className="thumbnail">
                    <div style={ currentImageNumber == 1 ? {width: '100%', height: '100%', backgroundColor: 'white', position: 'absolute', opacity: '0.6', borderRadius: '10px', display: 'block', border: '2px solid hsl(26, 100%, 55%)'} : {display: 'none'} }></div>
                    <img src={product2Thumbnail}  style={currentImageNumber == 1 ? {border: '2px solid red'} : {color: 'orange'}} onClick={() => changeImage(1)} alt="Not Found" />
                </div>
                <div className="thumbnail">
                    <div style={ currentImageNumber == 2 ? {width: '100%', height: '100%', backgroundColor: 'white', position: 'absolute', opacity: '0.6', borderRadius: '10px', display: 'block', border: '2px solid hsl(26, 100%, 55%)'} : {display: 'none'} }></div>
                    <img src={product3Thumbnail}  style={currentImageNumber == 2 ? {border: '2px solid red'} : {color: 'orange'}} onClick={() => changeImage(2)} alt="Not Found" />
                </div>
                <div className="thumbnail">
                    <div style={ currentImageNumber == 3 ? {width: '100%', height: '100%', backgroundColor: 'white', position: 'absolute', opacity: '0.6', borderRadius: '10px', display: 'block', border: '2px solid hsl(26, 100%, 55%)'} : {display: 'none'} }></div>
                    <img src={product4Thumbnail}  style={currentImageNumber == 3 ? {border: '2px solid red'} : {color: 'orange'}} onClick={() => changeImage(3)} alt="Not Found" />
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Modal

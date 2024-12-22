import React from 'react'
import Basketball from './Basketball.jpg'
const Image_details = () => {
  return (
    <div>
        <div>
            <div>
                <img src={Basketball} alt="Shoe" width={80} height={60}/>
            </div>
            <div>
                <h2>Basketball</h2>
                <div className='size'>
                    <h3>size</h3>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Image_details
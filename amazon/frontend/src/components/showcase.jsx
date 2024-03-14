/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import showcase from '../uploads/showcase.jpg'

const Showcase = () => {
    return (
        <div>
            <img src={showcase}  alt={'bg-image'} className='w-full mb-56 showCase' />
        </div>
    )
}

export default Showcase

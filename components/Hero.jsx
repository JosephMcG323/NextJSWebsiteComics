import React from 'react'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
const Hero = ({heading, message}) => {
    return (
        <div>

        <div className='flex items-center justify-center h-screen mb-[12] bg-fixed bg-cover custom-img'>
            {/* Overlay */}
            <div className='zoom'>
        <Image
          src='/VolumeCoverFina32222222l.png'
          alt='/'
          width='500'
          height='900'

        />
      </div>

                <h2 className="text-5xl font-bold">{heading}</h2>
                <p className="py-5 text-xl">{message}</p>
                <button className="px-8 py-2 border">Book</button>
            </div>

      </div>

    )
}

export default Hero
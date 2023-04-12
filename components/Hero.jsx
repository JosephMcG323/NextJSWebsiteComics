import React from 'react'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
const Hero = ({heading, message}) => {
    return (
        <div>


        <div className='flex items-center justify-center h-screen mb-[12] bg-fixed bg-cover custom-img'>
            {/* Overlay */}
            <a href="https://codingbeautydev.com" target="_blank" rel="noreferrer"/>
            <div className='zoom'>
              
        <Image
          src='/VolumeCoverFina32222222l.png'
          alt='/'
          width='500'
          height='900'
        />
      </div>

<div>

<h2 style={{
            fontSize: '2.8rem',
            paddingRight: '22rem',
            paddingLeft: '2rem',
            lineHeight: '2rem',
            textAlign: 'center',
            color: 'black',
            padding: '2',
            fontFamily: '-moz-initial',
            fontSize: '49px'
          }}>{heading}</h2>

          <p style={{
            fontSize: '2.8rem',
            paddingTop: '2rem',
            paddingRight: '22rem',
            paddingLeft: '2rem',
            lineHeight: '2rem',
            textAlign: 'center',
            color: 'white',
            padding: '2',
            fontFamily: '-moz-initial',
            fontSize: '29px'
          }}>An exciting adventure about a narcoleptic superhero</p>
</div>
        
            </div>
            {/* <h2 className=" py-5 text-5xl font-bold">{heading}</h2>
            
            padding-left: 1.5em;
            
            
            
            */}

      </div>

    )
}

export default Hero
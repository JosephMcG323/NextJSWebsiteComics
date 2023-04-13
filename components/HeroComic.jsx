import React from 'react'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
const HeroComic = ({heading, message}) => {
    return (
        <div>

<div className='flex items-center justify-center h-screen mb-[12] bg-fixed bg-cover custom-img'>
            {/* Overlay */}
            <div className='zoom'>
            <a href="https://codingbeautydev.com" target="_blank" rel="noreferrer">
        <Image
          src='/VolumeCoverFina32222222l.png'
          alt='/'
          width='500'
          height='900'
        />
        </a>

      </div>

      <div>

<h2 style={{
            fontSize: '2.8rem',
            paddingRight: '20rem',
            paddingLeft: '12rem',
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
            paddingRight: '20rem',
            paddingLeft: '12rem',
            lineHeight: '2rem',
            textAlign: 'center',
            color: 'white',
            padding: '2',
            fontFamily: '-moz-initial',
            fontSize: '29px'
          }}>An exciting adventure about a narcoleptic superhero</p>
</div>


            </div>

      </div>

    )
}

export default HeroComic
import React from 'react'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
const Hero = ({heading, message}) => {
    return (
        <div>


        <div className='flex items-center justify-center h-screen mb-[12] bg-fixed bg-cover custom-img'>
            {/* Overlay */}
            <div className='home5Main7Img  mx-auto'>  
<div  className='zoom'>
            <a href="/chapterHome">
        <Image
          src='/VolumeCoverFina32222222l.png'
          alt='/'
          width='500'
          height='900'
        />
        </a>

      </div>      </div>

      <div className="home5Main7Img">
<a href="/chapterHome">
<div style={{
            fontSize: '2.8rem',
            paddingLeft: '13%',
            lineHeight: '2rem',}}  className='zoom'>
        <Image 
          src='/Bend-sticker-cartoon-pointing-arrow-creative-150423457 - Copy.png'
          alt='/'
          width='250'
          height='290'
        />   
      </div>
      </a>
      <a href="/chapterHome">

<h2 style={{
            fontSize: '2.8rem',
            paddingRight: '28%',
            lineHeight: '2.9rem',
            wordSpacing: '5px',
            textAlign: 'center',
            color: 'white',
            textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000',            
            padding: '12',
            fontFamily: '-moz-initial',
            fontSize: '59px'
          }}>{heading}</h2>
</a>
          <p style={{
  fontSize: '2.8rem',
  paddingTop: '1rem',
  paddingRight: '28%',

  lineHeight: '2rem',
  textAlign: 'center',
  color: 'white',
  textShadow: '-1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000, 1.5px 1.5px 0 #000',            
  padding: '2',
  fontFamily: '-moz-initial',
  fontSize: '29px'
          }}>An exciting adventure about a narcoleptic superhero!!</p>
</div>
        
            </div>
            {/* <h2 className=" py-5 text-5xl font-bold">{heading}</h2>
            
            padding-left: 1.5em;
            
            
            
            */}

      </div>

    )
}

export default Hero
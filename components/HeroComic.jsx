import React from 'react'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
const HeroComic = ({heading, message}) => {
    return (

<div className='flex items-center justify-center h-screen mb-[12] bg-fixed bg-cover custom-img'>
<div className='home5Main7Img'>  
<div style={{
  fontSize: '2.8rem',
  paddingTop: '1rem',

  lineHeight: '2rem',}} className='zoom'>
            <a href="/chapterHome">
        <Image
          src='/VolumeCoverFina32222222l.png'
          alt='/'
          width='500'
          height='900'
        />
        </a>

      </div>      </div>
      <div>
      <div className="">

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
          }}>{message}</p>
</div>
            </div>
            </div> 

    )
}

export default HeroComic
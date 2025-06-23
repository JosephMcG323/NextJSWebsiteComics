import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
const HeroComicMain = ({heading, message}) => {
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
      <div className="home5Main7Img">
      <div>
      <h2 style={{
            fontSize: '2.8rem',
            
            paddingRight: '47%',
            lineHeight: '2rem',
            wordSpacing: '5px',
            textAlign: 'center',
            color: 'white',
            textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000',            
            padding: '12',
            fontFamily: '-moz-initial',
            fontSize: '50px'
          }}>Chapters</h2>
          <p
          style={{
            wordBreak: 'break-all',
            marginTop: '1rem',
            whiteSpace: 'normal'
          }}
          ></p>
<div style={{
  paddingRight: '10%',
  paddingLef: '10%',}}  >

<Link href="/chapter1">
<p style={{
  fontSize: '2.8rem',
  paddingTop: '1rem',

  lineHeight: '2rem',
  textAlign: 'left',
  color: 'white',
  textShadow: '-1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000, 1.5px 1.5px 0 #000',            
  padding: '2',
  fontFamily: '-moz-initial',
  fontSize: '29px'
}}>• Chapter 1 - Heroes of Stroke City</p>
</Link>



<Link href="/chapter2">
<p style={{
  fontSize: '2.8rem',
  paddingTop: '1rem',

  lineHeight: '2rem',
  textAlign: 'left',
  color: 'white',
  textShadow: '-1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000, 1.5px 1.5px 0 #000',            
  padding: '2',
  fontFamily: '-moz-initial',
  fontSize: '29px'
}}>• Chapter 2 - Strokers</p>
</Link>

<Link href="/chapter3">

<p style={{
  fontSize: '2.8rem',
  paddingTop: '1rem',

  lineHeight: '2rem',
  textAlign: 'left',
  color: 'white',
  textShadow: '-1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000, 1.5px 1.5px 0 #000',            
  padding: '2',
  fontFamily: '-moz-initial',
  fontSize: '29px'
}}>• Chapter 3 - The Clippers Are Coming</p>
</Link>

<Link href="/chapter4">

<p style={{
  fontSize: '2.8rem',
  paddingTop: '1rem',

  lineHeight: '2rem',
  textAlign: 'left',
  color: 'white',
  textShadow: '-1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000, 1.5px 1.5px 0 #000',            
  padding: '2',
  fontFamily: '-moz-initial',
  fontSize: '29px'
}}>• Chapter 4 - White Butterfly</p>
</Link>
</div>

          <p style={{
            fontSize: '2.8rem',
            paddingTop: '2rem',
            paddingRight: '45rem',
            paddingLeft: '12rem',
            lineHeight: '2rem',
            textAlign: 'center',
            color: 'white',
            textShadow: '-1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000, 1.5px 1.5px 0 #000',            
            padding: '2',
            fontFamily: '-moz-initial',
            fontSize: '29px'
          }}></p>
</div> 

      </div>

                       </div>    


    )
}

export default HeroComicMain
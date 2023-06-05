import React from 'react'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


const imgStyle = { maxWidth: '80%' }
const imgStyleWide = { maxWidth: '100%' }

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'></h1>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection:'column' }}>
  <img style={imgStyle} src='/chptr1/Page 1.png' alt="Page 1" />
  <img style={imgStyle} src='/chptr1/Page 2.png' alt="Page 2" />
  <img style={imgStyle} src='/chptr1/Page 3.png' alt="Page 3" />
  <img style={imgStyle} src='/chptr1/Page4.jpg' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page5.jpg' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page6.jpg' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 7.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 8 - Copy.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 6.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 10.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 11.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 12.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 13.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 14.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 15.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 15.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 16.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 17.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 18.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 19.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 20.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 21.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 22.png' alt="Page" />
  <img style={imgStyleWide} src='/chptr1/Page 23.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 24 - Copy.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 25.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 26.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 27.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 28.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 29.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 30.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 31.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 32.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 33.png' alt="Page" />
  <img style={imgStyleWide} src='/chptr1/Page 34.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 35.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 36.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 37.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 38.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 39.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 40.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 41.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 42.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 43.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 44.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 45.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 46.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 47.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 48.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 49.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 50.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 51.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 52.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 53.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 54.png' alt="Page" />
  <img style={imgStyle} src='/chptr1/Page 56 fan art.png' alt="Page" />

        </div>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>



        <div style={{paddingRight: `20`}} className='zoom_arrow'>
        <Image
          src='/Bend-sticker-cartoon-pointing-arrow-creative-150423457 - Copy copy.png'
          alt='/'
          width='250'
          height='290'
        />   
      </div> 


        <div className='w-full h-full'>


        </div>
      </div>      </div>   <p style={{
            fontSize: '2.8rem',
            lineHeight: '2rem',
            textAlign: 'center',
            color: 'white',
            textShadow: '-1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000, 1.5px 1.5px 0 #000',            
            fontFamily: '-moz-initial',
            fontSize: '29px'
          }}>An exciting adventure about a narcoleptic superhero</p>

    </div>
  )
}

export default Portfolio
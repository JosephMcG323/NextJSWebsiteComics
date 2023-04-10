import React from 'react'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


const imgStyle = { maxWidth: '80%' }
const imgStyleWide = { maxWidth: '100%' }

const Chapter3 = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'></h1>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection:'column' }}>
      <img style={imgStyle} src='/chptr3/page0001.png' alt="Page " />    
     





        <div className='w-full h-full'>


        </div>
      </div>      </div>

  )
}

export default Chapter3
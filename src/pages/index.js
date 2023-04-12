import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../../components/Hero'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { InstagramEmbed } from 'react-social-media-embed';
import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import { SliderData } from '../../components/SliderData'
import Slider from '../../components/Slider'


const IMAGES =
  [
    {
      src: "TagakiSanlaughBackG.png",
      thumbnail:  "TagakiSanlaughBackG.png",
      thumbnailWidth: 312,
      thumbnailHeight: 312,
      caption: "@GoSleepyHead"
    },
    {
      src: "TagakiSanWaterBackG.png",
      thumbnail:  "TagakiSanWaterBackG.png",
      thumbnailWidth: 312,
      thumbnailHeight: 312,
      caption: "@GoSleepyHead"
    },
    {
      src: "ShinjiSittingTrain.png",
      thumbnail:  "ShinjiSittingTrain.png",
      thumbnailWidth: 550,
      thumbnailHeight: 412,
      caption: "@GoSleepyHead"
    },
    {
      src: "jessietall kiss 2.png",
      thumbnail:  "jessietall kiss 2.png",
      thumbnailWidth: 500,
      thumbnailHeight: 312,
      caption: "@GoSleepyHead"
    },
    {
      src: "jessietall sad.png",
      thumbnail:  "jessietall sad.png",
      thumbnailWidth: 320,
      thumbnailHeight: 312,
      caption: "@GoSleepyHead"
    },
    
    {
      src: "shinji xtc.png",
      thumbnail:  "shinji xtc.png",
      thumbnailWidth: 350,
      thumbnailHeight: 312,
      caption: "@GoSleepyHead"
    },
    {
      src: "shinji blu.png",
      thumbnail:  "shinji blu.png",
      thumbnailWidth: 312,
      thumbnailHeight: 312,
      caption: "@GoSleepyHead"
    },

    {
      src: "mecha colour bite622PUYAPL.png",
      thumbnail:  "mecha colour bite622PUYAPL.png",
      thumbnailWidth: 320,
      thumbnailHeight: 412,
      caption: "@GoSleepyHead"
    },
    {
      src: "rei look up3.png",
      thumbnail:  "rei look up3.png",
      thumbnailWidth: 400,
      thumbnailHeight: 412,
      caption: "@GoSleepyHead"
    },

    {
      src: "rei sit.png",
      thumbnail:  "rei sit.png",
      thumbnailWidth: 400,
      thumbnailHeight: 412,
      caption: "@GoSleepyHead"
    },
    {
      src: "rei standasd.png",
      thumbnail:  "rei standasd.png",
      thumbnailWidth: 350,
      thumbnailHeight: 512,
      caption: "@GoSleepyHead"
    },
    {
      src: "nami crack.png",
      thumbnail:  "nami crack.png",
      thumbnailWidth: 320,
      thumbnailHeight: 312,
      caption: "@GoSleepyHead"
    },
    {
      src: "nami low 2.png",
      thumbnail:  "nami low 2.png",
      thumbnailWidth: 450,
      thumbnailHeight: 512,
      caption: "@GoSleepyHead"
    },


    {
      src: "re8 Olga 1.png",
      thumbnail:  "re8 Olga 1.png",
      thumbnailWidth: 450,
      thumbnailHeight: 512,
      caption: "@GoSleepyHead"
    },
    {
      src: "re8 Olga2.png",
      thumbnail:  "re8 Olga2.png",
      thumbnailWidth: 350,
      thumbnailHeight: 512,
      caption: "@GoSleepyHead"
    },
    {
      src: "mallow header.png",
      thumbnail:  "mallow header.png",
      thumbnailWidth: 480,
      thumbnailHeight: 512,
      caption: "@GoSleepyHead"
    },
    {
      src: "mallowOutKimono.png",
      thumbnail:  "mallowOutKimono.png",
      thumbnailWidth: 350,
      thumbnailHeight: 512,
      caption: "@GoSleepyHead"
    },
    {
      src: "leonaTug.jpg",
      thumbnail:  "leonaTug.jpg",
      thumbnailWidth: 380,
      thumbnailHeight: 512,
      caption: "@GoSleepyHead"
    },
    {
      src: "asuka kimono.png",
      thumbnail:  "asuka kimono.png",
      thumbnailWidth: 280,
      thumbnailHeight: 512,
      caption: "@GoSleepyHead"
    },
    {
      src: "asuka kimono1.png",
      thumbnail:  "asuka kimono1.png",
      thumbnailWidth: 580,
      thumbnailHeight: 512,
      caption: "@GoSleepyHead"
    },

    {
      src: "nami low 4.png",
      thumbnail:  "nami low 4.png",
      thumbnailWidth: 450,
      thumbnailHeight: 512,
      caption: "Boats (Jeshu John - designerspics.com)"
    },
]
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>

      <Head>

        <title>Photography</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero heading='SleepyHead Comics' message='The story about a narcoleptic superhero in Stroke City!' />
      <div id='galleryZoom' className='max-w-[1240px] mx-auto'>
        <p className="py-5"></p>

        <div id='gallery' className='max-w-[1240px] py-4 mx-auto'>
          <h1 style={{
            fontSize: '2.8rem',
            lineHeight: '2rem',
            textAlign: 'center',
            color: 'black',
            padding: '2',
            fontFamily: '-moz-initial'
          }}>Gallery</h1>
        </div>

        <hr
          style={{
            background: 'brown',
            color: 'brown',
            borderColor: 'brown',
            width: '70%',
            margin: 'auto'
          }}
        />
        <p className="py-5"></p>
        <Gallery images={IMAGES} />
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', height: '15vh' }}>
        </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InstagramEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" width={328} />
      </div>

    </div>
  );
}

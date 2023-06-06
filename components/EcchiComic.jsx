import React from 'react'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Gallery from 'react-grid-gallery';
import Ecchi from './Ecchi';
import { InstagramEmbed } from 'react-social-media-embed';

const IMAGESECCHI =
  [
    {
      src: "/ecchi/chaching.png",
      thumbnail:  "/ecchi/chaching.png",
      thumbnailWidth: 420,
      thumbnailHeight: 312,
      caption: "@GoSleepyHead"
    },
    {
      src: "/ecchi/cherryBlossom.png",
      thumbnail:  "/ecchi/cherryBlossom.png",
      thumbnailWidth: 412,
      thumbnailHeight: 312,
      caption: "@GoSleepyHead"
    },

    {
      src: "/ecchi/CLIPStudioPaint_9tcZHAP1sl.png",
      thumbnail:  "/ecchi/CLIPStudioPaint_9tcZHAP1sl.png",
      thumbnailWidth: 330,
      thumbnailHeight: 250,
      caption: "@GoSleepyHead"
    },
      {
        src: "/ecchi/CLIPStudioPaint_T7AlcGzUT9.png",
        thumbnail:  "/ecchi/CLIPStudioPaint_T7AlcGzUT9.png",
        thumbnailWidth: 320,
        thumbnailHeight: 312,
        caption: "@GoSleepyHead"
      },
      
      {
        src: "/ecchi/HOTD saeko out pink.png",
        thumbnail:  "/ecchi/HOTD saeko out pink.png",
        thumbnailWidth: 250,
        thumbnailHeight: 312,
        caption: "@GoSleepyHead"
      },
      {
        src: "/ecchi/Ingrid.png",
        thumbnail:  "/ecchi/Ingrid.png",
        thumbnailWidth: 270,
        thumbnailHeight: 312,
        caption: "@GoSleepyHead"
      },
      
    {
      src: "/ecchi/ingrid12.png",
      thumbnail:  "/ecchi/ingrid12.png",
      thumbnailWidth: 400,
      thumbnailHeight: 412,
      caption: "@GoSleepyHead"
    },

    {
      src: "/ecchi/Jessie PokemonFinal.png",
      thumbnail:  "/ecchi/Jessie PokemonFinal.png",
      thumbnailWidth: 400,
      thumbnailHeight: 412,
      caption: "@GoSleepyHead"
    },
    {
      src: "/ecchi/Jessie PokemonRuff.png",
      thumbnail:  "/ecchi/Jessie PokemonRuff.png",
      thumbnailWidth: 350,
      thumbnailHeight: 512,
      caption: "@GoSleepyHead"
    },
    {
      src: "/ecchi/mallow COWGIRL.png",
      thumbnail:  "/ecchi/mallow COWGIRL.png",
      thumbnailWidth: 320,
      thumbnailHeight: 312,
      caption: "@GoSleepyHead"
    },
    {
      src: "/ecchi/mallow.png",
      thumbnail:  "/ecchi/mallow.png",
      thumbnailWidth: 550,
      thumbnailHeight: 512,
      caption: "@GoSleepyHead"
    },


    {
      src: "/ecchi/mallowpillow.png",
      thumbnail:  "/ecchi/mallowpillow.png",
      thumbnailWidth: 350,
      thumbnailHeight: 512,
      caption: "@GoSleepyHead"
    },
    {
      src: "/ecchi/mariana jcup 1 1st.png",
      thumbnail:  "/ecchi/mariana jcup 1 1st.png",
      thumbnailWidth: 450,
      thumbnailHeight: 512,
      caption: "@GoSleepyHead"
    },
    {
      src: "/ecchi/mariana jcup suuck.png",
      thumbnail:  "/ecchi/mariana jcup suuck.png",
      thumbnailWidth: 480,
      thumbnailHeight: 512,
      caption: "@GoSleepyHead"
    },
    {
      src: "/ecchi/mariana jcup2.png",
      thumbnail:  "/ecchi/mariana jcup2.png",
      thumbnailWidth: 450,
      thumbnailHeight: 512,
      caption: "@GoSleepyHead"
    },
    {
      src: "/ecchi/mariana jcupasddsadsaasd.png",
      thumbnail:  "/ecchi/mariana jcupasddsadsaasd.png",
      thumbnailWidth: 380,
      thumbnailHeight: 512,
      caption: "@GoSleepyHead"
    },
    {
      src: "/ecchi/mariana jcupralll.png",
      thumbnail:  "/ecchi/mariana jcupralll.png",
      thumbnailWidth: 280,
      thumbnailHeight: 512,
      caption: "@GoSleepyHead"
    },
    {
      src: "/ecchi/mistytrreee2.png",
      thumbnail:  "/ecchi/mistytrreee2.png",
      thumbnailWidth: 380,
      thumbnailHeight: 512,
      caption: "@GoSleepyHead"
    },

    {
      src: "/ecchi/nami kissxrobin.png",
      thumbnail:  "/ecchi/nami kissxrobin.png",
      thumbnailWidth: 649,
      thumbnailHeight: 512,
      caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: "/ecchi/nami ruff.png",
      thumbnail:  "/ecchi/nami ruff.png",
      thumbnailWidth: 550,
      thumbnailHeight: 512,
      caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: "/ecchi/outM arina1.png",
      thumbnail:  "/ecchi/outM arina1.png",
      thumbnailWidth: 1200,
      thumbnailHeight: 803,
      caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: "/ecchi/REBECCA PIX.png",
      thumbnail:  "/ecchi/REBECCA PIX.png",
      thumbnailWidth: 420,
      thumbnailHeight: 512,
      caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: "/ecchi/samus1.png",
      thumbnail:  "/ecchi/samus1.png",
      thumbnailWidth: 520,
      thumbnailHeight: 512,
      caption: "Boats (Jeshu John - designerspics.com)"
    },

    {
      src: "/ecchi/samus3.png",
      thumbnail:  "/ecchi/samus3.png",
      thumbnailWidth: 520,
      thumbnailHeight: 512,
      caption: "Boats (Jeshu John - designerspics.com)"
    },

    {
      src: "/ecchi/samus5.png",
      thumbnail:  "/ecchi/samus5.png",
      thumbnailWidth: 350,
      thumbnailHeight: 512,
      caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: "/ecchi/samus6.png",
      thumbnail:  "/ecchi/samus6.png",
      thumbnailWidth: 700,
      thumbnailHeight: 512,
      caption: "Boats (Jeshu John - designerspics.com)"
    },
    

    {
      src: "/ecchi/shevaasddsads.png",
      thumbnail:  "/ecchi/shevaasddsads.png",
      thumbnailWidth: 530,
      thumbnailHeight: 512,
      caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: "/ecchi/sheva&chris.png",
      thumbnail:  "/ecchi/sheva&chris.png",
      thumbnailWidth: 1249,
      thumbnailHeight: 803,
      caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: "/ecchi/samus4.png",
      thumbnail:  "/ecchi/samus4.png",
      thumbnailWidth: 900,
      thumbnailHeight: 803,
      caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: "/ecchi/samus2.png",
      thumbnail:  "/ecchi/samus2.png",
      thumbnailWidth: 600,
      thumbnailHeight: 512,
      caption: "Boats (Jeshu John - designerspics.com)"
    },
  ]


const EcchiComic = ({heading, message}) => {
    return (
        <div>

<div className='flex items-center justify-center h-screen mb-[12] bg-fixed '>
  
            {/* Overlay */}
     

      <div>
      <p className="py-125"></p>
      
      <p className="py-20"></p>
      <p className="py-20"></p>
      <p className="py-20"></p>
      <p className="py-20"></p>
      <p className="py-20"></p>
      <p className="py-20"></p>
      <p className="py-20"></p>
      <p className="py-20"></p>
      <p className="py-20"></p>
      <p className="py-20"></p>
      <p className="py-20"></p>
      <p className="py-20"></p>
      <p className="py-20"></p>
      <p className="py-20"></p>

      <p className="py-20"></p>
      <p className="py-20"></p>


<div id='gallery' className='max-w-[1240px] py-4 mx-auto'>
  <h1 style={{
    fontSize: '2.8rem',
    lineHeight: '1rem',
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
<p className="py-5"></p>


      <div id='gallery' className='max-w-[900px]  mx-auto'>
        <Gallery images={IMAGESECCHI} />
        <div className="py-5"overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>


        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>        <h1 > ​​​​</h1>        <h1 > ​​​​</h1>

        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>        <h1 > ​​​​</h1>

        <h1 > ​​​​</h1>        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>        <h1 > ​​​​</h1>

        </div>
        </div>


</div>


            </div>
      {/* <Slider slides={SliderData} /> */}
      <p className="py-20"></p>
      <p className="py-20"></p>
      <p className="py-20"></p>
      <p className="py-20"></p>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InstagramEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" width={328} />
      </div>
      </div>

    )
}

export default EcchiComic
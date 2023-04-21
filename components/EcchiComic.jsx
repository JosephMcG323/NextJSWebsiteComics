import React from 'react'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Gallery from 'react-grid-gallery';

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
      thumbnailWidth: 650,
      thumbnailHeight: 512,
      caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: "/ecchi/nami ruff.png",
      thumbnail:  "/ecchi/nami ruff.png",
      thumbnailWidth: 650,
      thumbnailHeight: 512,
      caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: "/ecchi/Onsen2.png",
      thumbnail:  "/ecchi/Onsen2.png",
      thumbnailWidth: 380,
      thumbnailHeight: 512,
      caption: "@GoSleepyHead"
    },
    {
      src: "/ecchi/outM arina1.png",
      thumbnail:  "/ecchi/outM arina1.png",
      thumbnailWidth: 650,
      thumbnailHeight: 512,
      caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: "/ecchi/REBECCA PIX.png",
      thumbnail:  "/ecchi/REBECCA PIX.png",
      thumbnailWidth: 350,
      thumbnailHeight: 512,
      caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: "/ecchi/samus1.png",
      thumbnail:  "/ecchi/samus1.png",
      thumbnailWidth: 350,
      thumbnailHeight: 512,
      caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: "/ecchi/samus2.png",
      thumbnail:  "/ecchi/samus2.png",
      thumbnailWidth: 350,
      thumbnailHeight: 512,
      caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: "/ecchi/samus3.png",
      thumbnail:  "/ecchi/samus3.png",
      thumbnailWidth: 350,
      thumbnailHeight: 512,
      caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: "/ecchi/samus4.png",
      thumbnail:  "/ecchi/samus4.png",
      thumbnailWidth: 350,
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
      thumbnailWidth: 350,
      thumbnailHeight: 512,
      caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: "/ecchi/sheva&chris.png",
      thumbnail:  "/ecchi/sheva&chris.png",
      thumbnailWidth: 350,
      thumbnailHeight: 512,
      caption: "Boats (Jeshu John - designerspics.com)"
    },

    {
      src: "/ecchi/shevaasddsads.png",
      thumbnail:  "/ecchi/shevaasddsads.png",
      thumbnailWidth: 350,
      thumbnailHeight: 512,
      caption: "Boats (Jeshu John - designerspics.com)"
    },
  ]


const EcchiComic = ({heading, message}) => {
    return (
        <div>

<div className='flex items-center justify-center h-screen mb-[12] bg-fixed bg-cover custom-img'>
  
            {/* Overlay */}
     

      <div>




      <div id='gallery' className='max-w-[900px]  mx-auto'>
        <Gallery images={IMAGESECCHI} />

        </div>

          <p style={{
            fontSize: '2.8rem',
            paddingTop: '2rem',
            paddingRight: '20rem',
            paddingLeft: '12rem',
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

export default EcchiComic
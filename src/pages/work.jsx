import React from 'react'
import HeroComic from '../../components/HeroComic'
import Portfolio from '../../components/Portfolio'

const work = () => {
  return (
    <div>
        <HeroComic heading='Which Chapter do you want to read!?' message = 'This is some of my recent work'></HeroComic>
        <Portfolio></Portfolio>
    </div>
  )
}

export default work
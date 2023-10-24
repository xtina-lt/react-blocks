import React from 'react'
import SubContent from './SubContent'
import Advertisement from './Advertisement'
import crystal from '../assets/crystal-ball.png'
import poison from '../assets/poison.png'
import ghost from '../assets/ghost.png'

const MainContent = () => {
  return (
    <main>
          <SubContent img={crystal}/>
          <SubContent img={poison}/>
          <SubContent img={ghost}/>
        <Advertisement/>
    </main>
  )
}

export default MainContent
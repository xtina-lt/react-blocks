import React from 'react'
import ghost from '../assets/dot-ghost-icon.png'
import witch from '../assets/dot-witch-icon.png'
import cauldron from '../assets/dot-cauldron-icon.png'
import noFuture from '../assets/no-future.png'

const Navigation = () => {
  return (
    <nav>
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/setInterval" target="_blank">
          <img src={ghost} className="nav-icon" alt="ghost"/>
          Interval
        </a>
        <a href="https://www.flaticon.com/search?word=halloween&type=sticker" target="_blank">
          <img src={cauldron} className="nav-icon" alt="cauldron"/>
          Stickers
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/setInterval" target="_blank">
          <img src={witch} className="nav-icon" alt="witch"/>
          GitHub
        </a>
        <img src={noFuture}/>
    </nav>
  )
}

export default Navigation
import React, { useEffect, useState } from 'react'

const Advertisement = () => {
    const [index, setIndex] = useState(0)
    const [arr, setArr] = useState([
              // yea not doing basic to do list...
              // we can get some cool quotes though lol
              "I feel like a haunt mess.",
              "Howl 'bout them apples?",
              "Creepin' it real.",
              "No tricks, just treats.",
              "Who run the world? Ghouls."
    ])


    // CHANGE THE QUOTE EVERY 30 SECONDS
    useEffect ( () => {
        let keepGoing = true
        // setInterval( callback, time)
        // callback: ()=> || () => {} || function()
        setInterval( ()=> {
            // change random index
            // make sure it isn't the same index
            while (keepGoing) {
                let num = Math.floor( Math.random() * arr.length )
                if (num !== index) {
                    setIndex(num);
                    keepGoing = false;
                }
            }
            // change the quote every 10 seconds
        }, 3000) // end of setinterval
    }, [index, arr]) // UPDATE THESE TWO VALUES


  return (
    <section id='advertisement'>
        {arr[index]}
    </section>
  )
}

export default Advertisement
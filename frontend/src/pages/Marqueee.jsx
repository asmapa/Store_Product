import React from 'react'
import Marquee from 'react-fast-marquee'
import dress1 from "../assets/dress.webp"
import dress2 from "../assets/dress2.jpeg"
import dress3 from "../assets/dress3.jpeg"
import dress4 from "../assets/dress4.jpeg"
import orna from "../assets/ornam.jpg"
import pads from "../assets/pads.webp"
import o from "../assets/or.jpg"
const Marqueee = () => {
  return (
      <div>
          <Marquee>
              <div >
                  <img src={dress4} className="h-36 w-auto object-contain mr-6 rounded-full" />
              </div>
              <div >
                  <img src={dress1} className="h-36 w-auto object-contain mr-6 rounded-full" />
              </div>
              <div >
                  <img src={dress2} className="h-36 w-auto object-contain mr-6 rounded-full" />
              </div>
              <div >
                  <img src={dress3} className="h-36 w-auto object-contain mr-6 rounded-full" />
              </div>
              <div >
                  <img src={orna} className="h-36 w-auto object-contain mr-6 rounded-full" />
              </div>
              <div >
                  <img src={pads} className="h-36 w-auto object-contain mr-6 rounded-full" />
              </div>
              <div >
                  <img src={o} className="h-36 w-auto object-contain mr-6 rounded-full" />
              </div>
          </Marquee>
    </div>
  )
}

export default Marqueee
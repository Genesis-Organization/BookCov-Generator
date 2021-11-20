import React, {useState} from 'react'
import type { NextPage } from 'next'
import Inputs from '../components/inputs'
import { Canvas } from '../styled/canvas'
import {Data} from '../types/data'
import {render} from '../scripts/canvas'

const Home: NextPage = () => {
  const [showInputs, toggleInputs] = useState(true)

  const generate = (data:Data) => {
    toggleInputs(!showInputs)
    render(document, data)
  }

  return (
    <div id="cont"> 
      { showInputs ? <Inputs onSubmit={(data: Data)=>generate(data)} /> : <Canvas width="825" height="1200" id="canvas"></Canvas> }
    </div>
  )
}



export default Home

import React, {useState} from 'react'
import type { NextPage } from 'next'
import Inputs from '../components/inputs'
import { Canvas, Div } from '../styled/canvas'
import {Data} from '../types/data'
import {render} from '../scripts/canvas'

const Home: NextPage = () => {
  const [showInputs, toggleInputs] = useState(true)

  const style= {
    display:'none'
  }

  const generate = (data:Data) => {
    toggleInputs(!showInputs)
    render(document.querySelector('#canvas'), data)
  }

  return (
    <Div id="cont" > 
      { showInputs && <Inputs onSubmit={(data: Data)=>generate(data)}/>} 
      <Canvas width="825" height="1200" id="canvas" style={style}></Canvas> 
    </Div>
  )
}

export default Home

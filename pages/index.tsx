import React, {useState} from 'react'
import type { NextPage } from 'next'
import styled from 'styled-components'
import Inputs from '../components/inputs'

const Home: NextPage = () => {
  const [showInputs, toggleInputs] = useState(false)
  return (
    <div> 
      { showInputs ? <Inputs /> : <canvas width="825" height="1200"></canvas> }
    </div>
  )
}

export default Home

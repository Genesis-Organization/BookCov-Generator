import React, {useState} from 'react'

import {Container, Input, Select, Button} from '../styled/inputs'
import {Data} from '../types/data'

const Inputs: React.FunctionComponent = (props:any) => {
  const [title, setTitle] = useState('')
  const [part, setPart] = useState(0)
  const [subtitle_a, setSubtitleA] = useState('')
  const [subtitle_b, setSubtitleB] = useState('')
  const [color, setColor] = useState('')
  const [author, setAuthor] = useState('')
  const [icon, setIcon] = useState('')
  const [level, setLevel] = useState(0)

  const changeTitleHandler = (event:any) => {
    const value = event.target.value
    setTitle(value)
  }
  const changePartHandler = (event:any) => {
    const value = event.target.value
    setPart(value)
  }
  const changeSubtitleAHandler = (event:any) => {
    const value = event.target.value
    setSubtitleA(value)
  }
  const changeSubtitleBHandler = (event:any) => {
    const value = event.target.value
    setSubtitleB(value)
  }
  const changeColorHandler = (event:any) => {
    const value = event.target.value
    setColor(value)
  }
  const changeAuthorHandler = (event:any) => {
    const value = event.target.value
    setAuthor(value)
  }
  const changeIconHandler = (event:any) => {
    const value = event.target.value
    setIcon(value)
  }
  const changeLevelHandler = (event:any) => {
    const value = event.target.value
    setLevel(value)
  }

  const generateCanvas = () => {
    const data:Data = {
        TITLE: title.toUpperCase(),
        PART: part,
        SUBTITLE: [subtitle_a, subtitle_b],
        AUTHOR: author,
        color:color,
        icon: icon,
        level: level
    }
    props.onSubmit(data)
  }

  return (
      <Container className="inputs">
        <Input value={title} onChange={changeTitleHandler} id="title" placeholder="Tytuł" />
        <Input value={part} onChange={changePartHandler} id="part" type="number" placeholder="Część" />
        <Input value={subtitle_a} onChange={changeSubtitleAHandler} id="subtitle_a" placeholder="Podtytuł 1" />
        <Input value={subtitle_b} onChange={changeSubtitleBHandler} id="subtitle_b" placeholder="Podtytuł 2" />
        <Input value={color} onChange={changeColorHandler} id="color" placeholder="Kolor (hex)" />
        <Input value={author} onChange={changeAuthorHandler} id="author" placeholder="Autor" />
        <Input value={icon} onChange={changeIconHandler} id="icon" placeholder="Ikona" />
        <Select value={level} onChange={changeLevelHandler} id="level">
        <option value="null">--Wybierz poziom--</option>
        <option value="0">Konieczny</option>
        <option value="1">Podstawowy</option>
        <option value="2">Zaawansowany</option>
        <option value="3">Ekspercki</option>
        </Select>
        <Button id="submit" onClick={()=> generateCanvas()}>
          Generuj
        </Button>
      </Container>
  )
}

export default Inputs

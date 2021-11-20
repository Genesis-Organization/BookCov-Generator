import styled from 'styled-components'

const Inputs: React.FunctionComponent = () => {
  return (
      <Container className="inputs">
        <Input id="title" placeholder="Tytuł" />
        <Input id="part" type="number" placeholder="Część" />
        <Input id="subtitle_a" placeholder="Podtytuł 1" />
        <Input id="subtitle_b" placeholder="Podtytuł 2" />
        <Input id="color" placeholder="Kolor (hex)" />
        <Input id="author" placeholder="Autor" />
        <Input id="icon" placeholder="Ikona" />
        <Select id="level">
        <option>--Wybierz poziom--</option>
        <option value="0">Konieczny</option>
        <option value="1">Podstawowy</option>
        <option value="2">Zaawansowany</option>
        <option value="3">Ekspercki</option>
        </Select>
        <Button id="submit">
          Generuj
        </Button>
      </Container>
  )
}

const Input = styled.input`
  display:block;
  border-radius:5px;
  margin:10px;
  padding:5px;
  width:100%;
  font-family:"Rubik";
  font-size:17px;
  outline:none;
`

const Select = styled.select`
  display:block;
  border-radius:5px;
  margin:10px;
  padding:5px;
  width:100%;
  font-family:"Rubik";
  font-size:17px;
  outline:none;
`

const Button = styled.button`
  display:block;
  border-radius:5px;
  margin:10px;
  padding:5px;
  width:100%;
  font-family:"Rubik";
  font-size:17px;
  outline:none;
  background:#00647d;
  outline:none;
  border:none;
  font-weight:bold;
  color:#e3e3e3;
  padding:10px 5px;
`

const Container = styled.div`
  width:50vw;
  height:40vh;
`

export default Inputs

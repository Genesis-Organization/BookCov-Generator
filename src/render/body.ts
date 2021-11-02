import {styles} from './styles'
import {render} from './canvas'
import {inputs} from './inputs'

export const body:string = `
${styles}

<div>
    ${inputs}
    <button id="submit">Generuj</button>
</div>

<canvas width="825" height="1200" style="display:none;">

<script>

const render = ${render}

document.querySelector('#submit').addEventListener('mousedown', () => {
    const title = document.getElementById('title').value
    const part = document.getElementById('part').value
    const subtitle =
    [document.getElementById('subtitle_a').value,
    document.getElementById('subtitle_b').value]
    const color = document.getElementById('color').value
    const author = document.getElementById('author').value
    const icon = document.getElementById('icon').value
    const level = document.getElementById('level').value

    render(document, {
        TITLE: title.toUpperCase(),
        PART: part,
        SUBTITLE: subtitle,
        AUTHOR: author,
        color:color,
        icon: icon,
        level: level
    })
});
</script>`
import {Data} from '../types/data'

export const render = (c: HTMLCanvasElement | null, data:Data):void => {
    if(c) {
        c.style.display = 'block'
        const ctx = c.getContext("2d")
        const img = new Image()
        const logo = new Image()

        if (ctx) {
            logo.onload = ():void => {
                ctx.fillStyle = "#161616"
                ctx.fillRect(0, 0, c.width, c.height)
                ctx.globalCompositeOperation = "destination-out"
        
                ctx.drawImage(img, 200, 450, 500, 500)
        
                ctx.globalCompositeOperation = "destination-over"
                ctx.fillStyle = data.color
                ctx.fillRect(0, 0, c.width, c.height)
        
                ctx.globalCompositeOperation = "source-over"
        
                ctx.textAlign = "center"
                ctx.fillStyle = "#e3e3e3"
        
                ctx.font = "bold  90px Rubik"
                ctx.fillText(data.TITLE, 452.5, 212.5)
                ctx.font = "40px Rubik"
                ctx.fillText(data.AUTHOR, 452.5, 285)
        
                ctx.fillStyle = data.color
                ctx.fillRect(0,0,80,1200)
        
                ctx.fillStyle = "#e3e3e3"
                
                ctx.font = "bold  20px Rubik"
                ctx.fillText("GENESIS", 710, 1170)
                ctx.drawImage(logo, 680, 1090, 60, 60)
        
        
                if (data.PART != 0) {
                    ctx.textAlign = "left"
                    ctx.font = "bold 40px Rubik"
                    ctx.fillText("Część " + data.PART, 120, 1100)
                    ctx.font = "bold 30px Rubik"
                    ctx.fillText(data.SUBTITLE[0], 120, 1145)
                    ctx.fillText(data.SUBTITLE[1], 120, 1180)
                }
                
                ctx.fillStyle = "#e3e3e3"
                ctx.textAlign = "right"
                ctx.font = "bold 20px Rubik"
                ctx.fillText("POZIOM " + levels[data.level].Number, c.width-20, 30)
                ctx.font = "bold 35px Rubik"
                ctx.fillStyle = levels[data.level].Color
                ctx.fillText(levels[data.level].Name, c.width-20, 70)
            }
        }
        img.src = data.icon
        logo.src = "/icons/genesis.svg"
        console.log(img)
    
        const levels = [{
            Number: "0",
            Name: "KONIECZNY",
            Color:"#66a2b1"
        },{
            Number: "I",
            Name: "PODSTAWOWY",
            Color:"#bada55"
        },{
            Number: "II",
            Name: "ZAAWANSOWANY",
            Color:"#ffc966"
        },{
            Number: "III",
            Name: "EKSPERCKI",
            Color:"#c54f4f"
        }]
    }
        
}
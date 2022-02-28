import { canvas } from "./main"
import { EllipseShape } from "./EllipseShape"
import { RectangleShape } from "./RectangleShape"


export class Scene {
    protected figures: ( EllipseShape | RectangleShape )[] = []
    drawAll(): void{
        for(let item of this.figures){
            item.draw(75, 0, Math.PI*2, true)
            item.movePosition(0,0.1)
        }
    }
  
    addObject(item:( EllipseShape | RectangleShape )): void{
        this.figures.push(item)
    } 
    
    run():void{
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
        this.drawAll()
        requestAnimationFrame(()=>{this.run()});
    }
  }
  
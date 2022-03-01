import { canvas } from "./main"
import { ABaseObject } from "./ABaseObject"

export class Scene {
    protected figures: ( ABaseObject )[] = []
    drawAll(): void{
        for(let item of this.figures){
            item.draw()
            item.movePosition(0,0.1)
        }
    }
  
    addObject(item:( ABaseObject )): void{
        this.figures.push(item)
    } 
    
    run():void{
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
        this.drawAll()
        requestAnimationFrame(()=>{this.run()});
    }
  }
  
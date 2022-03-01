import {ABaseObject} from './ABaseObject'

export class EllipseShape extends ABaseObject {
  protected radius: number
  protected startAngle: number
  protected endAngle: number
  protected anticlockwise: boolean

  constructor(x: number, y: number, width: number, height: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean){ 
    super(x, y, width, height)
    this.radius = radius
    this.startAngle = startAngle
    this.endAngle = endAngle
    this.anticlockwise = anticlockwise
  }
    draw(){
      this.context.beginPath();
      this.context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise);
      this.context.stroke();
    }

    setSize(radius: number, startAngle: number, endAngle: number):void {
      this.radius = radius
      this.startAngle = startAngle
      this.endAngle = endAngle
    }
  
    
}
  

    

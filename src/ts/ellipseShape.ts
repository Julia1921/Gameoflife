import {ABaseObject} from './ABaseObject'

export class EllipseShape extends ABaseObject {
    draw(radius: number, startAngle: number, endAngle: number, anticlockwise: boolean ){
      this.context.beginPath();
      this.context.arc(this.x, this.y, radius, startAngle, endAngle, anticlockwise);
      this.context.stroke();
    }
}
  

    

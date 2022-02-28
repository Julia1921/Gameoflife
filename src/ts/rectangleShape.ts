import {ABaseObject} from './ABaseObject'

export class RectangleShape extends ABaseObject {
  draw(){
    this.context.strokeRect(this.x,this.y,this.width, this.height);
  }

}
  

 
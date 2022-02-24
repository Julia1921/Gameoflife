import {aBaseObject} from './aBaseObject'

export class rectangleShape extends aBaseObject {
  draw(){
    this.context.strokeRect(this.x,this.y,this.width, this.height);
  }

}
  

 
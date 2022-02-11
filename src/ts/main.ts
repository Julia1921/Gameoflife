let canvas = <HTMLCanvasElement>document.getElementById('tutorial')
// function canvasDraw () {
//     if (canvas.getContext) {
//         var ctx = canvas.getContext('2d');
    
//         ctx.strokeRect(25,25,100,100);
//         ctx.strokeRect(130,25,100,100);
//       }
// }
    
// canvasDraw()


class RectangleShape {
  x: number
  y: number
  width: number
  height: number
  context: any

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x
    this.y = y 
    this.width = width
    this.height = height
  }

  setContext(context: any)  {
    this.context = context
  }
  draw(){
    this.context.strokeRect(this.x,this.y,this.width, this.height);
  }
}
const rect = new RectangleShape(25, 25, 100, 100)
rect.setContext(canvas.getContext('2d'))
rect.draw()

// const rect1 = new RectangleShape(0, 0, 100, 100)
// rect.setContext(canvas.getContext('2d'))
// rect.draw()

// const rect2 = new RectangleShape(0, 0, 100, 100)
// rect.setContext(canvas.getContext('2d'))
// rect.draw()

// const rect3 = new RectangleShape(0, 0, 100, 100)
// rect.setContext(canvas.getContext('2d'))
// rect.draw()
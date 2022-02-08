import './scss/style.scss'

let canvas = <HTMLCanvasElement>document.getElementById('tutorial')
function canvasDraw () {
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
    
        ctx.strokeRect(25,25,100,100);
        ctx.strokeRect(130,25,100,100);
      }
}
    
canvasDraw()

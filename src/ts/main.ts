import { EllipseShape } from "./EllipseShape";
import { RectangleShape } from "./RectangleShape";
import { Scene } from "./Scene";

export let canvas = <HTMLCanvasElement>document.getElementById('tutorial')
  
const CIRCLE_1 = new EllipseShape(100, 100, 10, 10)
const SQUARE_1 = new RectangleShape(200, 25, 150, 150)

const SCENE_1 = new Scene()
 SCENE_1.addObject(SQUARE_1)
 SCENE_1.addObject(CIRCLE_1)
 SCENE_1.drawAll()
 SCENE_1.run()
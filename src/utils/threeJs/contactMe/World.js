
import Experience from "./Experience";
import TechCircle from './TechCircle'

export default class World{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.techCircle = new TechCircle()

    }
     update(){
         this.techCircle.update()
     }
}
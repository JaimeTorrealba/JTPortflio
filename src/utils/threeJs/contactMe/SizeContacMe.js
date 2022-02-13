import EventEmitter from "../utils/EventEmitter";
import Experience from './Experience'

export default class Sizes extends EventEmitter {
    constructor(){
        super()
        // Setup
        this.experience = new Experience()
        this.width = this.experience.canvas.offsetWidth
        this.height = this.experience.canvas.offsetHeight
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        // Resize event
        window.addEventListener("resize", () => {
            this.width = this.experience.canvas.offsetWidth
            this.height = this.experience.canvas.offsetHeight
            this.pixelRatio = Math.min(window.devicePixelRatio, 2)
            this.trigger('resize')
          });
    }
}
import { PerspectiveCamera } from 'three'
import Experience from './Experience'
export default class Camera {
    constructor() {
        
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        
        this.setInstance()
    }
    setInstance() {
        this.instance = new PerspectiveCamera(
            75,
            this.sizes.width / this.sizes.height,
            0.1,
            100
        );
        this.instance.position.x = -3
        this.instance.position.y = 0
        this.instance.position.z = 6
        this.scene.add(this.instance);
    }

}
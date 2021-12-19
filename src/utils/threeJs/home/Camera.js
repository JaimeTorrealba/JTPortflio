import { PerspectiveCamera } from 'three'
import Experience from './Experience'

  const cursor = {
      x: 0,
      y: 0,
    };

export default class Camera {
    constructor() {

        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene


        window.addEventListener("mousemove", (event) => {
            cursor.x = event.clientX / this.sizes.width - 0.5;
            cursor.y = -(event.clientY / this.sizes.height - 0.5);
        });

        this.setInstance()
    }
    setInstance() {
        this.instance = new PerspectiveCamera(
            75,
            this.sizes.width / this.sizes.height,
            0.1,
            100
        );
        this.instance.position.x = 0.2
        this.instance.position.y = 0
        this.instance.position.z = 2.5
        this.scene.add(this.instance);
    }
    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }
    update(){
         // Mouse Camera
      this.instance.position.x = cursor.x * 0.5;
      this.instance.position.y = cursor.y * 0.5;
    }
}
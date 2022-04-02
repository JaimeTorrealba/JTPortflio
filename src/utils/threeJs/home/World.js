// import * as THREE from 'three'

import Experience from './Experience'
import Shaders from './Shaders'
import TechCircle from './TechCircle'

export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.shaders = new Shaders()
        this.techCircle = new TechCircle()
    }
    update() {
        this.shaders.update()
        this.techCircle.update()
    }
}

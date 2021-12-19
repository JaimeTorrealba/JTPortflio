// import * as THREE from 'three'

import Experience from "./Experience";
import Shaders from "./Shaders";
import Texts from './Texts'

export default class World{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.text = new Texts()
        this.shaders = new Shaders()

    }
    update(){
        this.shaders.update()
    }
}
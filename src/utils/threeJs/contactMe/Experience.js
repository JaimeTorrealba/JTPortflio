import * as THREE from 'three'
import Resources from '../utils/Resources'
import Time from '../utils/Time'
// unique
import sources from './sources'
import Camera from './Camera'
import Sizes from './SizeContacMe'
import Renderer from './Renderer'
import World from './World'



let instance = null

export default class Experience {
    constructor(canvas) {
        if (instance) { // singleton
            return instance
        }
        instance = this
        //Option
        this.canvas = canvas

        //Setup
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.resources = new Resources(sources)
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()

        //sizes event
        this.sizes.on('resize', () => {
            this.resize()
        })

        //     //time event
        this.time.on('tick', () => {
            this.update()
        })

    }
    update() {
        this.renderer.update()
        this.world.update()
    }
    destroy(){
        this.sizes.off('resize')
        this.time.off('tick')

    //     this.scene.traverse((child) => {
    //         if(child instanceof THREE.Mesh){
    //             child.geometry.dispose()

    //             for(const key in child.material){
    //                 const value = child.material[key]

    //                 if(value && typeof value.dispose === 'function'){
    //                     value.dispose()
    //                 }

    //             }
    //         }
    //     })
    //     this.renderer.instance.dispose()
    //     if(this.debug.active) this.debug.ui.destroy()
    }

}
import * as THREE from 'three'
//Utils
import Resources from '../utils/Resources'
import Sizes from '../utils/Sizes'
import Time from '../utils/Time'
import Debug from '../utils/Debug'
// unique
import Camera from './Camera'
import Renderer from './Renderer'
import World from './World'
import sources from './sources'

let instance = null

export default class Experience {
    constructor(canvas) {
        if (instance) {
            // singleton
            return instance
        }
        instance = this
        //Option
        this.canvas = canvas

        //Setup
        this.center = new THREE.Vector3(0, 0, 5)
        this.debug = new Debug()
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

        //time event
        this.time.on('tick', () => {
            this.update()
        })
    }
    resize() {
        this.camera.resize()
        this.renderer.resize()
    }
    update() {
        this.renderer.update()
        this.camera.update()
        this.world.update()
    }
    destroy() {
        this.sizes.off('resize')
        this.time.off('tick')

        this.scene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.geometry.dispose()

                for (const key in child.material) {
                    const value = child.material[key]

                    if (value && typeof value.dispose === 'function') {
                        value.dispose()
                    }
                }
            }
        })
        this.renderer.instance.dispose()
        if (this.debug.active) this.debug.ui.destroy()
    }
}

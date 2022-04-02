import { TextureLoader } from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import EventEmitter from './EventEmitter'

export default class Resources extends EventEmitter {
    constructor(sources) {
        super()

        //Options
        this.sources = sources

        // Setup
        this.items = {}
        this.toLoad = this.sources.length
        this.loaded = 0

        this.setLoaders()
        this.startLoading()
    }

    setLoaders() {
        this.loaders = {}
        this.loaders.textureLoader = new TextureLoader()
        this.loaders.fontLoader = new FontLoader()
    }
    startLoading() {
        for (const source of this.sources) {
            if (source.type === 'textTexture') {
                this.loaders.textureLoader.load(source.path, (file) => {
                    this.sourceLoaded(source, file)
                })
            }
            if (source.type === 'fontLoader') {
                this.loaders.fontLoader.load(source.path, (file) => {
                    this.sourceLoaded(source, file)
                })
            }
            if (source.type === 'shader') {
                this.sourceLoaded(source, source.path)
            }
        }
    }

    sourceLoaded(source, file) {
        this.items[source.name] = file

        this.loaded++

        if (this.loaded === this.toLoad) {
            this.trigger('ready')
            console.log('ready')
        }
    }
}

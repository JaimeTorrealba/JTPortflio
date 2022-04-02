import * as THREE from 'three'
import Experience from './Experience'

export default class Shaders {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug

        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder('Shaders')
        }

        this.resources.on('ready', () => {
            this.generateGalaxy()
        })
    }

    generateGalaxy() {
        const parameters = {}
        parameters.count = 50000
        parameters.radius = 5
        parameters.branches = 5
        parameters.spin = 1
        parameters.randomness = 0.5
        parameters.randomnessPower = 3
        parameters.insideColor = '#4568DC'
        parameters.outsideColor = '#F7F7F7'

        let geometry = null
        this.material = null
        let points = null

        if (points !== null) {
            geometry.dispose()
            this.material.dispose().scene.remove(points)
        }

        /**
         * Geometry
         */
        geometry = new THREE.BufferGeometry()

        const positions = new Float32Array(parameters.count * 3)
        const colors = new Float32Array(parameters.count * 3)
        const scales = new Float32Array(parameters.count * 1)
        const randomness = new Float32Array(parameters.count * 3)

        const insideColor = new THREE.Color(parameters.insideColor)
        const outsideColor = new THREE.Color(parameters.outsideColor)

        for (let i = 0; i < parameters.count; i++) {
            const i3 = i * 3

            // Position
            const radius = Math.random() * parameters.radius

            const branchAngle =
                ((i % parameters.branches) / parameters.branches) * Math.PI * 2

            positions[i3] = Math.cos(branchAngle) * radius
            positions[i3 + 1] = 0
            positions[i3 + 2] = Math.sin(branchAngle) * radius

            const randomX =
                Math.pow(Math.random(), parameters.randomnessPower) *
                (Math.random() < 0.5 ? 1 : -1) *
                parameters.randomness *
                radius
            const randomY =
                Math.pow(Math.random(), parameters.randomnessPower) *
                (Math.random() < 0.5 ? 1 : -1) *
                parameters.randomness *
                radius
            const randomZ =
                Math.pow(Math.random(), parameters.randomnessPower) *
                (Math.random() < 0.5 ? 1 : -1) *
                parameters.randomness *
                radius

            randomness[i3] = randomX
            randomness[i3 + 1] = randomY
            randomness[i3 + 2] = randomZ

            // Color
            const mixedColor = insideColor.clone()
            mixedColor.lerp(outsideColor, radius / parameters.radius)

            colors[i3] = mixedColor.r
            colors[i3 + 1] = mixedColor.g
            colors[i3 + 2] = mixedColor.b

            //Scale
            scales[i] = Math.random()
        }

        geometry.setAttribute(
            'position',
            new THREE.BufferAttribute(positions, 3)
        )
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
        geometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1))
        geometry.setAttribute(
            'aRandomness',
            new THREE.BufferAttribute(randomness, 3)
        )

        /**
         * Material
         */
        this.material = new THREE.ShaderMaterial({
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            vertexColors: true,
            vertexShader: this.resources.items.vertexShader,
            fragmentShader: this.resources.items.fragmentShader,
            uniforms: {
                uSize: { value: 5 * 1.0 },
                uTime: { value: 0 },
            },
        })

        /**
         * Points
         */
        points = new THREE.Points(geometry, this.material)
        return this.scene.add(points)
    }
    update() {
        if (this.material?.uniforms) {
            this.material.uniforms.uTime.value =
                this.experience.time.elapsed * 0.0015
        }
    }
}

import { Group, Mesh, MeshMatcapMaterial } from 'three'
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import Experience from '../home/Experience'

export default class TechCircle {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.center = this.experience.center

        this.resources.on('ready', () => {
            this.setCircles()
        })
    }

    setCircles() {
        this.loaded = {}
        this.loaded.font = this.resources.items.fonts
        this.outerGroup = new Group();
        this.innerGroup = new Group();
        this.Tech = [];
        const innerCircle = ["VueJS", "ThreeJs", "GSAP", "ReactJs", "JavaScript"];
        const outerCircle = ["CSS", "SVG", "Front-end", "Python", "PHP"];


        //Fonts
        const fontparams = {
            font: this.loaded.font,
            size: 0.15,
            height: 0.1,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.01,
            bevelSize: 0.002,
            bevelOffset: 0,
            bevelSegments: 5
        };


        this.scene.add(this.outerGroup, this.innerGroup);
        // Material
        const material = new MeshMatcapMaterial();

        //Horizontal words
        innerCircle.map((map, index) => {
            const textGeometry = new TextGeometry(
                map,
                fontparams
            );

            let individualTech = null;
            const range = (index % innerCircle.length) / innerCircle.length;
            const angle = range * Math.PI * 2; // Random angle
            const radius = 1 + range; // Random radius
            textGeometry.center();
            individualTech = new Mesh(textGeometry, material);

            const y = Math.cos(angle) * radius;
            const x = Math.sin(angle) * radius;

            individualTech.position.set(x, y, 0);
            this.innerGroup.add(individualTech);
            this.Tech.push(individualTech);
        });

        //verical words
        outerCircle.map((map, index) => {
            const textGeometry = new TextGeometry(
                map,
                fontparams
            );
            const range =
            ((index % outerCircle.length) / outerCircle.length) * 2;
            const angle = range * Math.PI * 2 ; // Random angle
            const radius = 1.5 + range; // Random radius
            textGeometry.computeBoundingBox();
            textGeometry.translate(
                (textGeometry.boundingBox.max.x - 0.02) * -0.5,
                (textGeometry.boundingBox.max.y - 0.02) * -0.5,
                (textGeometry.boundingBox.max.z - 0.03) * 10
                );
            const individualTech = new Mesh(textGeometry, material);
            const y = Math.cos(angle) * radius;
            const x = Math.sin(angle) * radius;

            individualTech.position.set(x, y, 0);
            this.outerGroup.add(individualTech);
            this.Tech.push(individualTech);
        });
    }
    update() {
        if (this.outerGroup && this.innerGroup) {
            this.outerGroup.rotation.z = this.experience.time.elapsed * - 0.00025;
            this.innerGroup.rotation.y = this.experience.time.elapsed * - 0.00025;
            this.Tech.map((elem) => {
                elem.lookAt(this.center);
              });
        }

    }

}

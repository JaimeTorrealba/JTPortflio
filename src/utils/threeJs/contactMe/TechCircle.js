import { Group, Mesh, MeshMatcapMaterial, Vector3 } from 'three'
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
// import { gsap } from 'gsap'

import Experience from './Experience'

export default class TechCircle {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.center = new Vector3( -3, 0, 6 );

        this.resources.on('ready', () => {
            this.setCircles()
        })
    }

    setCircles() {
        this.loaded = {}
        this.loaded.font = this.resources.items.fonts
        this.verticalGroup = new Group();
        this.horizontalGroup = new Group();
        this.Tech = [];
        const horizontalWords = ["VueJS", "ThreeJs", "GSAP", "ReactJs", "JavaScript"];
        const verticalWords = ["CSS", "SVG", "Front-end", "HTML"];


        //Fonts
        const fontparams = {
            font: this.loaded.font,
            size: 0.2,
            height: 0.1,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.01,
            bevelSize: 0.002,
            bevelOffset: 0,
            bevelSegments: 5
        };


        this.scene.add(this.verticalGroup, this.horizontalGroup);
        // Material
        const material = new MeshMatcapMaterial();

        //Horizontal words
        horizontalWords.map((map, index) => {
            const textGeometry = new TextGeometry(
                map,
                fontparams
            );

            let individualTech = null;
            const range = (index % horizontalWords.length) / horizontalWords.length;
            const angle = range * Math.PI * 2; // Random angle
            const radius = 2 + range; // Random radius
            textGeometry.center();
            individualTech = new Mesh(textGeometry, material);

            const y = Math.cos(angle) * radius;
            const x = Math.sin(angle) * radius;

            individualTech.position.set(x, y, 0);
            this.horizontalGroup.add(individualTech);
            this.Tech.push(individualTech);
        });

        //verical words
        verticalWords.map((map, index) => {
            const textGeometry = new TextGeometry(
                map,
                fontparams
            );
            const individualTech = new Mesh(textGeometry, material);
            const range =
                ((index % verticalWords.length) / verticalWords.length) * 2;
            const angle = range * Math.PI * 2; // Random angle
            const radius = 2 + range; // Random radius
            textGeometry.computeBoundingBox();
            textGeometry.translate(
                (textGeometry.boundingBox.max.x - 0.02) * -0.5,
                (textGeometry.boundingBox.max.y - 0.02) * -0.5,
                (textGeometry.boundingBox.max.z - 0.03) * 10
            );
            const y = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;

            individualTech.position.set(0, y, z);
            individualTech.rotation.y = 0; //valor a averiguar
            this.verticalGroup.add(individualTech);
            this.Tech.push(individualTech);
        });
    }
    update() {
        if (this.verticalGroup && this.horizontalGroup) {
            this.verticalGroup.rotation.x = this.experience.time.elapsed * - 0.00015;
            this.horizontalGroup.rotation.y = this.experience.time.elapsed * - 0.00015;
            this.Tech.map((elem) => {
                elem.lookAt(this.center);
              });
        }

    }

}

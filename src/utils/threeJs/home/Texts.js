import { Mesh, MeshMatcapMaterial } from 'three'
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { gsap } from 'gsap'

import Experience from './Experience'


export default class Texts {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources


        this.resources.on('ready', () => {
            this.setTitles()
        })

    }

    setTitles() {
        this.loaded = {}
        this.loaded.texture = this.resources.items.matcaptexture
        this.loaded.font = this.resources.items.fonts


        // /**
        //  * Font
        //  */
        const fontParams = {
            font: this.loaded.font,
            size: 0.15,
            height: 0.1,
            curveSegments: 6,
            bevelEnabled: true,
            bevelThickness: 0.02,
            bevelSize: 0.01,
            bevelOffset: 0,
            bevelSegments: 4,
        };

        const textMaterial = new MeshMatcapMaterial({
            matcap: this.loaded.texture,
            transparent: true,
        });

        // /**
        //  * Title
        //  */

        const textGeometryTitle = new TextGeometry(
            "Jaime Torrealba",
            fontParams
        );
        textGeometryTitle.center();
        const textTitle = new Mesh(textGeometryTitle, textMaterial);
        textTitle.position.y = 0.2;

        // Animation
            
        gsap.from(textTitle.position, {
            duration: 1.3,
            x: 0,
            y: 2,
            z: 0.5,
        });

        // /**
        //  * SubTitle
        //  */

        fontParams.size = 0.1;
        const textGeometrySubTitle = new TextGeometry(
            "Creative Developer",
            fontParams
        );
        textGeometrySubTitle.center();
        const textSubTitle = new Mesh(textGeometrySubTitle, textMaterial);
        textSubTitle.position.y = -0.2;

            // Animation

        gsap.from(textSubTitle.position, {
            duration: 1,
            x: 0,
            y: -2,
            z: 0.5,
        });


        this.scene.add(textTitle, textSubTitle);

    }

}
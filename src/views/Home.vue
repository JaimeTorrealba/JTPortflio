<template>
  <navBar /> 
  <canvas class="webgl"></canvas>
</template>

<script>
import navBar from '../components/navBar.vue'
//Three JS stuff
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import * as dat from "dat.gui";
import { gsap } from "gsap";
//Assets for ThreeJS working
import whiteBluff from "../assets/ThreeJS/whitefluff.png";
import startParticle from "../assets/ThreeJS/startParticle.png";

export default {
  mounted() {
    const canvas = document.querySelector("canvas.webgl");
    const scene = new THREE.Scene();
    /**
     * Helpers and Debugger
     */
    if (process.env.NODE_ENV === "development") {
      console.log("THREE:::", THREE);
      const axesHelper = new THREE.AxesHelper();
      scene.add(axesHelper);
     // const gui = new dat.GUI();
    }
    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    /**
     * Mouse
     */
    const cursor = {
      x: 0,
      y: 0,
    };
    window.addEventListener("mousemove", (event) => {
      cursor.x = event.clientX / sizes.width - 0.5;
      //El eje Y se debe invertir para crear coherencia con THREEJS
      cursor.y = -(event.clientY / sizes.height - 0.5);
    });
    /**
     * Textures
     */
    const textureLoader = new THREE.TextureLoader();
    const matcaptexture = textureLoader.load(whiteBluff);
    const particlesTexture = textureLoader.load(startParticle);
    //"/src/assets/matcaps/whitefluff.png"

    /**
     * Particles
     */
    const particlesGeometry = new THREE.BufferGeometry(1, 32, 32);
    const count = 1000;

    const position = new Float32Array(count * 3); //se multiplica por 3 porque es un obj 3d y cada vertice tiene x y z (3 valores)

    for (let i = 0; i < count * 3; i++) {
      position[i] = (Math.random() - 0.5) * 15;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(position, 3)
    );
    //Material
    const particlesMaterial = new THREE.PointsMaterial();
    particlesMaterial.size = 0.1;
    particlesMaterial.sizeAttenuation = true; //mantendrá siempre el tamaño de las particulas sin importar la distancia
    particlesMaterial.transparent = true;
    particlesMaterial.alphaMap = particlesTexture;
    particlesMaterial.alphaTest = 0.01;
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    /**
     * Font
     */
    const firstRingGroup = new THREE.Group();
    const secondRingGroup = new THREE.Group();
    scene.add(firstRingGroup, secondRingGroup);
    const firstRingWords = ["ThreeJs", "VueJS", "GSAP", "ReactJs", "Flutter"];
    const secondRingWords = [
      "CSS",
      "Figma",
      "Javascript",
      "Python",
      "Git",
      "Dart",
      "AWS",
      "MongoDB",
      "Webpack",
    ];
    const tlFirstRing = gsap.timeline({ repeat: -1, repeatDelay: 0.001 });
    const tlSecondRing = gsap.timeline({ repeat: -1, repeatDelay: 0.001 });
    const fontLoader = new FontLoader();
    fontLoader.load(
      "https://assets.codepen.io/4698468/helvetiker_regular.typeface.json",
      (font) => {
        const fontParams = {
          font: font,
          size: 0.35,
          height: 0.1,
          curveSegments: 6,
          bevelEnabled: true,
          bevelThickness: 0.02,
          bevelSize: 0.01,
          bevelOffset: 0,
          bevelSegments: 4,
        };
        const textGeometryTitle = new TextGeometry(
          "Jaime Torrealba",
          fontParams
        );
        textGeometryTitle.center();
        fontParams.size = 0.25;
        const textGeometrySubTitle = new TextGeometry(
          "Front-end dev",
          fontParams
        );
        textGeometrySubTitle.center();

        const textMaterial = new THREE.MeshMatcapMaterial({
          matcap: matcaptexture,
          transparent: true,
        });
        const textMaterialFirstRing = new THREE.MeshMatcapMaterial({
          matcap: matcaptexture,
          transparent: true,
        });
        const textTitle = new THREE.Mesh(textGeometryTitle, textMaterial);
        const textSubTitle = new THREE.Mesh(textGeometrySubTitle, textMaterial);
        textSubTitle.position.y = -0.9;

        /**
         * First Ring
         */

        firstRingWords.map((map, index) => {
          const textGeometryFirstRingWords = new TextGeometry(map, fontParams);
          const range = (index % firstRingWords.length) / firstRingWords.length;
          const angle = range * Math.PI * 2.2; // Random angle
          const radius = 2.5 + range; // Random radius
          textGeometryFirstRingWords.center();
          const firstRing = new THREE.Mesh(
            textGeometryFirstRingWords,
            textMaterialFirstRing
          );
          const y = Math.cos(angle) * radius;
          const x = Math.sin(angle) * radius;

          firstRing.position.set(x, y, -2);
          firstRing.rotation.y = -0.3;

          firstRingGroup.add(firstRing);
          gsap.from(firstRing.position, {
            duration: 1,
            x: 0,
            y: 2,
            z: 0.5,
          });
          tlFirstRing
            .from(
              firstRing.rotation,
              {
                stagger: { each: 0.1 },
                duration: 1.3,
                x: 0,
                y: 0.3,
                z: 0,
                delay: 0.000015,
              },
              "-=0.5"
            )
            .yoyo(true);
        });

        fontParams.bevelThickness = 0.01;
        secondRingWords.map((map, index) => {
          const textGeometrySecondRingWords = new TextGeometry(map, fontParams);

          const range =
            (index % secondRingWords.length) / secondRingWords.length;
          const angle = range * Math.PI * 2; // Random angle
          const radius = 4.5 + range; // Random radius
          textGeometrySecondRingWords.center();
          const secondRing = new THREE.Mesh(
            textGeometrySecondRingWords,
            textMaterial
          );

          const y = Math.cos(angle) * radius;
          const x = Math.sin(angle) * radius;
          secondRing.position.set(x, y, -2.5);
          secondRing.rotation.y = 0.3;

          tlSecondRing
            .from(
              secondRing.rotation,
              {
                stagger: { each: 0.1 },
                duration: 1,
                x: 0,
                y: -0.3,
                z: 0,
                delay: 0.000015,
              },
              "-=0.5"
            )
            .yoyo(true);

          secondRingGroup.add(secondRing);
        });

        /**
         * Start animation Titles 
         */

        gsap.from(textTitle.position, {
          duration: 1.3,
          opacity: 1,
          x: 0,
          y: 2,
          z: 0.5,
        });
        gsap.from(textSubTitle.position, {
          duration: 1,
          opacity: 0,
          x: 0,
          y: -2,
          z: 0.5,
        });
        scene.add(textTitle, textSubTitle);
      }
    );

    /**
     * Camera
     */
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 0.2;
    camera.position.y = 0;
    camera.position.z = 5;
    scene.add(camera);

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    /**
     * Animate
     */
    //start animation second ring
    gsap.from(secondRingGroup.position, {
      duration: 1.3,
      opacity: 1,
      x: 0,
      y: 2,
      z: 0.5,
      delay: 0.25,
    });

    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      // Render
      renderer.render(scene, camera);
      // Mouse Camera
      camera.position.x = cursor.x;
      camera.position.y = cursor.y;
      secondRingGroup.lookAt(
        camera.position.x * 1.05,
        camera.position.y,
        camera.position.z
      );
      firstRingGroup.lookAt(
        camera.position.x * -1.05,
        camera.position.y,
        camera.position.z
      );
      // camera.updateProjectionMatrix = camera.lookAt( 0, 0, 0 );
      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  },
  components:{
    navBar,
  }
};
</script>

<style>
.webgl {
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
  z-index:-100;
}
</style>

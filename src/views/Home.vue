<template>
  <canvas class="webgl"></canvas>
</template>

<script>
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import * as dat from "dat.gui";

export default {
  mounted() {
    console.log('THREE:::',THREE);
    const canvas = document.querySelector("canvas.webgl");
    const scene = new THREE.Scene();

    /**
     * Helpers and Debugger
     */
    const axesHelper = new THREE.AxesHelper();
    scene.add(axesHelper);

    const gui = new dat.GUI();

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
    const matcaptexture = textureLoader.load(
      "/src/assets/matcaps/whitefluff.png"
    );
    const particlesTexture = textureLoader.load(
      "https://assets.codepen.io/4698468/startParticle.png"
    );
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
    //material
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
    const firstRingWords = [
      "ThreeJs",
      "VueJS",
      "GSAP",
      "ReactJs",
      "Flutter",
    ];
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

    const fontLoader = new FontLoader();
    fontLoader.load(
      "/src/assets/fonts/helvetiker_regular.typeface.json",
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

        const material = new THREE.MeshMatcapMaterial({
          matcap: matcaptexture,
        });
        const textTitle = new THREE.Mesh(textGeometryTitle, material);
        const textSubTitle = new THREE.Mesh(textGeometrySubTitle, material);
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
          const firstRingWord = new THREE.Mesh(
            textGeometryFirstRingWords,
            material
          );

          const y = Math.cos(angle) * radius;
          const x = Math.sin(angle) * radius;

          firstRingWord.position.set(x, y, -2);
          firstRingGroup.add(firstRingWord);
          
        });
        fontParams.bevelThickness = 0.01
        secondRingWords.map((map, index) => {
          const textGeometrySecondRingWords = new TextGeometry(map, fontParams);
          const range = (index % secondRingWords.length) / secondRingWords.length;
          const angle = range * Math.PI * 2; // Random angle
          const radius = 4.5 + range; // Random radius
          textGeometrySecondRingWords.center();
          const secondRingWord = new THREE.Mesh(
            textGeometrySecondRingWords,
            material
          );

          const y = Math.cos(angle) * radius;
          const x = Math.sin(angle) * radius;

          secondRingWord.position.set(x, y, -2.5);
          secondRingGroup.add(secondRingWord);
          
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
    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Render
      renderer.render(scene, camera);
      // Mouse Camera
      camera.position.x = cursor.x;
      camera.position.y = cursor.y;

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  },
};
</script>

<style>
.webgl {
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
}
</style>

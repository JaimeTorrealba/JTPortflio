<template>
  <navBar />
  <canvas class="webgl"></canvas>
</template>

<script>
import navBar from "../components/navBar.vue";
//Three JS stuff
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import * as dat from "dat.gui";
import { gsap } from "gsap";
//Assets for ThreeJS working
import whiteBluff from "../assets/ThreeJS/assets/whitefluff.png";
import galaxyVertexShader from '../assets/ThreeJS/shaders/particlesCircle/vertex.glsl'
import galaxyVertexFragment from '../assets/ThreeJS/shaders/particlesCircle/fragment.glsl'

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
    const parameters = {};
    parameters.count = 200000;
    parameters.size = 0.005;
    parameters.radius = 5;
    parameters.branches = 3;
    parameters.spin = 1;
    parameters.randomness = 0.5;
    parameters.randomnessPower = 3;
    parameters.insideColor = "#ff6030";
    parameters.outsideColor = "#1b3984";

    let geometry = null;
    let material = null;
    let points = null;

    const generateGalaxy = () => {
      if (points !== null) {
        geometry.dispose();
        material.dispose().scene.remove(points);
      }

      /**
       * Geometry
       */
      geometry = new THREE.BufferGeometry();

      const positions = new Float32Array(parameters.count * 3);
      const colors = new Float32Array(parameters.count * 3);
      const scales = new Float32Array(parameters.count * 1);
      const randomness = new Float32Array(parameters.count * 3);

      const insideColor = new THREE.Color(parameters.insideColor);
      const outsideColor = new THREE.Color(parameters.outsideColor);

      for (let i = 0; i < parameters.count; i++) {
        const i3 = i * 3;

        // Position
        const radius = Math.random() * parameters.radius;

        const branchAngle =
          ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

        positions[i3] = Math.cos(branchAngle) * radius;
        positions[i3 + 1] = 0;
        positions[i3 + 2] = Math.sin(branchAngle) * radius;

        const randomX =
          Math.pow(Math.random(), parameters.randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          parameters.randomness *
          radius;
        const randomY =
          Math.pow(Math.random(), parameters.randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          parameters.randomness *
          radius;
        const randomZ =
          Math.pow(Math.random(), parameters.randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          parameters.randomness *
          radius;

        randomness[i3] = randomX;
        randomness[i3 + 1] = randomY;
        randomness[i3 + 2] = randomZ;

        // Color
        const mixedColor = insideColor.clone();
        mixedColor.lerp(outsideColor, radius / parameters.radius);

        colors[i3] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;

        //Scale
        scales[i] = Math.random();
      }

      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
      geometry.setAttribute(
        "aRandomness",
        new THREE.BufferAttribute(randomness, 3)
      );

      /**
       * Material
       */
      material = new THREE.ShaderMaterial({
        size: parameters.size,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true,
        vertexShader: galaxyVertexShader,
        fragmentShader: galaxyVertexFragment,
        uniforms: {
          uSize: { value: 5 * 1.0 },
          uTime: { value: 0 },
        },
      });

      /**
       * Points
       */
      points = new THREE.Points(geometry, material);
      return scene.add(points);
    };

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

    /**
     * Font
     */
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

        const textTitle = new THREE.Mesh(textGeometryTitle, textMaterial);
        const textSubTitle = new THREE.Mesh(textGeometrySubTitle, textMaterial);
        textSubTitle.position.y = -0.9;
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
    camera.position.z = 7;
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
     * Galaxy
     */

    generateGalaxy();
    console.log(generateGalaxy);

    /**
     * Animate
     */

    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      //animated galaxy
      material.uniforms.uTime.value = elapsedTime

      // Render
      renderer.render(scene, camera);
      // Mouse Camera
      camera.position.x = cursor.x * 0.5;
      camera.position.y = cursor.y * 0.5;
      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  },
  components: {
    navBar,
  },
};
</script>

<style>
.webgl {
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
  z-index: -100;
}
</style>

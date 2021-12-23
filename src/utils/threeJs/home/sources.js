import whiteBluff from "../../../assets/ThreeJS/assets/whitefluff.png";
import vertexShader from "../shaders/particlesCircle/vertex.glsl";
import fragmentShader from "../shaders/particlesCircle/fragment.glsl";


export default [
    {
        name: 'matcaptexture',
        type: 'textTexture',
        path: whiteBluff
    },
    {
        name: 'fonts',
        type: 'fontLoader',
        path: 'https://assets.codepen.io/4698468/helvetiker_regular.typeface.json'
    },
    {
        name: 'fragmentShader',
        type: 'shader',
        path: fragmentShader
    },
    {
        name: 'vertexShader',
        type: 'shader',
        path: vertexShader
    },

]
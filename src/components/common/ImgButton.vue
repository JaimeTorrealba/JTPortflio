<script>
export default {
    props: {
        address: {
            required: true,
            type: String,
        },
    },
}
</script>
<template>
    <a
        class="button-layout button-neumorphic"
        role="button"
        target="_blanc"
        :href="address"
    >
        <slot name="Title" />
        <slot name="Img" />
    </a>
</template>
<style lang="scss" scoped>
a {
    position: relative;
}
a:before {
    content: '#';
    font-size: 2rem;
    color: var(--black);
    position: absolute;
    left: 5%;
    opacity: 0;
    transition: opacity 0.5s;
}
a:hover:before {
    opacity: 1;
}
a:after {
  content: "";
  position: absolute;
  width: 100%;
  top: 97%;
  left: 0;
  height: 3%;
  transform: scale(0);
  transform-origin: top left;
  transition: 0.75s;
  background: var(--black);
}
a:hover:after {
  transform: scaleX(1);
}

.button-layout {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: var(--small);
}

.button-neumorphic {
    cursor: pointer;
    transition: all 0.3s ease;
    outline: none;
    border-radius: var(--radiusbutton);
    border: none;
    background: #efefef;
    box-shadow: 2px 2px 4px #c8d0e7, -1px -1px 3px #fff;
}
.button-neumorphic:active {
    box-shadow: inset 1px 1px 3px #c8d0e7, inset -1px -1px 3px #fff;
}
</style>

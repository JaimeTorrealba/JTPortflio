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
<script>
export default {
  props: {
    address: {
      required: true,
      type: String,
    }
  },
};
</script>
<style lang="scss" scoped>
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

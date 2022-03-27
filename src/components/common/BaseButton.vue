<template>
  <button class="base" :class="isDisabled ? 'disabled-class' : variant">{{ text }}</button>
</template>
<script>

export default {
  props: {
    variant: {
      type: String,
      required: false,
      default: "normal",
    },
    text: {
      type: String,
      required: false,
      default: 'Button'
    },
    isDisabled:{
      type: Boolean,
      required: false,
      default: false
    }
  },
};
</script>
<style lang="scss" scoped>
.base {
  margin: var(--large) 0 0 0;
  max-width: 200px;
  border: none;
  border-radius: var(--radiusbutton);
  padding: var(--normal);
  cursor: pointer;
  z-index: 1;
  position: relative;
  display: inline-block;
}
.base:focus {
  outline: none;
}
.base:focus-visible {
  outline: max(1px, 0.1em) dashed currentColor;
  outline-offset: -0.25em;
}
.disabled-class {
  color: var(--gray);
}
.success {
  transition: all 0.3s ease;
  color: var(--gray);
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1);
  background: var(--blue);
}
.success:hover:after {
  width: 100%;
  left: 0;
}
.success:after {
  border-radius: 5px;
  position: absolute;
  content: "";
  width: 0;
  height: 100%;
  top: 0;
  z-index: -1;
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1);
  transition: all 0.3s ease;
  background-color: #3a86ff;
  right: 0;
}
.success:active {
  top: 2px;
}
</style>

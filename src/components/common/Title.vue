<template>
  <h1 :class="color ? 'black' : 'white' ">{{text}}</h1>
</template>
<script>
export default {
  name: "Title",
  props: {
    text: { required: true, type: String },
    color: { required: false, type: Boolean, default: true},
  },
};
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;
}
.black{
    color:var(--black);
}
.white{
    color:var(--black);
}
</style>

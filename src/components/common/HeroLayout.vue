<template>
  <div>
    <slot name="Title" />
    <div class="parragraph">
      <slot name="Text" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.parragraph {
  margin: var(--normal) auto;
  padding: 0 var(--small);
  max-width: 80%;
  @media screen and (max-width: 600px) {
    max-width: 100%;
  }
}
</style>

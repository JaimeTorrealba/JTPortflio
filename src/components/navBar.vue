<template>
  <nav>
    <router-link to="/">Home</router-link>
    <ul class="navBar">
      <li><router-link to="">Projects</router-link></li>
      <li><router-link to="">Blog</router-link></li>
      <li><router-link to="">About me</router-link></li>
      <li><router-link to="">CV</router-link></li>
      <li><router-link to="">Playing</router-link></li>
      <li><router-link to="/contacme">Contact me</router-link></li>
    </ul>
  </nav>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
nav{
  display: flex;
  justify-content: space-between;
  padding: var(--small);
}
.navBar {
  color: white;
  display: flex;
  justify-content: flex-end;
  list-style: none;
}
  /* gab */
 .navBar > li {
  margin: 0 var(--small);
}
 a {
  text-decoration: none;
  color: var(--white);
}
</style>

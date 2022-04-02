<template>
    <nav>
        <div class="nav_wrapper">
            <a href="/">Home</a>
            <ul class="navBar">
                <!-- <li><router-link to="">Projects</router-link></li>
      <li><router-link to="">Blog</router-link></li>
      <li><router-link to="">About me</router-link></li>
      <li><router-link to="">CV</router-link></li>
      <li><router-link to="">Playing</router-link></li> -->
                <li><router-link to="/contacme">Contact me</router-link></li>
            </ul>
        </div>
    </nav>
</template>
<style lang="scss" scoped>
nav {
    position: absolute;
    width: 100%;
    z-index: 100;
}
.nav_wrapper {
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
    font-size: var(--normal);
}
</style>

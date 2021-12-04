<template>
  <div class="container cloud-container">
    <ul class="cloud">
      <li><a data-weight="3"> Linkedin </a></li>
      <li><a data-weight="5"> Instagram </a></li>
      <li><a data-weight="2"> Behance </a></li>
      <li><a data-weight="9"> Linkedin </a></li>
      <li><a data-weight="7"> Codepen </a></li>
      <li><a data-weight="6"> Medium </a></li>
      <li><a data-weight="5"> Dribbble </a></li>
      <li><a data-weight="4"> Gmail </a></li>
      <li><a data-weight="5"> Berlin </a></li>
      <li><a data-weight="1"> Google develop profile </a></li>
      <li><a data-weight="7"> Github </a></li>
      <li><a data-weight="6"> VueJobs </a></li>
    </ul>
  </div>
</template>
<script>
import { gsap } from "gsap";
export default {
  mounted() {
    document.querySelectorAll("ul.cloud a").forEach((i) => {
      i.style.setProperty("--size", i.dataset.weight);
    });
    console.log(gsap);
    gsap.from("a", {
      duration: 1.3,
      opacity: 1,
      x: 100,
      y: 100,
      delay: 0.1,
      opacity: 0,
      ease: "power1.inOut",
      stagger:0.1
    });
  },
};
</script>
<style lang="scss" scoped>
.cloud-container {
  max-width: 50vw;
}
ul.cloud {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  line-height: 4rem;
}

ul.cloud a {
  --size: 4;
  color: #333;
  display: block;
  padding: 0.125rem 0.25rem;
  text-decoration: none;
  position: relative;
  font-size: calc(var(--size) * 0.7rem);
}
ul.cloud[data-show-value] a::after {
  content: " (" attr(data-weight) ")";
  font-size: 1rem;
}
</style>

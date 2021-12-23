<template>
  <div class="container cloud-container">
    <ul class="cloud">
      <li>
        <a
          href="https://twitter.com/JaimeTorrealbaC"
          target="_blank"
          class="cloud-tag-link"
          data-weight="5"
        >
          Twitter
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/jaimebboyjt/"
          target="_blank"
          class="cloud-tag-link"
          data-weight="4"
        >
          Instagram
        </a>
      </li>
      <li>
        <a
          href="https://dev.page/jaimetorrealba"
          target="_blank"
          class="cloud-tag-link"
          data-weight="2"
        >
          Dev.page
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/jaime-torrealba-cordova/"
          target="_blank"
          class="cloud-tag-link"
          data-weight="7"
        >
          Linkedin
        </a>
      </li>
      <li>
        <a
          href="https://www.behance.net/JaimeTorrealba"
          target="_blank"
          class="cloud-tag-link"
          data-weight="2"
        >
          Behance
        </a>
      </li>
      <li>
        <a
          href="https://codepen.io/https://codepen.io/jaimebboyjt"
          target="_blank"
          class="cloud-tag-link"
          data-weight="8"
        >
          Codepen
        </a>
      </li>
      <li>
        <a
          href="https://medium.com/@solucionesinformaticasjtc"
          target="_blank"
          class="cloud-tag-link"
          data-weight="5"
        >
          Medium
        </a>
      </li>
      <li>
        <a
          href="https://dribbble.com/Jaime_Torrealba"
          target="_blank"
          class="cloud-tag-link"
          data-weight="2"
        >
          Dribbble
        </a>
      </li>
      <li>
        <a
          href="mailto:solucionesinformaticasjtc@gmail.com"
          target="_blank"
          class="cloud-tag-link"
          data-weight="4"
        >
          Gmail
        </a>
      </li>
      <li>
        <a
          href="https://wa.me/+56990594384"
          target="_blank"
          class="cloud-tag-link"
          data-weight="4"
        >
          Whatsapp
        </a>
      </li>
      <li>
        <a
          href="https://developers.google.com/profile/u/116357600065857102354"
          target="_blank"
          class="cloud-tag-link"
          data-weight="2"
        >
          Google-profile
        </a>
      </li>
      <li>
        <a
          href="https://github.com/JaimeTorrealba"
          target="_blank"
          class="cloud-tag-link"
          data-weight="7"
        >
          Github
        </a>
      </li>
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

    // Animacion inicial

    gsap.from(".cloud-tag-link", {
      duration: 1.3,
      opacity: 1,
      x: 100,
      y: 100,
      delay: 0.1,
      opacity: 0,
      ease: "power1.inOut",
      stagger: 0.1,
    });

    // Timeline
    setTimeout(() => {  
      let tl = gsap.timeline({repeat: -1, repeatDelay: 0.5});
      tl.to(".cloud-tag-link", {x: 10, duration: 1, stagger: 0.1,});
      tl.to(".cloud-tag-link", {x: 0, duration: 1, stagger: 0.1,});
    }, 5000);



  },
};
</script>
<style lang="scss" scoped>
.cloud-container {
  min-width: 50vw;
  background: transparent;
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
  color: var(--black);
  display: block;
  padding: 0.125rem 0.25rem;
  text-decoration: none;
  position: relative;
  font-size: calc(var(--size) * 0.7rem);
  transition: font 0.75s;
}
ul.cloud a:hover {
  font-size: calc(var(--size) * 0.72rem);
  color: rgba($color: var(--black), $alpha: 0.7);
}
ul.cloud[data-show-value] a::after {
  content: " (" attr(data-weight) ")";
  font-size: 1rem;
}
</style>

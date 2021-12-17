<template>
  <div class="container cloud-container gradient-background">
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
          href="https://codepen.io/https://codepen.io/jaimebboyjt"
          target="_blank"
          class="cloud-tag-link"
          data-weight="9"
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
          Google develop profile
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
    console.log(gsap);
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
  },
};
</script>
<style lang="scss" scoped>
.cloud-container {
  max-width: 50vw;
}
.gradient-background {
  background: radial-gradient(
    circle,
     rgba(171,200,223,1) 0%,
    rgba(111,110,110,1) 25%,
    var(--black) 55%
  );
  animation: gradients 2s ease infinite;
}

@keyframes gradients {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
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
  color: var(--white);
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

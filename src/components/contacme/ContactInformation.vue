<template>
  <div class="contact-info">
      <Title text="RRSS" :level="3" />
    <ImgButton address="https://www.linkedin.com/in/jaime-torrealba-cordova/">
      <template #Title>
        <Title text="Linkedin" :level="3" />
      </template>
      <template #Img
        ><img
          class="img"
          src="../../assets/img/linkedin.svg"
          alt="linkedin logo"
        />
      </template>
    </ImgButton>
    <ImgButton address="https://github.com/JaimeTorrealba">
      <template #Title>
        <Title text="Github" :level="3" />
      </template>
      <template #Img>
        <img class="img" src="../../assets/img/github.svg" alt="github logo" />
      </template>
    </ImgButton>
    <ImgButton address="https://twitter.com/JaimeTorrealbaC">
      <template #Title>
        <Title text="Twitter" :level="3" />
      </template>
      <template #Img>
        <img
          class="img"
          src="../../assets/img/twitter.svg"
          alt="twitter logo"
        />
      </template>
    </ImgButton>
  </div>
</template>
<script>
import ImgButton from "../common/ImgButton.vue";
import Title from "../common/Title.vue";
export default {
  components: {
    ImgButton,
    Title,
  },
};
</script>
<style lang="scss" scoped>
.contact-info{
  background-color: var(--lightblue);
  border-radius: 97% var(--radiuslayout) 100% 0% / 0% 10% 0% 100%  ;
}

.img {
  width: 33%;
  padding: 0 0 var(--small);
}
</style>

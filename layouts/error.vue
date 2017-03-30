<template>
  <section id="error">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" />
    <h1 class="title">
      {{ error.statusCode }}
    </h1>
    <h2 class="info">
      {{ error.message }}
    </h2>
    <nuxt-link class="button" to="/" v-if="error.statusCode === 404">
      Homepage
    </nuxt-link>
  </section>
</template>
<script>
export default {
  props: ['error']
}
</script>

<style scoped>
#error{
  position: absolute;
  top: 0;
  left: 0;
  right:0;
  bottom:0;
  margin: auto;
  width: 100%;
  height: 500px;
  text-align: center;
}
#error .title
{
  margin-top: 30px;
  font-size: 5em;
  margin-bottom: 30px;
}
#error .info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
}
#error .button
{
  display: inline-block;
  margin-top: 30px!important;
}
#error .nuxt-link-active{
  color: #5e6d82;
  font-size: 20px;
  font-weight: 300;
}
</style>

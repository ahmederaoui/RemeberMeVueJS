<template>
  <the-header title="RememberMe"></the-header>
  <the-resource></the-resource>
</template>

<script>
import theResource from "./components/learning-resources/theResource.vue"
import theHeader from "./components/layouts/theHeader.vue"
export default {
  components: {
    theResource,
    theHeader
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
html{
  font-family: Arial, Helvetica, sans-serif;
}
body{
  margin: 0;
}
</style>

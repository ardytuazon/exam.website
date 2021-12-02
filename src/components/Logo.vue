<template>
  <div class="logo">
    <div class="blue"></div>
    <div class="green"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  display: flex;
  flex-direction: row;
}
.logo div.blue {
  background: var(--main-blue);
}
.logo div.green {
  background: var(--main-green);
}
</style>
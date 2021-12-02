<template>
  <h2>
    <slot name="text-header">Default Header</slot>
  </h2>
  <p>
    <slot name="text-subheader">Default Subheader</slot>
  </p>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  font-size: 2rem;
}
</style>
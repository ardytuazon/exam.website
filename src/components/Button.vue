<template>
  <button class="main-btn"><slot /></button>
</template>

<script>
export default {};
</script>

<style scoped>
button.main-btn {
  background: var(--main-blue);
  border: none;
  color: white;
  padding: 15px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.04em;
  font-weight: bold;
  cursor: pointer;
  border-radius: 20px;
}
button.main-btn:hover {
  opacity: 0.8;
  transition: 0.2s ease-in;
}
</style>
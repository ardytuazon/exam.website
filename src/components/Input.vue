<template>
  <input :type="type" :id="name" :name="name" :placeholder="placeholder" />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
input {
  outline: none;
  border: 0;
  font-size: inherit;
  min-width: 300px;
  margin: 0 25px;
}
</style>
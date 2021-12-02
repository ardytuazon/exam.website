<template>
  <div class="card">
    <div class="card-title">
      <h3 style="margin-top: 10px">{{ data.title }}</h3>
    </div>
    <div class="card-img">
      <img
        src="@/assets/images/service-image.png"
        class="image-heading"
        alt="Image Heading"
      />
    </div>
    <div class="description">{{ data.description }}</div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  background: #ffffff;
  text-align: center;
  border-radius: 15px;
  padding: 25px 35px;
  filter: drop-shadow(4px 4px 12px #00000021);
}
img.image-heading {
  margin-bottom: 10px;
}
</style>
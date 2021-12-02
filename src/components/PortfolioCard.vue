<template>
  <div
    v-if="selected === data.item || selected === 'all'"
    :class="'preview ' + data.item.toLowerCase()"
  >
    <div class="portfolio-card">
      <div class="card-item">
        <div class="card-img">
          <img :src="data.image" class="image-heading" alt="Image Heading" />
          <span class="category">{{ data.item }}</span>
        </div>
        <div class="card-title">{{ data.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.portfolio-card {
  padding: 0 15px 0 10px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
  filter: drop-shadow(4px 4px 12px #00000021);
}
.portfolio-card .card-item .card-img img {
  border-radius: 40px;
}
.portfolio-card .card-item .card-img {
  position: relative;
}
span.category {
  position: absolute;
  left: 20px;
  bottom: 30px;
  background: var(--main-blue);
  color: #fff;
  padding: 5px 10px;
  font-size: 0.8rem;
  border-radius: 20px;
}
.portfolio-card .card-item .card-title {
  margin: 0 20px;
  position: absolute;
}
.card-item {
  position: relative;
  top: -40px;
  left: -10px;
}
img.image-heading {
  margin-bottom: 10px;
}
.preview {
  animation: appear 0.3s ease-in-out forwards;
}
@keyframes appear {
  from {
    transform: scale(0.6);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */
</style>
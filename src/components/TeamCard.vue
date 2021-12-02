<template>
  <div class="teams">
    <div v-for="(item, index) in filteredItems" :key="index">
      <div class="card" :class="{ active: index === 2 }">
        <div class="card-img">
          <img :src="item.picture" class="image-heading" alt="Image Heading" />
        </div>
        <div class="card-title">
          <h3>{{ item.fname }} {{ item.lname }}</h3>
        </div>
        <div class="description">{{ item.position }}</div>
      </div>
    </div>
  </div>
  <div class="pagination">
    <div class="btn-group">
      <button @click="paginateBack" class="paginate-btn" :disabled="start <= 1">
        <i class="fa fa-arrow-left"></i>
      </button>
      <button
        @click="paginateNext"
        class="paginate-btn"
        :disabled="this.data.length <= end"
        :class="{ disablsse: this.data.length <= end }"
      >
        <i class="fa fa-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  setup: (props) => {
    const start = ref(1);
    const end = ref(5);
    const perPage = ref(1);
    const filteredItems = computed(() => {
      const s = start.value - 1;
      const e = end.value;

      return props.data.slice(s, e);
    });
    const paginateNext = () => {
      const max = props.data.length;
      if (end.value < max) {
        start.value += perPage.value;
        end.value += perPage.value;
      }
    };
    const paginateBack = () => {
      if (start.value > 0) {
        start.value -= perPage.value;
        end.value -= perPage.value;
      }
    };

    return {
      start,
      end,
      perPage,
      filteredItems,
      paginateNext,
      paginateBack,
    };
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
  transition: all linear 0.7s;
}
.card .card-title h3 {
  margin-bottom: 10px;
}
img.image-heading {
  margin-bottom: 10px;
  width: 260px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
}
button.paginate-btn i {
  padding: 5px 10px;
  font-size: 1.5rem;
  color: #fff;
}
button.paginate-btn {
  cursor: pointer;
  border: 0;
  background: transparent;
}
button.paginate-btn:disabled i {
  color: unset;
}
button.paginate-btn:disabled:hover i {
  color: unset;
}
.card.active {
  padding: 25px 35px 45px 35px;
}
</style>
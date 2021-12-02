<template>
  <div class="portfolio">
    <div class="portfolio-btn">
      <button
        @click="filter('all')"
        :class="{ selected: selectedItem === 'all' }"
      >
        All Work
      </button>
      <button
        v-for="(category, index) in categories"
        :key="index"
        @click="filter(category.category)"
        :class="{ selected: selectedItem === category.category }"
      >
        {{ category.category }}
      </button>
    </div>
    <div
      v-for="(preview, index) in items"
      :key="index"
      :class="'preview ' + preview.item"
    >
      <div v-if="selectedItem === preview.item || selectedItem === 'all'">
        selecteditems {{ selectedItem }} <br />
        {{ preview.item }}
      </div>
    </div>
    <div class="items">
      <div class="portfolio-item">
        <PortfolioCard
          v-for="(item, index) in portfolio"
          :key="index"
          :data="item"
          :selected="selectedItem"
        />
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import {} from "vue";
import PortfolioCard from "@/components/PortfolioCard.vue";
export default {
  components: {
    PortfolioCard,
  },
  // setup: () => {
  // return {
  //   categories: ["All Work", "Website", "Branding", "App", "Social Media"],
  // };
  // onMounted(() => {
  //   this.items = _.shuffle(this.items);
  // });
  // const filteredItems = computed((selection) => {
  //   return (this.selectedItem = selection);
  // });
  //   return {
  //     categories: [
  //       {
  //         category: "website",
  //         title: "Website",
  //       },
  //       {
  //         category: "branding",
  //         title: "Branding",
  //       },
  //       {
  //         category: "app",
  //         title: "App",
  //       },
  //       {
  //         category: "socmed",
  //         title: "Social Media",
  //       },
  //     ],
  //     items: [
  //       { item: "website" },
  //       { item: "website" },
  //       { item: "branding" },
  //       { item: "branding" },
  //       { item: "branding" },
  //       { item: "app" },
  //       { item: "socmed" },
  //       { item: "socmed" },
  //       { item: "socmed" },
  //     ],
  //     selectedItem: "all",
  //     filteredItems: "",
  //   };
  // },
  data() {
    return {
      categories: [
        {
          category: "Website",
          title: "Website",
        },
        {
          category: "Branding",
          title: "Branding",
        },
        {
          category: "App",
          title: "App",
        },
        {
          category: "Social",
          title: "Social Media",
        },
      ],
      portfolio: [
        {
          item: "App",
          image: "https://picsum.photos/id/1/400/300",
          title: "Weather And News App",
        },
        {
          item: "App",
          image: "https://picsum.photos/id/2/400/300",
          title: "Weather And News App",
        },
        {
          item: "App",
          image: "https://picsum.photos/id/3/400/300",
          title: "Weather And News App",
        },
        {
          item: "Branding",
          image: "https://picsum.photos/id/4/400/300",
          title: "Coco Oil",
        },
        {
          item: "Branding",
          image: "https://picsum.photos/id/5/400/300",
          title: "Think Tank",
        },
        {
          item: "Branding",
          image: "https://picsum.photos/id/6/400/300",
          title: "Media Inc",
        },
        {
          item: "App",
          image: "https://picsum.photos/id/7/400/300",
          title: "Crypto App",
        },
        {
          item: "Social",
          image: "https://picsum.photos/id/8/400/300",
          title: "Coco Oil",
        },
        {
          item: "Website",
          image: "https://picsum.photos/id/9/400/300",
          title: "Some Company",
        },
      ],
      selectedItem: "all",
    };
  },

  methods: {
    filter(selection) {
      this.selectedItem = selection;
    },
  },
  mounted() {
    this.portfolio = _.shuffle(this.portfolio);
  },
};
</script>

<style scoped>
.portfolio-item {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 50px;
  row-gap: 70px;
}
.portfolio-btn {
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
}
.portfolio-btn button {
  font-size: 1.36rem;
  font-weight: 500;
  color: #262222;
  border: 3px solid #47e1ae;
  background: #47e1ae;
  line-height: 40px;
  cursor: pointer;
  margin: 20px;
}
.portfolio-btn button.selected {
  border-bottom: 3px solid #fff !important;
  color: #fff;
  line-height: 40px;
}
.portfolio-btn button:hover {
  color: #fff;
}
</style>
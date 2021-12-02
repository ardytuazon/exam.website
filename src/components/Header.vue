<template>
  <header id="header" class="clear">
    <div class="wrapper">
      <div>
        <a href="#" class="nav-link nav-logo">
          <h2><Logo /> Website</h2>
        </a>
      </div>
      <nav>
        <ul>
          <li v-for="(item, index) in header" :key="index">
            <a :href="item.to" class="nav-link"
              ><i v-if="item.icon" :class="item.icon"></i> {{ item.title }}</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from "@/components/Logo.vue";
export default {
  components: {
    Logo,
  },
  setup: () => {
    return {
      header: [
        {
          to: "#services",
          title: "Our Service",
        },
        {
          to: "#about-us",
          title: "About Us",
        },
        {
          to: "#portfolio",
          title: "Portfolio",
        },
        {
          to: "#contact",
          title: "Contact",
        },
        {
          to: "#",
          title: "Get Quote",
          icon: "fa fa-arrow-right",
        },
      ],
    };
  },
};
</script>
<style scoped>
h2 {
  display: flex;
  flex-direction: row;
  align-content: center;
}
.logo {
  align-items: center;
  margin-right: 5px;
}
header nav li:last-child {
  background: var(--main-blue);
  border: none;
  color: white;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  font-size: 1.04em;
  font-weight: bold;
  cursor: pointer;
  border-radius: 20px;
}
header nav li:last-child:hover {
  opacity: 0.8;
  transition: 0.2s ease-in;
}
header nav li:last-child i {
  margin-right: 10px;
}
</style>
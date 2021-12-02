<template>
  <div class="wrapper">
    <div class="footer-logo">
      <Logo />
      <h1>Website</h1>
    </div>
    <div class="contact">
      <ul>
        <li class="detail">
          PMS Building, JBLMGH Compound, MacArthur Hwy, San Fernando, Pampanga
        </li>
        <li class="detail semibold">
          <ul>
            <li>123-456-6789</li>
            <li>123-456-6789</li>
          </ul>
        </li>
        <li class="detail semibold">hello@info.com</li>
      </ul>
    </div>
    <div class="subscribe">
      <form action="/">
        <label for="subscribe">Subscribe to our newsletter</label>
        <div class="subscribe-input">
          <div class="form-class">
            <Input type="email" name="subscribe" placeholder="Email" />
          </div>
          <Button> JOIN </Button>
        </div>
      </form>
      <nav class="footer-nav">
        <ul>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Quote Estimate</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Services</a></li>
        </ul>
      </nav>
    </div>
  </div>
  <div class="copyright">
    <!-- © {{ new Date().getFullYear() - 1 }} | designed by info.com -->
    © 2020 | designed by info.com
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
export default {
  components: {
    Logo,
    Input,
    Button,
  },
};
</script>

<style scoped>
nav.footer-nav ul {
  padding-left: 0;
  margin: 0;
}
nav.footer-nav ul li {
  display: inline;
  margin: 0 20px;
}
nav.footer-nav ul li.detail.semibold {
  font-weight: 500;
}
nav.footer-nav ul li:first-child {
  margin-left: 0;
}
nav.footer-nav ul li a {
  color: #fff;
  text-decoration: none;
}
nav.footer-nav ul li a:hover {
  color: var(--main-blue);
}
footer#footer .subscribe {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
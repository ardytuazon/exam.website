<template>
  <Header />
  <section id="home">
    <div class="wrapper">
      <div class="heading">
        <div class="text-heading">
          <h1>
            Let’s <span class="highlight">Build</span> Great Experiences
            Together
          </h1>
          <p>
            Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt.
            Franz jagt im komplett verwahrlosten Taxi quer durch Bayern. Zwölf
            Boxkämpfer jagen Viktor quer über.
          </p>
          <Button> Explore</Button>
        </div>
        <img
          src="@/assets/images/heading-image.png"
          class="image-heading"
          alt="Image Heading"
        />
      </div>
    </div>
  </section>
  <section id="services">
    <div class="wrapper">
      <div class="section-header">
        <SectionHeader>
          <template v-slot:text-header> Our Services </template>
          <template v-slot:text-subheader>
            Learn how we helped our several clients grow in online business. It
            will give you an idea of our capabilities.
          </template>
        </SectionHeader>
      </div>
      <div class="section-content">
        <div class="services">
          <ServiceCard
            v-for="(item, index) in services"
            :key="index"
            :data="item"
          />
        </div>
      </div>
    </div>
  </section>
  <section id="about-us">
    <div class="wrapper">
      <div class="section-header">
        <SectionHeader>
          <template v-slot:text-header> About Us </template>
          <template v-slot:text-subheader>
            Learn how we helped our several clients grow their businesses
            online.
          </template>
        </SectionHeader>
      </div>
      <div class="about-us-content">
        <img
          src="@/assets/images/about-image.png"
          class="about-image"
          alt="Image Heading"
        />
        <div class="text-heading">
          <h3>Reasons for choosing us</h3>
          <p>
            Nunc eu augue at nunc consectetur venenatis sit amet sodales metus.
            Sed at gravida nisi, mattis lacinia ipsum. Pellentesque
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed
          </p>
          <router-link to="/about-us" class="nav-link text-blue">
            Read More
          </router-link>
        </div>
      </div>
    </div>
  </section>
  <section id="portfolio">
    <div class="wrapper">
      <div class="section-header">
        <SectionHeader>
          <template v-slot:text-header> Potfolio </template>
          <template v-slot:text-subheader>
            Checkout the work we’ve done for our other clients. Our portfolio
            includes case studies for work done for design, development and
            social
          </template>
        </SectionHeader>
      </div>
      <div class="section-content">
        <Portfolio />
      </div>
    </div>
  </section>
  <section id="team">
    <div class="section-header">
      <SectionHeader>
        <template v-slot:text-header> Our Team </template>
        <template v-slot:text-subheader>
          Our wonderful team makes it possible for us to do the things we do.
        </template>
      </SectionHeader>
    </div>
    <div class="section-content">
      <TeamCard :data="teams" />
    </div>
  </section>
  <section id="news-letter">
    <div class="section-header">
      <SectionHeader>
        <template v-slot:text-header> Subscribe To Our Newsletter </template>
        <template v-slot:text-subheader>
          Sign up for our newsletter to keep updated with the latest design and
          development trends. We promise we don’t spam.
        </template>
      </SectionHeader>
    </div>
    <div class="news-letter-content">
      <form action="/">
        <div class="form-class">
          <Input type="email" name="subscribe" placeholder="Email" />
          <Button> JOIN </Button>
        </div>
      </form>
    </div>
  </section>
  <section id="contact">
    <div class="wrapper">
      <div class="contact-details">
        <div class="section-header">
          <SectionHeader>
            <template v-slot:text-header> Contact Us </template>
            <template v-slot:text-subheader>
              Have a project we can help with? Give us a call or reach out to us
              on social media
            </template>
          </SectionHeader>
        </div>
        <ul>
          <li class="detail">
            <img
              src="@/assets/images/location-icon.svg"
              class="detail-icon"
              alt="Image Heading"
            />
            <div>
              <h3>Address</h3>
              PMS Building, JBLMGH Compound, MacArthur Hwy, San Fernando,
              Pampanga
            </div>
          </li>
          <li class="detail">
            <img
              src="@/assets/images/phone-icon.svg"
              class="detail-icon"
              alt="Image Heading"
            />
            <div>
              <h3>Call for queries</h3>
              <ul style="padding-left: 0">
                <li>123-456-6789</li>
                <li>123-456-6789</li>
              </ul>
            </div>
          </li>
          <li class="detail">
            <img
              src="@/assets/images/mail-icon.svg"
              class="detail-icon"
              alt="Image Heading"
            />
            <div>
              <h3>Email Us</h3>
              hello@info.com
            </div>
          </li>
        </ul>
      </div>
      <div class="contact-content">
        <GMapMap
          :center="center"
          :zoom="18"
          map-type-id="terrain"
          :zoomOnClick="false"
        >
          <GMapMarker
            :key="marker.id"
            v-for="marker in markers"
            :position="marker.position"
            :clickable="false"
            :draggable="false"
            @click="center = marker.position"
          />
        </GMapMap>
      </div>
    </div>
  </section>
  <footer id="footer"><Footer /></footer>
</template>
<script>
import {} from "vue";
import Header from "@/components/Header.vue";
import Button from "@/components/Button.vue";
import SectionHeader from "@/components/SectionHeading.vue";
import ServiceCard from "@/components/ServiceCard.vue";
import Portfolio from "@/components/Portfolio.vue";
import TeamCard from "@/components/TeamCard.vue";
import Input from "@/components/Input.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Button,
    SectionHeader,
    ServiceCard,
    Portfolio,
    TeamCard,
    Input,
    Footer,
  },
  setup: () => {
    return {
      teams: [
        {
          fname: "President",
          lname: "Name",
          position: "President",
          picture: "https://randomuser.me/api/portraits/men/7.jpg",
        },
        {
          fname: "Vice Pres",
          lname: "Name",
          position: "Vice President",
          picture: "https://randomuser.me/api/portraits/men/11.jpg",
        },
        {
          fname: "Art",
          lname: "Name",
          position: "Art Director",
          picture: "https://randomuser.me/api/portraits/women/19.jpg",
        },
        {
          fname: "Socmed",
          lname: "Name",
          position: "SocMed Manager",
          picture: "https://randomuser.me/api/portraits/women/2.jpg",
        },
        {
          fname: "Web",
          lname: "Name",
          position: "Senior Web",
          picture: "https://randomuser.me/api/portraits/men/33.jpg",
        },
        {
          fname: "Dev",
          lname: "Name",
          position: "Senior Dev",
          picture: "https://randomuser.me/api/portraits/women/3.jpg",
        },
        {
          fname: "UI/UX",
          lname: "Name",
          position: "UI/UX Dev",
          picture: "https://randomuser.me/api/portraits/men/4.jpg",
        },
      ],
      services: [
        {
          title: "App Development",
          img: "@/assets/images/service-image.png",
          description:
            "We design and build iOS, Android or hybrid apps using react native and flutter or cordova",
        },
        {
          title: "Web Development",
          img: "@/assets/images/service-image.png",
          description:
            "We design and build iOS, Android or hybrid apps using react native and flutter or cordova",
        },
        {
          title: "Social Media",
          img: "@/assets/images/service-image.png",
          description:
            "We design and build iOS, Android or hybrid apps using react native and flutter or cordova",
        },
        {
          title: "Logo Branding",
          img: "@/assets/images/service-image.png",
          description:
            "We design and build iOS, Android or hybrid apps using react native and flutter or cordova",
        },
      ],
      center: { lat: 15.034339453515662, lng: 120.68463514080423 },
      markers: [
        {
          id: "location",
          position: {
            lat: 15.034339453515662,
            lng: 120.68463514080423,
          },
        },
      ],
    };
  },
};
</script>

<style>
</style>
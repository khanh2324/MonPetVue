<template>
    <div class="home">
        <Header />
        <div class="content">
            <Slider />
            <IntroduceHome />
            <Commit />
            <ContentVideo />
            <LinkProduct />
            <Friends />
            <NewsPost />
        </div>
        <Footer />
        <a 
          href="#header" 
          class="scroll" 
          v-on:scroll.passive="handleScroll"
          v-show="scY > 300"
        >
            <span class="icon">
                <font-awesome-icon icon="fa-solid fa-chevron-up" />
            </span>
        </a>

        <ButtonMenuCart />
    </div>
</template>

<script>
// @ is an alias to /src
import Commit from "@/layouts/components/Commit.vue";
import ContentVideo from "@/layouts/components/ContentVideo.vue";
import Friends from "@/layouts/components/Friends.vue";
import Header from "@/layouts/components/Header.vue";
import IntroduceHome from "@/layouts/components/IntroduceHome.vue";
import LinkProduct from "@/layouts/components/LinkProduct.vue";
import Slider from "@/layouts/components/Slider.vue";
import NewsPost from "@/layouts/components/NewsPost.vue";
import Footer from "@/layouts/components/Footer.vue";
import ButtonMenuCart from "@/components/ButtonMenuCart.vue";

export default {
    name: "HomeView",
    components: {
    Header,
    Slider,
    IntroduceHome,
    Commit,
    ContentVideo,
    LinkProduct,
    Friends,
    NewsPost,
    Footer,
    ButtonMenuCart
},

    data() {
      return {
        scTimer: 0,
        scY: 0,
      }
    },

    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },

    methods: {
        handleScroll: function () {
            if (this.scTimer) return;
            this.scTimer = setTimeout(() => {
                this.scY = window.scrollY;
                clearTimeout(this.scTimer);
                this.scTimer = 0;
            }, 100);
        },
    },
};
</script>

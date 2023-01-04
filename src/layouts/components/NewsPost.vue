<template>
    <div class="new__posts">
        <div class="new__posts-heading">
            <div class="container">
                <div class="new__posts-heading-wrap">
                    <h2 class="new__posts-header">Những bài viết mới nhất</h2>
                    <div class="new__posts-header-text">Dưới đây là những bài viết mới nhất về Kinh nghiệm, kiến thức chăm sóc thú cưng tại website Mon’s Pet .Com</div>
                    <div class="new__posts-header-text">Xem thêm tại: <a href="">Chuyên mục thú cưng</a></div>
                </div>
            </div>
        </div>

        <div class="container">
            <RenderPost v-bind:ListPosts="ListPosts"/>
        </div>
        <RenderSocial v-bind:ListSocial="ListSocial"/>
    </div>
</template>

<style lang="scss">
@import "@/scss/NewsPost.scss";
</style>

<script>
import RenderPost from "@/components/RenderPost.vue";
import RenderSocial from "@/components/RenderSocial.vue";

export default {
    components: {
        RenderPost,
        RenderSocial,
    },
    data() {
        return {
            ListPosts: [
                {
                    id: 1,
                    href: '',
                    title: "Top 13 Thức Ăn Cho Chó Trưởng Thành & Chó Con Phổ Biến Hiện Nay",
                    image: "https://monspet.com/wp-content/uploads/2021/07/thuc-an-cho-cho-min-768x723.png",
                },
                {
                    id: 2,
                    href: '',
                    title: "Top 9 Thức Ăn Cho Mèo Trưởng Thành & Mèo Con Tốt Nhất Hiện Nay",
                    image: "https://monspet.com/wp-content/uploads/2021/07/top-9-thuc-an-cho-meo-768x555.png",
                },
                {
                    id: 3,
                    href: '',
                    title: "Ký Sinh Trùng Máu Hemotropic Mycoplasmas Ở Chó Mèo",
                    image: "https://monspet.com/wp-content/uploads/2021/04/Hemotropic-Mycoplasmas-768x384.png",
                },
                {
                    id: 4,
                    href: '',
                    title: "Ký Sinh Trùng Máu Babesiosis Ở Chó Mèo Và Những Động Vật Khác",
                    image: "https://monspet.com/wp-content/uploads/2021/02/ky-sinh-trung-mau-Babesiosis-768x384.png",
                },
                {
                    id: 5,
                    href: '',
                    title: "Ký Sinh Trùng Máu Cytauxzoonosis Ở Mèo",
                    image: "https://monspet.com/wp-content/uploads/2021/02/Cytauxzoonosis-768x384.png",
                },
                {
                    id: 6,
                    href: '',
                    title: "6 Vấn Đề Sức Khỏe, Các Bệnh Phổ Biến Nhất Ở Mèo",
                    image: "https://monspet.com/wp-content/uploads/2021/02/monspet.com_-1-768x384.png",
                },
            ],

            ListSocial: [
                {
                    href: "https://www.facebook.com/monspet/",
                    icon: "fa-brands fa-facebook",
                    name: "facebook",
                },
                {
                    href: "https://twitter.com/MonsPetblog",
                    icon: "fa-brands fa-twitter",
                    name: "twitter",
                },
                {
                    href: "https://www.pinterest.com/monspetblog/",
                    icon: "fa-brands fa-pinterest",
                    name: "pinterest",
                },
                {
                    href: "https://www.linkedin.com/company/mon-s-pet/",
                    icon: "fa-brands fa-linkedin",
                    name: "linkedin",
                },
            ],
        };
    },
};
</script>

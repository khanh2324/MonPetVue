<template>
    <div id="header" class="header">
        <div
            class="container d-flex flex-nowrap align-items-center justify-content-between"
        >
            <div class="col-lg-3">
                <router-link to="/" class="logo-link">
                    <img
                        class="logo"
                        src="@/assets/images/logo/header_logo.png"
                        alt=""
                    />
                </router-link>
            </div>
            <MenuNav v-bind:ListMenuNav="ListMenuNav" v-bind:ListSubNav="ListSubNav"/>
            <MenuNavMobile v-bind:ListMenuNav="ListMenuNav" v-bind:ListSubNav="ListSubNav"/>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/scss/Header.scss";
</style>

<script>
import MenuNav from "@/components/MenuNav.vue";
import MenuNavMobile from "@/components/MenuNavMobile.vue";

export default {
    components: {
        MenuNav,
        MenuNavMobile,
    },
    data() {
        return {
            ListMenuNav: [
                {
                    id: 1,
                    title: "Trang Chủ",
                    class: "outline active",
                    classMobile: "menu-mobile",
                    to: "",
                },
                {
                    id: 2,
                    title: "Giới Thiệu",
                    class: "outline",
                    classMobile: "menu-mobile",
                    to: "introduce",
                },
                {
                    id: 3,
                    title: "Chuyên mục thú cưng",
                    class: "outline",
                    classMobile: "menu-mobile",
                    to: "/",
                    icon: "fa-solid fa-chevron-down",
                    subNav: true,
                },
                {
                    id: 4,
                    title: "Tin Tức",
                    class: "outline",
                    classMobile: "menu-mobile",
                    to: "about",
                },
            ],

            ListSubNav: [
                {
                    title: "Mèo",
                    className: "subnav",
                    classNameMobile: "mobile",
                },
                {
                    title: "Chó",
                    className: "subnav",
                    classNameMobile: "mobile",
                },
                {
                    title: "Chim",
                    className: "subnav",
                    classNameMobile: "mobile",
                },
                {
                    title: "Hamter",
                    className: "subnav",
                    classNameMobile: "mobile",
                },
                {
                    title: "Các Loài Động Vật Khác",
                    className: "subnav",
                    classNameMobile: "mobile",
                },
            ],
        };
    },
};
</script>

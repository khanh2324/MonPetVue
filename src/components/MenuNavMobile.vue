<template>
    <span>
        <div class="col-md-2 col-sm-3 d-block d-lg-none">
            <button class="toggle-btn-menu-nav" @click="handleShowMobile">
                <font-awesome-icon icon="fa-solid fa-bars" />
                <span v-if="statusShowMobile">Close</span>
                <span v-else>Menu</span>
            </button>
        </div>

        <div v-if="statusShowMobile" class="nav-mobile">
            <router-link
                v-for="item in ListMenuNav"
                :to="item.to"
                :key="item.id"
                :class="item.classMobile"
            >
                <div v-if="item.subNav" v-b-toggle="'collapse-subnav-mobile'" class="d-flex align-items-center">
                    <div class="header__parent-nav">
                        <div class="header__title-subnav"> 
                            {{ item.title }}
                            <font-awesome-icon :icon="item.icon" />
                        </div>
                        <b-collapse id="collapse-subnav-mobile">
                            <ul class="header__mobile-subnav-list">
                                <li
                                    class="header__mobile-subnav-item"
                                    v-for="item in ListSubNav"
                                    :key="item.id"
                                >
                                    <a class="header__mobile-subnav-link" href="">{{item.title}}</a>
                                </li>
                            </ul>
                        </b-collapse>
                    </div>
                </div>
                <span v-else>{{ item.title }}</span>
            </router-link>
            <form class="search-mobile d-flex">
                <input type="text" class="search-input" placeholder="Search" />
                <button class="search-btn">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </button>
            </form>
        </div>
    </span>
</template>

<script>
export default {
    props: {
        ListMenuNav: Array,
        ListSubNav: Array,
    },

    data() {
        return {
            statusShowMobile: true,
        };
    },

    methods: {
        handleShowMobile() {
            this.statusShowMobile = !this.statusShowMobile;
        },
    },
};
</script>

<style lang="scss">
@import "@/scss/MenuNavMobile.scss";
</style>

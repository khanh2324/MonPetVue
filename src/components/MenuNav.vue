<template>
    <div class="col-lg-8 d-none d-lg-flex header-nav">
        <router-link
            v-for="item in ListMenuNav"
            :to="item.to"
            :key="item.id"
            :class="item.class"
        >
            <div v-if="item.subNav" class="d-flex align-items-center header__parent-nav">
                <span>
                    {{ item.title }}
                    <font-awesome-icon :icon="item.icon" />
                </span>

                <ul class="header__subnav-list">
                    <li 
                        class="header__subnav-item" 
                        v-for="item in ListSubNav"
                        :key="item.id"
                    >
                        <!-- Bổ sung href sau -->
                        <a class="header__subnav-link" href="">{{ item.title }}</a>
                    </li>
                </ul>
            </div>
            <span v-else>{{ item.title }}</span>
        </router-link>

        <button class="header-search-btn">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
    </div>
</template>

<script>

export default {
    props: {
        ListMenuNav: Array,
        ListSubNav: Array,
    },

    data() {
        return {
        };
    },
};
</script>
<style lang="scss">
@import "@/scss/MenuNav.scss";
</style>

<template>
    <div class="btn-menu-cart">
        <div class="menu-btn">
            <TransitionGroup name="toggleMenuBtn">
                <div 
                    v-if="statusShow"
                    class="wrap"
                    v-for="item in MenuBtn" 
                    :key="item.id"
                >
                    <div class="title">
                        {{ item.title }}
                    </div>
                    <a :href="item.href" class="menu-btn_link small">
                        <font-awesome-icon :icon="item.icon" />
                    </a>
                </div>
            </TransitionGroup>
        </div>

        <div class="btn-cart">
            <div class="wrap">
                <Transition name="title-man">
                    <div v-if="!statusShow" class="title main-title">
                        Pet Shopping
                    </div>
                </Transition>
                <button @click="handleShow" :class="{turn: statusShow}" class="main-btn menu-btn_link" >
                    <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/scss/ButtonMenuCart.scss";
</style>

<script>
export default {
    components: {},
    data() {
        return {
            statusShow: false,
            MenuBtn: [
                {
                    id: 1,
                    title: "Đồ cho Pet Độc lạ",
                    href: "https://bom.so/Q2SCfh",
                    icon: "fa-solid fa-bag-shopping",
                },
                {
                    id: 2,
                    title: "Đồ cho Pet Giá rẻ",
                    href: "https://bom.so/D2oyiU",
                    icon: "fa-solid fa-basket-shopping",
                },
                {
                    id: 3,
                    title: "Facebook Page",
                    href: "https://www.facebook.com/monspet/",
                    icon: "fa-brands fa-facebook-f",
                },
            ],
        };
    },

    methods: {
        handleShow(){
            this.statusShow = !this.statusShow;
        }
    }
};
</script>

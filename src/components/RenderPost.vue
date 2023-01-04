<template>
    <div class="row new__post-content">
        <div 
            v-for="item in ListPosts"
            :key="item.id"
            class="col-lg-4 col-md-6 new__post-content-item"
        >
            <div class="new__post-content-item-heading">
                <router-link :to="item.href" class="new__post-content-item-header">
                    {{ item.title }}
                </router-link>
            </div>

            <router-link :to="item.href" class="new__post-content-item-img">
                <img :src="item.image" alt="">
            </router-link>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        ListPosts: Array,
    },
};
</script>
<style lang="scss">
@import "@/scss/RenderPost.scss";
</style>
<template>
    <div class="d-flex content-social">
        <a 
            v-for="item in ListSocial"
            :key="item.id"
            :id="item.name"
            :href="item.href"
            class="content-social-wrap"
        >
            <font-awesome-icon class="icon" :icon="item.icon" />
        </a>
    </div>
</template>

<script>

export default {
    props: {
        ListSocial: Array,
    },
};
</script>
<style lang="scss">
@import "@/scss/RenderSocial.scss";
</style>
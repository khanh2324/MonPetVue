<template>
    <div class="friends">
        <div class="container">
            <div class="friends__heading">
                <div class="friends__header">Những người bạn</div>
                <div class="friends__heading-text">Mon’s Pet .Com cung cấp những bài viết thông tin chủ yếu cho 4 loại thú cưng rất thường gặp và là những người bạn thân thiết dễ dàng bắt gặp tại mỗi gia đình người Việt chúng ta. Đó là: Chó, Mèo, Chim và Hamster.</div>
                <div class="friends__heading-text">Ngoài ra chúng tôi vẫn có 1 số bài viết về những loại động vật khác nhưng sẽ ít hơn.</div>
            </div>

            <div class="row friends__wrap">
                <div 
                    v-for="item in ListFriends" 
                    :key="item.id"
                    class="col-lg-3 col-md-6 col-sm-12 friends-img"
                >
                    <img :src="item.image" alt="">
                    <div class="friends__name-item">
                        <i>{{ item.title }}</i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/scss/Friends.scss";
</style>

<script>
export default {
    components: {},
    data() {
        return {
            ListFriends: [
                {
                    id: 1,
                    title: "Mèo",
                    image: require('@/assets/images/friends/meo.jpg'),
                },
                {
                    id: 2,
                    title: "Hamster",
                    image: require('@/assets/images/friends/hamster.jpg'),
                },
                {
                    id: 3,
                    title: "Chó",
                    image: require('@/assets/images/friends/cho.jpg'),
                },
                {
                    id: 4,
                    title: "Chim",
                    image: require('@/assets/images/friends/chim.jpg'),
                },
            ],
        };
    },
};
</script>

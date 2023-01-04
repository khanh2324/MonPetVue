<template>
   <div class="commit">
        <div class="container">
            <div class="commit__heading">
                <h1 class="commit-header">Cam kết</h1>
                <div class="commit-text">
                    Mons’ Pet .Com được định hình là trang web thông tin hàng đầu về động vật, thú cưng. Chúng tôi cam kết tất cả nội dung cung cấp trên trang đều được trích dịch từ các nguồn web nước ngoài rõ ràng, có ý kiến và trích dẫn thú y. Từ đó mang lại những giải pháp chính xác nhất cho người xem.
                </div>
            </div>

            <div class="row commit__content">
                <div v-for="item in ListCommit" :key="item.id" class="col-sm-12 col-md-4 commit__content-wrap">
                    <div class="commit__content-icon">
                        <img :src="item.logo" alt="">
                    </div>
                    <div class="commit__content-header">{{ item.title }}</div>
                    <div class="commit__content-text">{{ item.content }}</div>
                </div>
            </div>
        </div>
   </div>
</template>

<style lang="scss">
@import "@/scss/Commit.scss";
</style>

<script>


export default {
    components: {
       
    },
    data() {
        return {
            ListCommit: [
                {
                    id: 1,
                    title: "Nội dung",
                    content: "Nội dung chất lượng, chính xác, có nguồn uy tín, có thú y xem xét.",
                    logo: require('@/assets/images/logo/pen.png'),
                },
                {
                    id:2,
                    title: "Sản phẩm",
                    content: "Sản phẩm được gợi ý công bằng, được phân tích review chi tiết chính xác.",
                    logo: require('@/assets/images/logo/layout-box.png'),
                },
                {
                    id: 3,
                    title: "Hỗ trợ",
                    content: "Hỗ trợ hết mình, hướng dẫn những nguồn khám bệnh thú cưng uy tín, chất lượng.",
                    logo: require('@/assets/images/logo/loa.png'),
                },
            ]
        };
    },
};
</script>

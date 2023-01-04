<template>
   <div class="link__product container">
    <div class="row link__product-container">
        <div 
            v-for="item in ListLinkProduct" 
            :key="item.id" 
            class="col-sm-12 col-md-6 link__product-wrap"
        >
            <a :href="item.link" class="link__product-logo">
                <img :src="item.logo" alt="">
            </a>
            <div class="link__product-heading">
                <h3 class="link__product-header">{{ item.title }}</h3>
            </div>
            <div class="link__product-text">{{ item.content }}</div>
            <div class="link__product-btn">
                <a :href="item.link" :class="item.class + ' link__product-link'">Click đây</a>
            </div>
        </div>

        <div class="col-12 link__product-text-about">
            <i>
                (Mua hàng online tại đây là lợi nhuận và động lực rất lớn để
                Mon’s Pet cung cấp nhiều nội dung chất lượng hơn)
            </i>
        </div>
    </div>
   </div>
</template>

<style lang="scss">
@import "@/scss/LinkProduct.scss";
</style>

<script>

export default {
    components: {
        
    },
    data() {
        return {
            ListLinkProduct: [
                {
                    id: 1,
                    class: 'invalid',
                    logo: require('@/assets/images/logo/aeon_eshop.png'),
                    link: 'https://bom.so/Q2SCfh',
                    title: "Đồ dùng Pet Độc lạ",
                    content: 'Tham khảo thêm nhiều đồ dùng pet, nhà cửa, đệm lót, sửa tắm, thức ăn chó, mèo chính hãng hay ho, độc lạ tại AEON-ESHOP'
                },
                {
                    id:2,
                    class: '',
                    logo: require('@/assets/images/logo/lazada.png'),
                    link: 'https://bom.so/D2oyiU',
                    title: "Đồ dùng Chăm sóc thú cưng",
                    content: "Xem thêm nhiều đồ dùng pet, đồ dùng chăm sóc thú cưng, thuốc, vòng cổ và nhiều thức ăn khô, đóng hộp có giá rẻ tại Lazada",
                },
            ]
        };
    },
};
</script>

<template>
    <div class="container">
        <div class="introduce">
            <div class="introduce__header">
                <h2>Giới Thiệu</h2>
            </div>
            <div class="introduce__container row">
                <div class="col-lg-6 col-sm-12 introduce__content">
                    <div class="introduce__content-wrap">
                        <div class="introduce__content-text">
                            <span>
                                <strong>Mon’s Pet</strong> được xây dựng dựa
                                    trên tiêu chí là cổng thông tin khổng lồ và
                                    hoàn toàn miễn phí về các vấn đề xung quanh
                                    động vật , đặc biệt là thú cưng, cụ thể như
                                    các bệnh về chó mèo, các thực phẩm dinh
                                    dưỡng dành cho thú cưng, cách chăm sóc và
                                    điều trị bệnh cho chó mèo...
                            </span>
                        </div>
    
                        <div class="introduce__content-text">
                            <span>
                                Tất cả những thông tin tại Monspet được sưu
                                tầm và tham khảo từ nhiều nguồn khác nhau có
                                chọn lọc, bên cạnh đó còn là trải nghiệm
                                thực tế của chúng tôi trong quá trình nuôi
                                thú cưng để đem đến cho độc giả những thông
                                tin chính xác và hữu ích nhất.
                            </span>
                        </div>
                    </div>
                </div>
    
                <div class="col-lg-6 col-sm-12 introduce__img">
                    <div class="introduce__img-wrap">
                        <img src="@/assets/images/introduce/shaking-hands8.jpg" alt="Introduce">
                    </div>
                </div>
            </div>
    
            <div class="btn-detail">
                <router-link to="/introduce" class="btn-rounded">
                    Chi Tiết
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/scss/IntroduceHome.scss";
</style>

<script>


export default {
    components: {
       
    },
    data() {
        return {

        };
    },
};
</script>

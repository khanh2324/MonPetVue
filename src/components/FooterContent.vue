<template>
    <div class="footer__content">
        <div class="container">
            <div class="footer__content-container row">
                <div class="col-md-4 col-sm-12">
                    <div class="footer__content-logo">
                        <img
                            src="@/assets/images/logo/logo-2021-monspet-size2.jpg"
                            alt=""
                        />
                    </div>
                    <div class="footer__content-text">
                        <i>
                            Mon’s Pet là cổng thông tin khổng lồ và hoàn toàn
                            miễn phí về các vấn đề xung quanh thú cưng và động
                            vật
                        </i>
                    </div>
                </div>

                <div class="footer-list-page col-md-4 col-sm-12">
                    <div class="footer-page-header">Danh sách Trang</div>

                    <ul class="footer-page-list">
                        <li
                            v-for="item in ListPageFooter"
                            :key="item.id"
                            class="footer-list-page-item"
                        >
                            <router-link class="footer-list-page-link" :to="item.href">
                                {{ item.title }}
                            </router-link>
                        </li>
                    </ul>

                    <div class="footer-page-license">
                        @Bản quyền bài viết thuộc về Monspet.com
                    </div>
                    <a
                        href="https://bom.so/4ag7h9"
                        class="footer-page-license-img"
                    >
                        <img
                            src="@/assets/images/logo/dmca_protected_sml.png"
                            alt=""
                        />
                    </a>
                </div>

                <div class="footer-link-page col-md-4 col-sm-12">
                    <div class="footer-page-header">Link Fanpage Facebook</div>
                    <iframe
                        width="320"
                        height="252"
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmonspet&tabs=timeline&width=320&height=252&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=348469316742429"
                        title="YouTube video player"
                        frameborder="0"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowfullscreen
                    >
                    </iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/scss/FooterContent.scss";
</style>

<script>
export default {
    components: {},
    data() {
        return {
            ListPageFooter: [
                {
                    title: "Giới thiệu",
                    href: "introduce",
                },
                // added when there is a new page
                {
                    title: "Chính sách bảo mật",
                    href: "",
                },
                {
                    title: "Điều khoản dịch vụ",
                    href: "",
                },
                {
                    title: "Liên hệ",
                    href: "",
                },
            ],
        };
    },
};
</script>

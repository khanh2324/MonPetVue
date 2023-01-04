<template>
   <div>
       <FooterContent />
    
       <div class="footer__ending">
           <div class="container">
                <div class="row footer__ending-container">
                    <div class="col-md-6 col-sm-12 footer__ending-copyright">
                        <span>Copyright © 2022</span> Monspet.com @All rights reserved
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <ul class="footer__ending-btn-list">
                            <li class="footer__ending-item">
                                <a href="https://www.facebook.com/monspet/" class="footer__ending-link">Facebook</a>
                            </li>
                            <li class="footer__ending-item">
                                <a href="https://twitter.com/MonsPetblog" class="footer__ending-link">Twitter</a>
                            </li>
                            <li class="footer__ending-item">
                                <a href="https://www.pinterest.com/monspetblog/" class="footer__ending-link">Pinterest</a>
                            </li>
                            <li class="footer__ending-item">
                                <a href="https://www.linkedin.com/company/mon-s-pet/" class="footer__ending-link">Linkedin</a>
                            </li>
                        </ul>
                    </div>
                </div>
           </div>
       </div>
   </div>
</template>

<style lang="scss">
@import "@/scss/Footer.scss";
</style>

<script>
import FooterContent from '@/components/FooterContent.vue';


export default {
    components: {
    FooterContent,
},
    data() {
        return {
        };
    },
};
</script>

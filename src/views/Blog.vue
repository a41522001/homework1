<script setup>
    import { onMounted } from "vue";
    import Nav from "../components/Nav.vue";
    import Footer from "../components/Footer.vue";
    import Swiper from "swiper";
    import "swiper/css";
    
    onMounted(() => {
        const swiper = new Swiper(".swiper", {
            breakpoints: {
                1199: {
                    allowTouchMove: false,
                    slidesPerView: 'auto',
                    spaceBetween: 0,
                    freeMode: false,
                    mousewheel: false,
                },
                320: {
                    allowTouchMove: true,
                    direction: 'horizontal',
                    loop: true,
                    slidesPerView: 'auto',
                    spaceBetween: 10,
                    freeMode: true,
                    mousewheel: true,
                }
            }
        });
        console.log(swiper);
    })
</script>

<template>
    <Nav></Nav>
    <main>
        <div class="blog-title">
            <div class="pic">
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-left-lg.png?raw=true" alt="left-line">
            </div>
            <h3 class="m-0">部落格 </h3>
            <div class="pic">
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-right-lg.png?raw=true" alt="right-line">
            </div>
        </div>
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-12 col-md-10 col-xl-8 order-2 order-xl-1">
                    <router-view></router-view>
                </div>
                <div class="swiper tab-bar col-12 col-xl-2 order-1 order-xl-2">
                    <ul class="swiper-wrapper nav flex-xl-column flex-nowrap align-items-center justify-content-center justify-content-xl-start">
                        <li class="swiper-slide nav-item" data-hash="1">
                            <router-link to="/blog/all" class="nav-link active" aria-current="page">全部文章</router-link>
                        </li>
                        <li class="swiper-slide nav-item" data-hash="2">
                            <router-link to="/blog/uiux" class="nav-link">UI/UX新知</router-link>
                        </li>
                        <li class="swiper-slide nav-item" data-hash="3">
                            <router-link to="/blog/productDesign" class="nav-link">數位產品設計</router-link>
                        </li>
                        <li class="swiper-slide nav-item" data-hash="4">
                            <a class="nav-link">平面設計</a>
                        </li>
                        <li class="swiper-slide nav-item" data-hash="5">
                            <router-link to="/blog/frontend" class="nav-link">前端開發</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <Footer></Footer>
    </footer>
</template>

<style scoped>
    main .container-fluid{
        margin-bottom: 120px;
    }
    .blog-title{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        margin: 80px 0;
    }
    .tab-bar{
        padding-top: 80px;
        background-color: #FAFAFA;
    }
    .nav-item{
        margin: 16px;
    }
    .nav-item a{
        color: #1e1e1e;
    }
    .swiper-slide{
        width: auto;
        height: auto;
    }
    @media (max-width: 1199px) {
        .tab-bar{
            margin-bottom: 40px;
            padding: 0px;
        }
        .nav-item{
            width: auto;
            flex-shrink: 0;
            display: flex;
            align-items: center;
        }
    }
</style>
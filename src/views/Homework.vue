<script setup>
    import Nav from "../components/Nav.vue";
    import Footer from "../components/Footer.vue";
</script>

<template>
    <header>
        <Nav></Nav>
    </header>
    <div class="banner">
        <div class="banner-item">
            <div class="banner-item-title">
                <p>讓使用者觀賞與使用的旅途中, <span>發現設計的價值</span></p>
                <p>而我在設計與開發的過程中, <span>看見自己的價值</span></p>
            </div>
        </div>
        <div class="banner-item">
            <div class="banner-item-2b">
                <h4>2B經驗</h4>
                <p>內部監控系統、庫存系統、採購系統、行銷整合系統</p>
            </div>
            <div class="banner-item-2c">
                <h4>2C經驗</h4>
                <p>跨國美妝保養電商、個人品牌網站、醫美網站、電子商務</p>
            </div>
        </div>
    </div>
    <main class="container">
        <div class="row">
            <div class="col-12 col-lg-6">
                <div class="wrapper">
                    <div class="pic">
                        <img class="first-img" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image1.png?raw=true" data-bs-toggle="modal" data-bs-target="#exampleModal" alt="作品圖片">
                    </div>
                    <div class="txt">
                        <h4>星際旅行訂票平台</h4>
                        <p>悠遊宇宙的夢想, 從這裡開始實現</p>
                    </div>
                    <ul class="tag">
                        <li>網頁設計</li>
                        <li>響應式設計</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="wrapper">
                    <div class="pic">
                        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image2.png?raw=true" alt="作品圖片">
                    </div>
                    <div class="txt">
                        <h4>理財App</h4>
                        <p>連動帳戶與行動支付, 讓 AI 提供您最好的理財建議</p>
                    </div>
                    <ul class="tag">
                        <li>APP設計</li>
                        <li>iOS</li>
                        <li>React</li>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="wrapper">
                    <div class="pic">
                        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image3.png?raw=true" alt="作品圖片">
                    </div>
                    <div class="txt">
                        <h4>醫美診所官網</h4>
                        <p>永保青春的秘密, 從粹究開始</p>
                    </div>
                    <ul class="tag">
                        <li>網頁設計</li>
                        <li>響應式設計</li>
                        <li>WordPress</li>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="wrapper">
                    <div class="pic">
                        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image4.png?raw=true" alt="作品圖片">
                    </div>
                    <div class="txt">
                        <h4>美美美早餐店POS機UI Design</h4>
                        <p>訂單送單一目瞭然, 自動報表分析好輕鬆</p>
                    </div>
                    <ul class="tag">
                        <li>UI設計</li>
                        <li>前端開發</li>
                        <li>Wix</li>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="wrapper">
                    <div class="pic">
                        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image5.png?raw=true" alt="作品圖片">
                    </div>
                    <div class="txt">
                        <h4>電影訂票系統</h4>
                        <p>三步驟完成訂票, 電腦手機都支援</p>
                    </div>
                    <ul class="tag">
                        <li>前端開發</li>
                        <li>後端支援</li>
                        <li>Vue</li>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="wrapper">
                    <div class="pic">
                        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image6.png?raw=true" alt="作品圖片">
                    </div>
                    <div class="txt">
                        <h4>巧克巧形象官網設計</h4>
                        <p>三步驟完成訂票, 電腦手機都支援</p>
                    </div>
                    <ul class="tag">
                        <li>UI設計</li>
                        <li>設計系統</li>
                        <li>網路電商</li>
                    </ul>
                </div>
            </div>
        </div>
        <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center">
                <li class="page-item mx-2"><a class="page-link link-light bg-black" href="#">1</a></li>
                <li class="page-item mx-2"><a class="page-link link-dark" href="#">2</a></li>
                <li class="page-item mx-2"><a class="page-link link-dark" href="#">3</a></li>
            </ul>
        </nav>
    </main>
    <footer>
        <Footer></Footer>
    </footer>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="modal-body">
                <div class="container-fluid mx-auto">
                    <h3>星際旅行訂票平台</h3>
                    <p>悠遊宇宙的夢想, 從這裡開始實現</p>
                    <div class="row">
                        <div class="col-12 col-lg-7">
                            <p>STAR TRAVEL 為 KK 公司宇宙旅行的購票網站。主要從地球出發，目的地包含月球、火星、水星、木星；未來太空轉運站建置完畢，將再擴增目的地土星和金星</p>
                        </div>
                        <div class="col-12 col-lg-5">
                            <p>設計原則：宇宙旅行、深色背景、強烈視覺效果</p>
                            <p>開發方式：Bootstrap、javascript、RWD</p>
                        </div>
                        <div class="row justify-content-center m-0">
                            <div class="col-12 col-lg-8 mx-auto mt-5">
                                <div class="modal-pic">
                                    <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/modal-image1.png?raw=true" alt="星際">
                                </div>
                                <h4>主視覺</h4>
                                <p>可直接設定日期、起迄星球、張數，快速查詢可購買的票券</p>
                            </div>
                            <div class="col-12 col-lg-8 mx-auto mt-5">
                                <div class="modal-pic">
                                    <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/modal-image2.png?raw=true" alt="星際">
                                </div>
                                <h4>推薦查詢</h4>
                                <p>給予最快起來, 以及最熱門的景點推薦, 協助使用者進行選擇</p>
                            </div>
                        </div>
                    </div>
                </div>      
            </div>
        </div>
    </div>
    </div>
</template>

<style scoped>
    .banner{
        background: 
            url("https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/homepage-services-bg.png?raw=true")
            no-repeat
            center center / cover;
        padding: 80px 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    .banner-item{
        font-size: 1.5rem;
    }
    .banner-item-title{
        color: #1e1e1e;
        padding: 60px 70px;
    }
    .banner-item-title p span{
        position: relative;
    }
    .banner-item-title p:first-child span::after,
    .banner-item-title p:nth-child(2) span::after{
        content: "";
        background: 
            url("https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/mark.png")
            no-repeat
            center / cover;
        width: 120px;
        height: 8px;
        position: absolute;
        bottom: -5px;
        left: 30%;
    }
    .banner-item:nth-child(2){
        display: flex;
        justify-content: center;
        gap: 40px;
    }
    .banner-item-2b,
    .banner-item-2c{
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 330px;
        text-align: center;
        padding: 0 10px;
    }
    .banner-item-2b h4,
    .banner-item-2c h4{
        color: #5b5b5b;
        position: relative;
        font-size: 1rem;
    }
    .banner-item-2b h4::after,
    .banner-item-2c h4::after{
        content: "";
        width: 24px;
        height: 2px;
        background-color: #c1c1c1;
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
    }
    .banner-item-2b p,
    .banner-item-2c p{
        color: ver(--main-text-color);
    }
    main .row .col-12{
        margin-top: 80px;
    }
    main .wrapper{
        max-width: 636px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    main .wrapper .pic img{
        border-radius: 8px;
    }
    main .wrapper .txt,
    main .wrapper .tag{
        padding: 0 16px;
    }
    main .wrapper .txt{
        margin: 16px 0 24px;
    }
    main .wrapper .txt h4{
        color: var(--main-text-color);
        font-weight: 700;
        font-size: 1.75rem;
    }
    main .wrapper .txt p{
        color: #919191;
        font-size: 1rem;
    }
    main .wrapper .tag{
        display: flex;
        gap: 16px;
        list-style: none;
    }
    main .wrapper .tag li{
        padding: 4px 12px;
        background-color: #f1f1f1;
        border-radius: 16px;
        color: #3b3b3b;
        font-size: 1rem;
    }
    main nav{
        margin: 72px 0 120px;
    }
    .first-img{
        cursor: pointer;
    }
    .modal-body{
        padding: 80px 0;
    }
    .modal-body .container-fluid{
        padding: 0 50px;
    }
    .modal-body h3{
        color: var(--main-text-color);
        font-size: 1.75rem;
        font-weight: 700;
        text-align: center;
    }
    .modal-body h3 + p{
        color: #919191;
        font-size: 1rem;
        text-align: center;
    }
    .modal-body .col-lg-7{
        color: #1e1e1e;
        font-size: 1rem;
    }
    .modal-body .col-lg-5{
        color: #5b5b5b;
        font-size: 1rem;
        position: relative;
    }
    .modal-body .col-lg-5::after{
        content: "";
        width: 1px;
        height: 80%;
        background-color: #c1c1c1;
        position: absolute;
        left: 0;
        top: 0;
    }
    .modal-body h4{
        font-size: 1.5rem;
        color: #1e1e1e;
        font-weight: 700;
        text-align: center;
        margin: 24px 0 16px;
    }
    .modal-body h4 + p{
        color: #5b5b5b;
        text-align: center;
    }
    .modal-pic img{
        border-radius: 16px;
    }
    @media (max-width: 991px) {
        .banner-item-title p span{
            display: block;
            text-align: center;
        }
        .banner-item-title{
            padding: 0;
        }
        .banner-item-title p:first-child span::after,
        .banner-item-title p:nth-child(2) span::after{
            left: 40%;
        }
        main .row .col-12{
            margin-top: 48px;
        }
        .modal-body .col-lg-7,
        .modal-body .col-lg-5{
            text-align: center;
        }
        .modal-body .container-fluid{
            padding: 0 15px;
        }
    }
    @media (max-width: 576px) {
        .banner-item:nth-child(2){
            margin-top: 40px;
            flex-direction: column;
        }
        main .wrapper .tag{
            gap: 8px;
        }
        main .wrapper .tag li{
            font-size: .85rem;
        }
    }
</style>
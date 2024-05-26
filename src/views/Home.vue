<script setup>
    import Nav from "../components/Nav.vue";
    import Footer from "../components/Footer.vue";
    import { ref, onMounted } from "vue";
    import Article from "./Contact.vue";
    let articles = [
        {
            title: "Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)",
            image: "https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image1.png?raw=true",
            id: 1,
            tag: "UI/UX新知",
            date: "2024/02/10"
        },
        {
            title: "給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (下)",
            image: "https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image2.png?raw=true",
            id: 2,
            tag: "UI/UX新知",
            date: "2023/11/20"
        },
        {
            title: "給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)",
            image: "https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image3.png?raw=true",
            id: 3,
            tag: "UI/UX新知",
            date: "2023/10/18"
        },
        {
            title: "虛擬實境 (VR) 介面設計對使用者沈浸感影響的研究",
            image: "https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image4.png?raw=true",
            id: 4,
            tag: "數位產品設計",
            date: "2023/09/20"
        },
        {
            title: "想打到目標受眾？先讓設計師跟你都瞭解他們痛在哪！",
            image: "https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image5.png?raw=true",
            id: 5,
            tag: "數位產品設計",
            date: "2023/08/10"
        }
    ]
    const newArticles = ref([]);
    onMounted(() => {
        newArticles.value = articles.slice(0, 3);
        let dot = document.querySelector(".dot");
        dot.classList.add("current");
    })
    function switchPic(n, event){
        let dots = document.querySelectorAll(".dot");
        dots.forEach(dot => {
            dot.classList.remove("current");
        })
        event.target.classList.add("current");
        newArticles.value.length = 0;
        setTimeout(() => {
            let num = [];
            num.push(n);
            for(let i = 0 ; i < 2; i++){
                n++;
                if(n === 6){
                    num.push(1);
                }else if(n === 7){
                    num.push(2);
                }else{
                    num.push(n);
                }
            }
            newArticles.value = num.map(n => {
                for(let article of articles){
                    if(n === article.id){
                        return article;
                    }
                }
            });
        }, 100)
        
    }
</script>

<template>
    <Nav></Nav>
    <header class="banner container-fluid">
        <div class="row m-0">
            <div class="banner-description-container col-12 col-lg-5 order-2 order-lg-1">
                <div class="banner-description">
                    <h2>hi ! 我是 Noel</h2>
                    <p>具有10年經驗的 <span>資深UI工程師</span> 兼 <span>前端工程師</span></p>
                    <p>技術雙修並行, 熱衷於優化使用者的網頁體驗</p>
                    <nav aria-label="breadcrumb">
                        <ul class="banner-breadcrumb breadcrumb">
                            <li class="banner-breadcrumb-item breadcrumb-item">WEB DEVELOPMENT</li>
                            <li class="banner-breadcrumb-item breadcrumb-item">BRANDING</li>
                            <li class="banner-breadcrumb-item breadcrumb-item">UI</li>
                            <li class="banner-breadcrumb-item breadcrumb-item">UX</li>
                            <li class="banner-breadcrumb-item breadcrumb-item">APP DESIGN</li>
                        </ul>
                    </nav>
                    <div class="banner-icon-container">
                        <div class="banner-icon">
                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.02 9H35.98C42.06 9 47 13.94 47 20.02V35.98C47 38.9027 45.839 41.7057 43.7723 43.7723C41.7057 45.839 38.9027 47 35.98 47H20.02C13.94 47 9 42.06 9 35.98V20.02C9 17.0973 10.161 14.2943 12.2277 12.2277C14.2943 10.161 17.0973 9 20.02 9ZM19.64 12.8C17.8259 12.8 16.0861 13.5206 14.8034 14.8034C13.5206 16.0861 12.8 17.8259 12.8 19.64V36.36C12.8 40.141 15.859 43.2 19.64 43.2H36.36C38.1741 43.2 39.9139 42.4794 41.1966 41.1966C42.4794 39.9139 43.2 38.1741 43.2 36.36V19.64C43.2 15.859 40.141 12.8 36.36 12.8H19.64ZM37.975 15.65C38.6049 15.65 39.209 15.9002 39.6544 16.3456C40.0998 16.791 40.35 17.3951 40.35 18.025C40.35 18.6549 40.0998 19.259 39.6544 19.7044C39.209 20.1498 38.6049 20.4 37.975 20.4C37.3451 20.4 36.741 20.1498 36.2956 19.7044C35.8502 19.259 35.6 18.6549 35.6 18.025C35.6 17.3951 35.8502 16.791 36.2956 16.3456C36.741 15.9002 37.3451 15.65 37.975 15.65ZM28 18.5C30.5196 18.5 32.9359 19.5009 34.7175 21.2825C36.4991 23.0641 37.5 25.4804 37.5 28C37.5 30.5196 36.4991 32.9359 34.7175 34.7175C32.9359 36.4991 30.5196 37.5 28 37.5C25.4804 37.5 23.0641 36.4991 21.2825 34.7175C19.5009 32.9359 18.5 30.5196 18.5 28C18.5 25.4804 19.5009 23.0641 21.2825 21.2825C23.0641 19.5009 25.4804 18.5 28 18.5ZM28 22.3C26.4883 22.3 25.0384 22.9005 23.9695 23.9695C22.9005 25.0384 22.3 26.4883 22.3 28C22.3 29.5117 22.9005 30.9616 23.9695 32.0305C25.0384 33.0995 26.4883 33.7 28 33.7C29.5117 33.7 30.9616 33.0995 32.0305 32.0305C33.0995 30.9616 33.7 29.5117 33.7 28C33.7 26.4883 33.0995 25.0384 32.0305 23.9695C30.9616 22.9005 29.5117 22.3 28 22.3Z" fill="#5B5B5B"/>
                            </svg>
                        </div>
                        <div class="banner-icon">
                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M48 28.0501C48 16.9825 39.04 8 28 8C16.96 8 8 16.9825 8 28.0501C8 37.7544 14.88 45.8346 24 47.6992V34.0652H20V28.0501H24V23.0376C24 19.1679 27.14 16.0201 31 16.0201H36V22.0351H32C30.9 22.0351 30 22.9373 30 24.0401V28.0501H36V34.0652H30V48C40.1 46.9975 48 38.4561 48 28.0501Z" fill="#5B5B5B"/>
                            </svg>
                        </div>
                        <div class="banner-icon">
                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M45.1906 13.9252C47.0837 14.4345 48.5744 15.9353 49.0804 17.8403C50 21.2943 50 28.4998 50 28.4998C50 28.4998 50 35.7057 49.0804 39.1593C48.5744 41.0644 47.0837 42.5655 45.1906 43.0744C41.7592 44 27.9998 44 27.9998 44C27.9998 44 14.2408 44 10.8095 43.0744C8.91631 42.5655 7.42556 41.0644 6.91959 39.1593C6 35.7057 6 28.4998 6 28.4998C6 28.4998 6 21.2943 6.91959 17.8403C7.42556 15.9353 8.91631 14.4345 10.8095 13.9252C14.2408 13 27.9998 13 27.9998 13C27.9998 13 41.7592 13 45.1906 13.9252ZM35.0309 28.5002L23.6 35.1428V21.8568L35.0309 28.5002Z" fill="#5B5B5B"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-7 order-1 order-lg-2 p-0">
                <img class="img-fluid" src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/hero-lg.png" alt="banner-image">
            </div>
        </div>
    </header>
    <section class="homework-container container-fluid p-0">
        <div class="homework-title">
            <div class="pic">
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-left-lg.png?raw=true" alt="left-line">
            </div>
            <h3 class="m-0">作品介紹</h3>
            <div class="pic">
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-right-lg.png?raw=true" alt="right-line">
            </div>
        </div>
        <div class="homework-item homework-item-1">
            <div class="homework-pic homework-pic-1">
                <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/homepage-work1.png" alt="homework-image01">
            </div>
            <div class="homework-description">
                <div class="homework-description-txt">
                    <h4>星際旅行訂票平台</h4>
                    <p>旅遊宇宙的夢想從這裡開始實現</p>
                    <ul class="homework-description-tag-list">
                        <li>網頁設計</li>
                        <li>響應式設計</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div class="homework-description-btn-container">
                    <button>
                        <router-link to="/homework">完整介紹
                            <span>&rarr;</span>
                        </router-link>
                    </button>
                </div>
            </div>
        </div> 
        <div class="homework-item-2">
            <div class="homework-pic-2">
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/homepage-work2-lg.png?raw=true" alt="homework-image02">
            </div>
            <div class="homework-description-container">
                <div class="homework-description">
                    <div class="homework-description-txt">
                        <h4>理財APP</h4>
                        <p>連動帳戶與行動支付, 讓AI提供您最好的理財建議</p>
                        <ul class="homework-description-tag-list">
                            <li>APP設計</li>
                            <li>IOS</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div class="homework-description-btn-container">
                        <button>
                            <router-link to="/homework">完整介紹
                                <span>&rarr;</span>
                            </router-link>
                        </button>
                    </div>
                </div>
            </div>
        </div> 
        <div class="homework-item homework-item-3">
            <div class="homework-pic homework-pic-3">
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/homepage-work3.png?raw=true" alt="homework-image03">
            </div>
            <div class="homework-description">
                <div class="homework-description-txt">
                    <h4>醫美診所官網</h4>
                    <p>永保青春的秘密, 從粹究開始</p>
                    <ul class="homework-description-tag-list">
                        <li>網頁設計</li>
                        <li>響應式設計</li>
                        <li>WordPress</li>
                    </ul>
                </div>
                <div class="homework-description-btn-container">
                    <button>
                        <router-link to="/homework">完整介紹
                            <span>&rarr;</span>
                        </router-link>
                    </button>
                </div>
            </div>
        </div> 
    </section>
    <section class="service">
        <div class="service-title">
            <div class="pic">
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-left-lg.png?raw=true" alt="left-line">
            </div>
            <h3 class="m-0">服務項目</h3>
            <div class="pic">
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-right-lg.png?raw=true" alt="right-line">
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="service-wrapper col-12 col-xxl-3 col-md-6">
                    <div class="service-item">
                        <div class="service-icon">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M54.1333 38.3666L59.3667 33.1333L46.8667 20.6333L41.6333 25.8666L27.8333 12.1C25.2333 9.49997 21 9.49997 18.4 12.1L12.0667 18.4333C9.46667 21.0333 9.46667 25.2666 12.0667 27.8666L25.8333 41.6333L10.5 57C10.1667 57.3333 10 57.7333 10 58.2V68.3333C10 69.2666 10.7333 70 11.6667 70H21.8C22.2333 70 22.6667 69.8333 22.9667 69.5L38.3667 54.1L52.1333 67.8666C56.5333 72.2666 61.3333 68.1 61.5667 67.8666L67.9 61.5333C70.5 58.9333 70.5 54.7 67.9 52.1L54.1333 38.3666ZM30.6 36.9L16.8 23.1333L23.1 16.8L27.3333 21.0333L25.7667 22.6666C25.1434 23.2899 24.7933 24.1352 24.7933 25.0166C24.7933 25.8981 25.1434 26.7434 25.7667 27.3666C26.3899 27.9899 27.2352 28.34 28.1167 28.34C28.9981 28.34 29.8434 27.9899 30.4667 27.3666L32.0667 25.7666L36.9 30.6L30.6 36.9ZM56.8667 63.2L43.1 49.4333L49.4333 43.1L54.2667 47.9333L52.6667 49.5333C52.3581 49.8419 52.1133 50.2083 51.9462 50.6115C51.7792 51.0147 51.6933 51.4469 51.6933 51.8833C51.6933 52.3197 51.7792 52.7519 51.9462 53.1551C52.1133 53.5583 52.3581 53.9247 52.6667 54.2333C52.9753 54.5419 53.3416 54.7867 53.7449 54.9537C54.1481 55.1207 54.5802 55.2067 55.0167 55.2067C55.4531 55.2067 55.8853 55.1207 56.2885 54.9537C56.6917 54.7867 57.0581 54.5419 57.3667 54.2333L58.9667 52.6333L63.2 56.8666L56.8667 63.2ZM69.0333 23.4666C69.3423 23.1583 69.5875 22.792 69.7548 22.3887C69.922 21.9855 70.0081 21.5532 70.0081 21.1166C70.0081 20.6801 69.922 20.2478 69.7548 19.8446C69.5875 19.4413 69.3423 19.075 69.0333 18.7666L61.2333 10.9666C59.6667 9.39997 57.5 9.99997 56.5333 10.9666L50.4333 17.0666L62.9333 29.5666L69.0333 23.4666Z" fill="white"/>
                            </svg>
                        </div>
                        <div class="service-txt">
                            <p>平面設計</p>
                        </div>
                    </div>
                </div>
                <div class="service-wrapper col-12 col-xxl-3 col-md-6">
                    <div class="service-item">
                        <div class="service-icon">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M42.2185 23.3013L56.4435 37.5296L50.2739 56.0415L17.3716 65.8237L33.9674 49.228C34.9437 48.2516 34.9437 46.6687 33.9674 45.6924C32.9911 44.7161 31.4081 44.7161 30.4318 45.6924L14.3491 61.7751L24.7826 30.4803L42.2185 23.3013ZM24.855 30.2629C24.8549 30.2634 24.8548 30.2638 24.8546 30.2642L24.855 30.2629ZM7.47136 66.5959L20.1108 28.6841C20.111 28.6837 20.1111 28.6833 20.1113 28.6828C20.3151 28.0708 20.6482 27.5098 21.0879 27.0378C21.5279 26.5655 22.0643 26.1933 22.6608 25.9466L40.6186 18.5528C40.6183 18.5529 40.6189 18.5527 40.6186 18.5528C41.4398 18.2139 42.3437 18.1252 43.215 18.2987C44.0866 18.4722 44.8873 18.8999 45.5161 19.5278L60.1972 34.2123C60.1971 34.2121 60.1973 34.2124 60.1972 34.2123C60.788 34.8031 61.203 35.5471 61.3951 36.3603C61.5872 37.1736 61.5489 38.0244 61.2847 38.8173L54.9347 57.8706L54.9342 57.8722C54.7051 58.5579 54.3143 59.1783 53.7947 59.6809C53.2751 60.1835 52.6421 60.5536 51.9492 60.7597L13.0221 72.3332C12.233 72.5675 11.3941 72.5812 10.5979 72.3722C9.8017 72.1633 9.07809 71.7399 8.50581 71.1483C7.93352 70.5567 7.53446 69.8194 7.35206 69.0167C7.16969 68.2142 7.21101 67.3767 7.47136 66.5959ZM56.6616 37.7478C56.6614 37.7475 56.6611 37.7472 56.6608 37.7469L56.6616 37.7478Z" fill="white"/>
                                <path d="M61.3421 10.6068L69.2221 18.4868C69.8143 19.0533 70.2873 19.7324 70.6134 20.4843C70.9395 21.2361 71.1122 22.0455 71.1213 22.865C71.1303 23.6844 70.9756 24.4975 70.6662 25.2563C70.3567 26.0152 69.8989 26.7046 69.3194 27.2841C68.7399 27.8635 68.0505 28.3214 67.2916 28.6309C66.5328 28.9403 65.7197 29.095 64.9003 29.086C64.0808 29.0769 63.2714 28.9042 62.5196 28.5781C61.7677 28.252 61.0886 27.7789 60.5221 27.1868L52.6388 19.3068C51.5269 18.1446 50.9142 16.5933 50.932 14.985C50.9498 13.3767 51.5966 11.8392 52.7339 10.7019C53.8712 9.56462 55.4086 8.91782 57.0169 8.90003C58.6252 8.88225 60.1799 9.4949 61.3421 10.6068Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M34.6892 35.7149C35.5495 35.3629 36.4712 35.1858 37.4007 35.1939C38.3301 35.2019 39.2487 35.3951 40.1027 35.7619C40.9567 36.1288 41.7291 36.6621 42.3749 37.3306C43.65 38.6508 44.3555 40.4191 44.3396 42.2544C44.3236 44.0898 43.5874 45.8455 42.2896 47.1434C40.9917 48.4412 39.236 49.1774 37.4007 49.1933C35.5653 49.2093 33.7971 48.5037 32.4769 47.2286C31.8083 46.5829 31.275 45.8105 30.9082 44.9565C30.5413 44.1024 30.3482 43.1839 30.3401 42.2544C30.332 41.325 30.5091 40.4032 30.8611 39.5429C31.2131 38.6827 31.7328 37.9011 32.3901 37.2439C33.0473 36.5866 33.8289 36.0668 34.6892 35.7149ZM37.3659 39.1937C36.9676 39.1903 36.5725 39.2662 36.2038 39.417C35.8352 39.5678 35.5002 39.7906 35.2185 40.0723C34.9368 40.354 34.7141 40.6889 34.5632 41.0576C34.4124 41.4263 34.3365 41.8213 34.34 42.2197C34.3434 42.618 34.4262 43.0117 34.5834 43.3777C34.7406 43.7437 34.9692 44.0747 35.2557 44.3515C35.8215 44.8979 36.5793 45.2003 37.3659 45.1935C38.1525 45.1867 38.9049 44.8712 39.4612 44.3149C40.0174 43.7587 40.3329 43.0063 40.3397 42.2197C40.3466 41.4331 40.0442 40.6753 39.4977 40.1095C39.221 39.8229 38.8899 39.5944 38.5239 39.4372C38.1579 39.2799 37.7642 39.1972 37.3659 39.1937Z" fill="white"/>
                            </svg>
                        </div>
                        <div class="service-txt">
                            <p>UI設計</p>
                        </div>
                    </div>
                </div>
                <div class="service-wrapper col-12 col-xxl-3 col-md-6">
                    <div class="service-item">
                        <div class="service-icon">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M65 12.5H15C13.0109 12.5 11.1032 13.2902 9.6967 14.6967C8.29018 16.1032 7.5 18.0109 7.5 20V55C7.5 56.9891 8.29018 58.8968 9.6967 60.3033C11.1032 61.7098 13.0109 62.5 15 62.5H37.5V67.5H30C29.337 67.5 28.7011 67.7634 28.2322 68.2322C27.7634 68.7011 27.5 69.337 27.5 70C27.5 70.663 27.7634 71.2989 28.2322 71.7678C28.7011 72.2366 29.337 72.5 30 72.5H50C50.663 72.5 51.2989 72.2366 51.7678 71.7678C52.2366 71.2989 52.5 70.663 52.5 70C52.5 69.337 52.2366 68.7011 51.7678 68.2322C51.2989 67.7634 50.663 67.5 50 67.5H42.5V62.5H65C66.9891 62.5 68.8968 61.7098 70.3033 60.3033C71.7098 58.8968 72.5 56.9891 72.5 55V20C72.5 18.0109 71.7098 16.1032 70.3033 14.6967C68.8968 13.2902 66.9891 12.5 65 12.5ZM15 17.5H65C65.663 17.5 66.2989 17.7634 66.7678 18.2322C67.2366 18.7011 67.5 19.337 67.5 20V45H12.5V20C12.5 19.337 12.7634 18.7011 13.2322 18.2322C13.7011 17.7634 14.337 17.5 15 17.5ZM65 57.5H15C14.337 57.5 13.7011 57.2366 13.2322 56.7678C12.7634 56.2989 12.5 55.663 12.5 55V50H67.5V55C67.5 55.663 67.2366 56.2989 66.7678 56.7678C66.2989 57.2366 65.663 57.5 65 57.5Z" fill="white"/>
                            </svg>
                        </div>
                        <div class="service-txt">
                            <p>切版服務</p>
                        </div>
                    </div>
                </div>
                <div class="service-wrapper col-12 col-xxl-3 col-md-6">
                    <div class="service-item">
                        <div class="service-icon">
                            <svg fill="none" height="80" viewBox="0 0 80 80" width="80" xmlns="http://www.w3.org/2000/svg"><path d="m25.6178 32.3054-9.4337 7.6949 9.4337 7.6949c.3128.251.5719.5602.7621.9096.1902.3495.3078.7324.3462 1.1266.0383.3942-.0035.7919-.123 1.1702s-.3142.7297-.5731 1.034c-.2589.3042-.5768.5553-.9353.7387s-.7505.2955-1.1535.3299c-.403.0343-.8089-.0097-1.1944-.1297s-.7429-.3135-1.0516-.5693l-12.25814-9.9999c-.34524-.2815-.62301-.634-.81364-1.0323-.19062-.3983-.28944-.8328-.28944-1.2727s.09882-.8743.28944-1.2727c.19063-.3983.4684-.7507.81364-1.0322l12.25814-9.9999c.6253-.5017 1.4279-.7411 2.2328-.6662.8048.075 1.5468.4583 2.0643 1.0665.5175.6081.7685 1.3918.6983 2.1803-.0701.7885-.4557 1.5179-1.0728 2.0293zm44.9464 5.39-12.2581-9.9999c-.3087-.2559-.6661-.4494-1.0516-.5693-.3855-.12-.7914-.1641-1.1944-.1297-.403.0343-.795.1464-1.1535.3298s-.6764.4345-.9353.7388c-.2589.3042-.4536.6556-.5731 1.034-.1195.3783-.1613.776-.123 1.1702.0384.3942.156.7771.3462 1.1265.1902.3495.4493.6586.7621.9096l9.4337 7.6949-9.4337 7.6949c-.3128.251-.5719.5602-.7621.9096-.1902.3495-.3078.7324-.3462 1.1266-.0383.3942.0035.7919.123 1.1702s.3142.7297.5731 1.034c.2589.3042.5768.5553.9353.7387s.7505.2955 1.1535.3299c.403.0343.8089-.0097 1.1944-.1297s.7429-.3135 1.0516-.5693l12.2581-9.9999c.3453-.2815.6231-.634.8137-1.0323s.2894-.8328.2894-1.2727-.0988-.8743-.2894-1.2727c-.1906-.3983-.4684-.7507-.8137-1.0322zm-21.3444-22.5148c-.3783-.1346-.78-.195-1.1821-.1777-.4022.0173-.7969.112-1.1616.2787-.3648.1667-.6924.4021-.9642.6928-.2718.2906-.4824.6309-.6198 1.0012l-16.3442 43.9994c-.277.7476-.2395 1.5723.1043 2.2928s.9658 1.2779 1.7293 1.5497c.3352.1212.6898.183 1.0471.1825.6292.0001 1.2431-.1894 1.7585-.5427s.9072-.8534 1.1221-1.4323l16.3442-43.9994c.1376-.3703.1993-.7635.1816-1.1572s-.1145-.7801-.2848-1.1371c-.1702-.3571-.4107-.6778-.7076-.9439-.2969-.266-.6445-.4722-1.0228-.6068z" fill="#fff"/></svg>
                        </div>
                        <div class="service-txt">
                            <p>前端開發</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="service-footer">
            <p>想要合作或瞭解更多?</p>
            <button>詳細內容與合作流程<span>&rarr;</span></button>
        </div>
    </section>
    <article class="article">
        <div class="article-title">
            <div class="pic">
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-left-lg.png?raw=true" alt="left-line">
            </div>
            <h3 class="m-0">精選文章</h3>
            <div class="pic">
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-right-lg.png?raw=true" alt="right-line">
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="article-wrapper col-12 col-lg-3" v-for="article in newArticles">
                    <div class="article-item">
                        <div class="article-pic">
                            <img :src="article.image" alt="文章圖片">
                        </div>
                        <h4>{{ article.title }}</h4>
                        <div class="article-tag">
                            <span>{{ article.tag }}</span>
                            <span>{{ article.date }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="article-handler">
            <div class="dot" v-for="n in 5" @click="switchPic(n, $event)"></div>
        </div>
        <div class="article-btn">
            <button>更多文章<span>&rarr;</span></button>
        </div>
    </article>
    <Footer></Footer>
</template>

<style scoped>
    .banner{
        padding: 0;
        margin: 0;
    }
    .banner-description-container{
        padding-right: 24px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .banner-description h2{
        color: var(--main-text-color);
        font-weight: 600;
        font-size: 2.5rem;
        margin-bottom: 24px;
    }
    .banner-description p{
        color: #5b5b5b;
        font-size: 1.25rem;
    }
    .banner-description p span:first-child,
    .banner-description p span:nth-child(2){
        position: relative;
    }
    .banner-description p span:first-child::after,
    .banner-description p span:nth-child(2)::after{
        content: "";
        display: block;
        width: 100px;
        height: 8px;
        background-image: url("https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/mark.png");
        position: absolute;
        bottom: -5px;
        left: -5px;
    }
    .banner-breadcrumb-item{
        color: #c1c1c1;
        font-size: 1rem;
        margin-top: 16px;
    }
    .banner-icon-container{
        margin-top: 60px;
        display: flex;
        gap: 16px;
    }
    /*homework*/
    .homework-title{
        margin: 120px 0 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }
    .homework-title h3{
        font-size: 2rem;
        color: var(--main-text-color);
        font-weight: 600;
    }
    .homework-item{
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        padding-top: 80px;
    }
    .homework-item-1{
        background-image: url("https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/homepage-work1-bg.png?raw=true");
    }
    .homework-item-3{
        background:
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url("https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/homepage-work3-bg.png?raw=true");
        background-position: center, center;
        background-size: cover, cover;
    }
    .homework-pic{
        margin-right: 55px;
    }
    .homework-description{
        width: 100%;
        max-width: 526px;
        height: 400px;
        background-color: rgba(255, 255, 255, .1);
        color: #fff;
        align-self: center;
        padding: 80px 40px 56px 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 24px;
    }
    .homework-description-txt h4{
        font-size: 1.75rem;
        font-weight: 700;
    }
    .homework-description-txt p{
        font-size: 1rem;
        margin-bottom: 24px;
    }
    .homework-description-tag-list{
        display: flex;
        list-style: none;
        padding: 0;
        gap: 28px;
        position: relative;
    }
    .homework-description-tag-list::after{
        content: "";
        display: block;
        background-color: #f1f1f1;
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: -30px;
    }
    .homework-description-tag-list li{
        background-color: #fff;
        color: #3b3b3b;
        padding: 4px 12px;
        font-size: 1rem;
        border-radius: 16px;
    }
    .homework-description-btn-container{
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }
    .homework-description-btn-container button{
        background-color: #000;
        color: #fff;
        padding: 16px 32px;
        border-radius: 5px;
        border: none;
    }
    .homework-description-btn-container button a{
        text-decoration: none;
        color: #fff;
    }
    .homework-description-btn-container button span{
        display: inline-block;
        font-size: 1.5rem;
        margin-left: 8px;
    }
    /*第二層homework-item*/
    .homework-item-2{
        background: 
            linear-gradient(to right, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 50%),
            url('https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/homepage-work2-lg.png?raw=true');
        background-size: cover, cover;
        background-position: center, center;
    }
    .homework-pic-2{
        display: none;
    }
    .homework-description-container{
        order: -1;
        width: 50%;
        height: 800px;
        display: flex;
        align-items: center;
    }
    .homework-description-container .homework-description{
        margin-left: 30%;
    }
    /*service*/
    .service{
        margin-top: 120px;
        background-image: url("https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2024%20web-camp/homepage-services-bg.png");
    }
    .service-title{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        margin-bottom: 80px;
    }
    .service-title h3{
        font-size: 2rem;
        font-weight: 600;
        color: var(--main-text-color);
    }
    .service-item{
        background-image: url("https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/service-item-bg.png?raw=true");
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 12px auto;
        max-width: 302px;
        padding: 80px 30px ;
        gap: 24px;
    }
    .service-txt{
        color: #fff;
        font-size: 1.75rem;
        font-weight: 700;
    }
    .service-txt p{
        margin-bottom: 0;
    }
    .service-footer{
        margin-top: 80px;
        text-align: center;
    }
    .service-footer p{
        color: var(--main-text-color);
        font-size: 1.75rem;
        font-weight: 600;
    }
    .service-footer button{
        background-color: #000;
        color: #fff;
        font-size: 1.25rem;
        padding: 16px 32px;
        border-radius: 5px;
        border: none;
        font-weight: 600;
    }
    .service-footer button span{
        margin-left: 8px;
    }
    /*article*/
    .article{
        margin-top: 120px;
    }
    .article-title{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        margin-bottom: 80px;
    }
    .article-title h3{
        font-size: 2rem;
        color: var(--main-text-color);
        font-weight: 600;
    }
    .article .container .row{
        justify-content: center;
    }
    .article-wrapper{
        margin-bottom: 48px;
    }
    .article-item{
        margin: auto;
        max-width: 416px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }
    .article-pic{
        width: 100%;
    }
    .article-pic img{
        border-radius: 8px;
    }
    .article-item h4{
        padding: 16px 8px;
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--main-text-color);
    }
    .article-tag{
        padding: 0 8px;
        display: flex;
        justify-content: space-between;
        color: var(--main-text-color);
        font-size: 1rem;
        margin-top: auto;
    }
    .article-tag span:first-child{
        background-color: #f1f1f1;
        padding: 4px 12px;
        border-radius: 16px;
    }
    .article-handler{
        display: flex;
        justify-content: center;
        gap: 16px;
        margin-bottom: 120px;
    }
    .article-handler .dot{
        width: 12px;
        height: 12px;
        background-color: #e9e9e9;
        border-radius: 50%;
        cursor: pointer;
    }
    .article-handler .current{
        background-color: #000;
    }
    .article-btn{
        justify-content: center;
        display: none;
    }
    .article-btn button{
        background-color: #000;
        padding: 8px 16px;
        border-radius: 5px;
        color: #fff;
        font-size: 1rem;
        font-weight: 700;
    }
    @media (max-width: 1600px) {
        .homework-description-container .homework-description{
            margin-left: 20%;
        }
    }
    @media (max-width: 1400px) {
        .banner-description h2{
            margin-top: 20px;
            font-size: 2rem;
        }
        .banner-description p{
            font-size: 1rem;
        }
        .homework-description-container .homework-description{
            margin-left: 10%;
        }
    }
    @media (max-width: 1199px) {
        .homework-description-container .homework-description{
            margin: auto;
        }
    }
    @media (max-width: 991px) {
        .banner-description-container{
            padding-right: 12px;
            justify-content: center;
            text-align: center;
        }
        .banner-icon-container{
            margin-top: 24px;
            justify-content: center;
        }
        .banner-breadcrumb{
            justify-content: center;
        }
        .homework-title{
            margin: 40px 0 0;
        }
        .homework-item{
            flex-direction: column;
        }
        .homework-item-1,
        .homework-item-2,
        .homework-item-3{
            background-image: none;
        }   
        .homework-pic{
            margin-right: 0;
        }
        .homework-pic-1{
            background-image: url("https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/homepage-work1-bg.png?raw=true");
        }
        .homework-pic-2{
            display: block;
            width: 100%;
        }
        .homework-pic-3{
            background-image: url("https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/homepage-work3-bg.png?raw=true");
        }
        .homework-item-2{
            display: flex;
            flex-direction: column;
        }
        .homework-description-container{
            width: 100%;
            height: auto;
            order: 2;
        }
        .homework-description-container .homework-description{
            margin: 24px auto 0;
        }
        .homework-description{
            height: auto;
            margin-top: 24px;
            padding: 0;
            color: #1e1e1e;
            text-align: center;
            background-color: #fff;
        }
        .homework-description-txt p{
            color: #5b5b5b;
        }
        .homework-description-tag-list{
            justify-content: center;
        }
        .homework-description-tag-list::after{
            height: 0;
        }
        .homework-description-tag-list li{
            background-color: #f1f1f1;
        }
        .homework-description-btn-container{
            margin-top: 20px;
            margin-bottom: 20px;
        }
        .article-handler{
            display: none;
        }
        .article-btn{
            display: flex;
            margin-bottom: 80px;
        }
    }
    @media (max-width: 450px) {
        .banner-description p span:nth-child(2){
            display: block;
            width: 100%;
        }
        .banner-description p span:nth-child(2)::after{
            left: 50%;
            transform: translateX(-50%);
        }
        .homework-title,
        .service-title,
        .article-title{
            gap: 8px;
        }
    }
</style>
<script setup>
    import Nav from "../components/Nav.vue";
    import Footer from "../components/Footer.vue";
</script>

<template>
    <Nav></Nav>
    <header>
        <div class="header-title">
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
                <div class="header-wrapper col-12 col-xxl-3 col-md-6">
                    <div class="header-item">
                        <div class="header-icon">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M54.1333 38.3666L59.3667 33.1333L46.8667 20.6333L41.6333 25.8666L27.8333 12.1C25.2333 9.49997 21 9.49997 18.4 12.1L12.0667 18.4333C9.46667 21.0333 9.46667 25.2666 12.0667 27.8666L25.8333 41.6333L10.5 57C10.1667 57.3333 10 57.7333 10 58.2V68.3333C10 69.2666 10.7333 70 11.6667 70H21.8C22.2333 70 22.6667 69.8333 22.9667 69.5L38.3667 54.1L52.1333 67.8666C56.5333 72.2666 61.3333 68.1 61.5667 67.8666L67.9 61.5333C70.5 58.9333 70.5 54.7 67.9 52.1L54.1333 38.3666ZM30.6 36.9L16.8 23.1333L23.1 16.8L27.3333 21.0333L25.7667 22.6666C25.1434 23.2899 24.7933 24.1352 24.7933 25.0166C24.7933 25.8981 25.1434 26.7434 25.7667 27.3666C26.3899 27.9899 27.2352 28.34 28.1167 28.34C28.9981 28.34 29.8434 27.9899 30.4667 27.3666L32.0667 25.7666L36.9 30.6L30.6 36.9ZM56.8667 63.2L43.1 49.4333L49.4333 43.1L54.2667 47.9333L52.6667 49.5333C52.3581 49.8419 52.1133 50.2083 51.9462 50.6115C51.7792 51.0147 51.6933 51.4469 51.6933 51.8833C51.6933 52.3197 51.7792 52.7519 51.9462 53.1551C52.1133 53.5583 52.3581 53.9247 52.6667 54.2333C52.9753 54.5419 53.3416 54.7867 53.7449 54.9537C54.1481 55.1207 54.5802 55.2067 55.0167 55.2067C55.4531 55.2067 55.8853 55.1207 56.2885 54.9537C56.6917 54.7867 57.0581 54.5419 57.3667 54.2333L58.9667 52.6333L63.2 56.8666L56.8667 63.2ZM69.0333 23.4666C69.3423 23.1583 69.5875 22.792 69.7548 22.3887C69.922 21.9855 70.0081 21.5532 70.0081 21.1166C70.0081 20.6801 69.922 20.2478 69.7548 19.8446C69.5875 19.4413 69.3423 19.075 69.0333 18.7666L61.2333 10.9666C59.6667 9.39997 57.5 9.99997 56.5333 10.9666L50.4333 17.0666L62.9333 29.5666L69.0333 23.4666Z" fill="white"/>
                            </svg>
                        </div>
                        <div class="header-txt">
                            <p>平面設計</p>
                        </div>
                    </div>
                </div>
                <div class="header-wrapper col-12 col-xxl-3 col-md-6">
                    <div class="header-item">
                        <div class="header-icon">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M42.2185 23.3013L56.4435 37.5296L50.2739 56.0415L17.3716 65.8237L33.9674 49.228C34.9437 48.2516 34.9437 46.6687 33.9674 45.6924C32.9911 44.7161 31.4081 44.7161 30.4318 45.6924L14.3491 61.7751L24.7826 30.4803L42.2185 23.3013ZM24.855 30.2629C24.8549 30.2634 24.8548 30.2638 24.8546 30.2642L24.855 30.2629ZM7.47136 66.5959L20.1108 28.6841C20.111 28.6837 20.1111 28.6833 20.1113 28.6828C20.3151 28.0708 20.6482 27.5098 21.0879 27.0378C21.5279 26.5655 22.0643 26.1933 22.6608 25.9466L40.6186 18.5528C40.6183 18.5529 40.6189 18.5527 40.6186 18.5528C41.4398 18.2139 42.3437 18.1252 43.215 18.2987C44.0866 18.4722 44.8873 18.8999 45.5161 19.5278L60.1972 34.2123C60.1971 34.2121 60.1973 34.2124 60.1972 34.2123C60.788 34.8031 61.203 35.5471 61.3951 36.3603C61.5872 37.1736 61.5489 38.0244 61.2847 38.8173L54.9347 57.8706L54.9342 57.8722C54.7051 58.5579 54.3143 59.1783 53.7947 59.6809C53.2751 60.1835 52.6421 60.5536 51.9492 60.7597L13.0221 72.3332C12.233 72.5675 11.3941 72.5812 10.5979 72.3722C9.8017 72.1633 9.07809 71.7399 8.50581 71.1483C7.93352 70.5567 7.53446 69.8194 7.35206 69.0167C7.16969 68.2142 7.21101 67.3767 7.47136 66.5959ZM56.6616 37.7478C56.6614 37.7475 56.6611 37.7472 56.6608 37.7469L56.6616 37.7478Z" fill="white"/>
                                <path d="M61.3421 10.6068L69.2221 18.4868C69.8143 19.0533 70.2873 19.7324 70.6134 20.4843C70.9395 21.2361 71.1122 22.0455 71.1213 22.865C71.1303 23.6844 70.9756 24.4975 70.6662 25.2563C70.3567 26.0152 69.8989 26.7046 69.3194 27.2841C68.7399 27.8635 68.0505 28.3214 67.2916 28.6309C66.5328 28.9403 65.7197 29.095 64.9003 29.086C64.0808 29.0769 63.2714 28.9042 62.5196 28.5781C61.7677 28.252 61.0886 27.7789 60.5221 27.1868L52.6388 19.3068C51.5269 18.1446 50.9142 16.5933 50.932 14.985C50.9498 13.3767 51.5966 11.8392 52.7339 10.7019C53.8712 9.56462 55.4086 8.91782 57.0169 8.90003C58.6252 8.88225 60.1799 9.4949 61.3421 10.6068Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M34.6892 35.7149C35.5495 35.3629 36.4712 35.1858 37.4007 35.1939C38.3301 35.2019 39.2487 35.3951 40.1027 35.7619C40.9567 36.1288 41.7291 36.6621 42.3749 37.3306C43.65 38.6508 44.3555 40.4191 44.3396 42.2544C44.3236 44.0898 43.5874 45.8455 42.2896 47.1434C40.9917 48.4412 39.236 49.1774 37.4007 49.1933C35.5653 49.2093 33.7971 48.5037 32.4769 47.2286C31.8083 46.5829 31.275 45.8105 30.9082 44.9565C30.5413 44.1024 30.3482 43.1839 30.3401 42.2544C30.332 41.325 30.5091 40.4032 30.8611 39.5429C31.2131 38.6827 31.7328 37.9011 32.3901 37.2439C33.0473 36.5866 33.8289 36.0668 34.6892 35.7149ZM37.3659 39.1937C36.9676 39.1903 36.5725 39.2662 36.2038 39.417C35.8352 39.5678 35.5002 39.7906 35.2185 40.0723C34.9368 40.354 34.7141 40.6889 34.5632 41.0576C34.4124 41.4263 34.3365 41.8213 34.34 42.2197C34.3434 42.618 34.4262 43.0117 34.5834 43.3777C34.7406 43.7437 34.9692 44.0747 35.2557 44.3515C35.8215 44.8979 36.5793 45.2003 37.3659 45.1935C38.1525 45.1867 38.9049 44.8712 39.4612 44.3149C40.0174 43.7587 40.3329 43.0063 40.3397 42.2197C40.3466 41.4331 40.0442 40.6753 39.4977 40.1095C39.221 39.8229 38.8899 39.5944 38.5239 39.4372C38.1579 39.2799 37.7642 39.1972 37.3659 39.1937Z" fill="white"/>
                            </svg>
                        </div>
                        <div class="header-txt">
                            <p>UI設計</p>
                        </div>
                    </div>
                </div>
                <div class="header-wrapper col-12 col-xxl-3 col-md-6">
                    <div class="header-item">
                        <div class="header-icon">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M65 12.5H15C13.0109 12.5 11.1032 13.2902 9.6967 14.6967C8.29018 16.1032 7.5 18.0109 7.5 20V55C7.5 56.9891 8.29018 58.8968 9.6967 60.3033C11.1032 61.7098 13.0109 62.5 15 62.5H37.5V67.5H30C29.337 67.5 28.7011 67.7634 28.2322 68.2322C27.7634 68.7011 27.5 69.337 27.5 70C27.5 70.663 27.7634 71.2989 28.2322 71.7678C28.7011 72.2366 29.337 72.5 30 72.5H50C50.663 72.5 51.2989 72.2366 51.7678 71.7678C52.2366 71.2989 52.5 70.663 52.5 70C52.5 69.337 52.2366 68.7011 51.7678 68.2322C51.2989 67.7634 50.663 67.5 50 67.5H42.5V62.5H65C66.9891 62.5 68.8968 61.7098 70.3033 60.3033C71.7098 58.8968 72.5 56.9891 72.5 55V20C72.5 18.0109 71.7098 16.1032 70.3033 14.6967C68.8968 13.2902 66.9891 12.5 65 12.5ZM15 17.5H65C65.663 17.5 66.2989 17.7634 66.7678 18.2322C67.2366 18.7011 67.5 19.337 67.5 20V45H12.5V20C12.5 19.337 12.7634 18.7011 13.2322 18.2322C13.7011 17.7634 14.337 17.5 15 17.5ZM65 57.5H15C14.337 57.5 13.7011 57.2366 13.2322 56.7678C12.7634 56.2989 12.5 55.663 12.5 55V50H67.5V55C67.5 55.663 67.2366 56.2989 66.7678 56.7678C66.2989 57.2366 65.663 57.5 65 57.5Z" fill="white"/>
                            </svg>
                        </div>
                        <div class="header-txt">
                            <p>切版服務</p>
                        </div>
                    </div>
                </div>
                <div class="header-wrapper col-12 col-xxl-3 col-md-6">
                    <div class="header-item">
                        <div class="header-icon">
                            <svg fill="none" height="80" viewBox="0 0 80 80" width="80" xmlns="http://www.w3.org/2000/svg"><path d="m25.6178 32.3054-9.4337 7.6949 9.4337 7.6949c.3128.251.5719.5602.7621.9096.1902.3495.3078.7324.3462 1.1266.0383.3942-.0035.7919-.123 1.1702s-.3142.7297-.5731 1.034c-.2589.3042-.5768.5553-.9353.7387s-.7505.2955-1.1535.3299c-.403.0343-.8089-.0097-1.1944-.1297s-.7429-.3135-1.0516-.5693l-12.25814-9.9999c-.34524-.2815-.62301-.634-.81364-1.0323-.19062-.3983-.28944-.8328-.28944-1.2727s.09882-.8743.28944-1.2727c.19063-.3983.4684-.7507.81364-1.0322l12.25814-9.9999c.6253-.5017 1.4279-.7411 2.2328-.6662.8048.075 1.5468.4583 2.0643 1.0665.5175.6081.7685 1.3918.6983 2.1803-.0701.7885-.4557 1.5179-1.0728 2.0293zm44.9464 5.39-12.2581-9.9999c-.3087-.2559-.6661-.4494-1.0516-.5693-.3855-.12-.7914-.1641-1.1944-.1297-.403.0343-.795.1464-1.1535.3298s-.6764.4345-.9353.7388c-.2589.3042-.4536.6556-.5731 1.034-.1195.3783-.1613.776-.123 1.1702.0384.3942.156.7771.3462 1.1265.1902.3495.4493.6586.7621.9096l9.4337 7.6949-9.4337 7.6949c-.3128.251-.5719.5602-.7621.9096-.1902.3495-.3078.7324-.3462 1.1266-.0383.3942.0035.7919.123 1.1702s.3142.7297.5731 1.034c.2589.3042.5768.5553.9353.7387s.7505.2955 1.1535.3299c.403.0343.8089-.0097 1.1944-.1297s.7429-.3135 1.0516-.5693l12.2581-9.9999c.3453-.2815.6231-.634.8137-1.0323s.2894-.8328.2894-1.2727-.0988-.8743-.2894-1.2727c-.1906-.3983-.4684-.7507-.8137-1.0322zm-21.3444-22.5148c-.3783-.1346-.78-.195-1.1821-.1777-.4022.0173-.7969.112-1.1616.2787-.3648.1667-.6924.4021-.9642.6928-.2718.2906-.4824.6309-.6198 1.0012l-16.3442 43.9994c-.277.7476-.2395 1.5723.1043 2.2928s.9658 1.2779 1.7293 1.5497c.3352.1212.6898.183 1.0471.1825.6292.0001 1.2431-.1894 1.7585-.5427s.9072-.8534 1.1221-1.4323l16.3442-43.9994c.1376-.3703.1993-.7635.1816-1.1572s-.1145-.7801-.2848-1.1371c-.1702-.3571-.4107-.6778-.7076-.9439-.2969-.266-.6445-.4722-1.0228-.6068z" fill="#fff"/></svg>
                        </div>
                        <div class="header-txt">
                            <p>前端開發</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <main>
        <div class="main-title">
            <div class="pic">
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-left-lg.png?raw=true" alt="left-line">
            </div>
            <h3 class="m-0">服務項目</h3>
            <div class="pic">
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-right-lg.png?raw=true" alt="right-line">
            </div>
        </div>
        <oi class="main-content">
            <li>
                <div class="number">
                    1
                </div>
                <div class="content">
                    <h3>初步接洽</h3>
                    <p>透過表單或其他社群軟體與我聯絡<br>
                    根據難易度與複雜度, 後續可以需要電話/線上討論</p>
                </div>
            </li>
            <div class="arrow">&darr;</div>
            <li>
                <div class="number">
                    2
                </div>
                <div class="content">
                    <h3>需求釐清</h3>
                    <p>透過訪談與問卷, 解析客戶需求, 並針對痛點給予實際建議</p>
                </div>
            </li>
            <div class="arrow">&darr;</div>
            <li>
                <div class="number">
                    3
                </div>
                <div class="content">
                    <h3>委託簽約</h3>
                    <p>合約雙方用印後, 即正式開始合作<br>
                    可提供發票或勞務報酬單, 需支付 20%訂金</p>
                </div>
            </li>
            <div class="arrow">&darr;</div>
            <li>
                <div class="number">
                    4
                </div>
                <div class="content">
                    <h3>版本呈現</h3>
                    <p>根據合約內容進行設計或開發</p>
                </div>
            </li>
            <div class="arrow">&darr;</div>
            <li>
                <div class="number">
                    5
                </div>
                <div class="content">
                    <h3>來回修正</h3>
                    <p>依據合約規定之修正次數進行, 次數計算以mail為準</p>
                </div>
            </li>
            <div class="arrow">&darr;</div>
            <li>
                <div class="number">
                    6
                </div>
                <div class="content">
                    <h3>終版確認</h3>
                    <p>雙方同意後即為最終版</p>
                </div>
            </li>
            <div class="arrow">&darr;</div>
            <li>
                <div class="number">
                    7
                </div>
                <div class="content">
                    <h3>結案</h3>
                    <p>客戶簽署驗收單, 並於約定日期支付尾款</p>
                </div>
            </li>
        </oi>
    </main>
    <section class="price">
        <div class="price-title">
            <div class="pic">
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-left-lg.png?raw=true" alt="left-line">
            </div>
            <h3 class="m-0">價格表</h3>
            <div class="pic">
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-right-lg.png?raw=true" alt="right-line">
            </div>
        </div>
        <div class="container-fluid container-xxl">
            <div class="row">
                <div class="price-wrapper col-12 col-xl-4">
                    <div class="price-item">
                        <div class="logo">
                            <svg width="56" height="56" viewBox="0 0 80 80" fill="#c1c1c1" xmlns="http://www.w3.org/2000/svg">
                                <path d="M54.1333 38.3666L59.3667 33.1333L46.8667 20.6333L41.6333 25.8666L27.8333 12.1C25.2333 
                                9.49997 21 9.49997 18.4 12.1L12.0667 18.4333C9.46667 21.0333 9.46667 25.2666 12.0667 27.8666L25.8333 
                                41.6333L10.5 57C10.1667 57.3333 10 57.7333 10 58.2V68.3333C10 69.2666 10.7333 70 11.6667 70H21.8C22.2333 
                                70 22.6667 69.8333 22.9667 69.5L38.3667 54.1L52.1333 67.8666C56.5333 72.2666 61.3333 68.1 61.5667 67.8666L67.9 61.5333C70.5 58.9333 70.5 54.7 67.9 52.1L54.1333 38.3666ZM30.6 36.9L16.8 23.1333L23.1 16.8L27.3333 21.0333L25.7667 22.6666C25.1434 23.2899 24.7933 24.1352 24.7933 25.0166C24.7933 25.8981 25.1434 26.7434 25.7667 27.3666C26.3899 27.9899 27.2352 28.34 28.1167 28.34C28.9981 28.34 29.8434 27.9899 30.4667 27.3666L32.0667 25.7666L36.9 30.6L30.6 36.9ZM56.8667 
                                63.2L43.1 49.4333L49.4333 43.1L54.2667 47.9333L52.6667 49.5333C52.3581 49.8419 52.1133 50.2083 51.9462 50.6115C51.7792 51.0147 51.6933 51.4469 51.6933 51.8833C51.6933 52.3197 51.7792 52.7519 51.9462 53.1551C52.1133 53.5583 52.3581 53.9247 52.6667 54.2333C52.9753 54.5419 53.3416 54.7867 53.7449 54.9537C54.1481 55.1207 54.5802 55.2067 55.0167 55.2067C55.4531 55.2067 55.8853 55.1207 56.2885 54.9537C56.6917 54.7867 57.0581 54.5419 57.3667 54.2333L58.9667 52.6333L63.2 56.8666L56.8667 63.2ZM69.0333 23.4666C69.3423 23.1583 69.5875 22.792 
                                69.7548 22.3887C69.922 21.9855 70.0081 21.5532 70.0081 21.1166C70.0081 20.6801 69.922 20.2478 69.7548 19.8446C69.5875 19.4413 69.3423 19.075 69.0333 18.7666L61.2333 10.9666C59.6667 9.39997 57.5 9.99997 56.5333 
                                10.9666L50.4333 17.0666L62.9333 29.5666L69.0333 23.4666Z" fill="#c1c1c1"/>
                            </svg>
                        </div>
                        <h4 class="m-0">平面設計</h4>
                        <div class="line"></div>
                        <p class="m-0">6,000
                            <span>起</span>
                        </p>
                    </div>
                </div>
                <div class="price-wrapper col-12 col-xl-4">
                    <div class="price-item">
                        <div class="logo">
                            <svg width="56" height="56" viewBox="0 0 80 80" fill="#c1c1c1" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M42.2185 23.3013L56.4435 37.5296L50.2739 56.0415L17.3716 65.8237L33.9674 49.228C34.9437 48.2516 34.9437 46.6687 33.9674 45.6924C32.9911 44.7161 31.4081 44.7161 30.4318 45.6924L14.3491 61.7751L24.7826 30.4803L42.2185 23.3013ZM24.855 30.2629C24.8549 30.2634 24.8548 30.2638 24.8546 30.2642L24.855 30.2629ZM7.47136 66.5959L20.1108 28.6841C20.111 28.6837 20.1111 28.6833 20.1113 28.6828C20.3151 28.0708 20.6482 27.5098 21.0879 27.0378C21.5279 26.5655 22.0643 26.1933 22.6608 25.9466L40.6186 18.5528C40.6183 18.5529 40.6189 18.5527 40.6186 18.5528C41.4398 18.2139 42.3437 18.1252 43.215 18.2987C44.0866 18.4722 44.8873 18.8999 45.5161 19.5278L60.1972 34.2123C60.1971 34.2121 60.1973 34.2124 60.1972 34.2123C60.788 34.8031 61.203 35.5471 61.3951 36.3603C61.5872 37.1736 61.5489 38.0244 61.2847 38.8173L54.9347 57.8706L54.9342 57.8722C54.7051 58.5579 54.3143 59.1783 53.7947 59.6809C53.2751 60.1835 52.6421 60.5536 51.9492 60.7597L13.0221 72.3332C12.233 72.5675 11.3941 72.5812 10.5979 72.3722C9.8017 72.1633 9.07809 71.7399 8.50581 71.1483C7.93352 70.5567 7.53446 69.8194 7.35206 69.0167C7.16969 68.2142 7.21101 67.3767 7.47136 66.5959ZM56.6616 37.7478C56.6614 37.7475 56.6611 37.7472 56.6608 37.7469L56.6616 37.7478Z" fill="#c1c1c1"/>
                                <path d="M61.3421 10.6068L69.2221 18.4868C69.8143 19.0533 70.2873 19.7324 70.6134 20.4843C70.9395 21.2361 71.1122 22.0455 71.1213 22.865C71.1303 23.6844 70.9756 24.4975 70.6662 25.2563C70.3567 26.0152 69.8989 26.7046 69.3194 27.2841C68.7399 27.8635 68.0505 28.3214 67.2916 28.6309C66.5328 28.9403 65.7197 29.095 64.9003 29.086C64.0808 29.0769 63.2714 28.9042 62.5196 28.5781C61.7677 28.252 61.0886 27.7789 60.5221 27.1868L52.6388 19.3068C51.5269 18.1446 50.9142 16.5933 50.932 14.985C50.9498 13.3767 51.5966 11.8392 52.7339 10.7019C53.8712 9.56462 55.4086 8.91782 57.0169 8.90003C58.6252 8.88225 60.1799 9.4949 61.3421 10.6068Z" fill="#c1c1c1" stroke="#c1c1c1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M34.6892 35.7149C35.5495 35.3629 36.4712 35.1858 37.4007 35.1939C38.3301 35.2019 39.2487 35.3951 40.1027 35.7619C40.9567 36.1288 41.7291 36.6621 42.3749 37.3306C43.65 38.6508 44.3555 40.4191 44.3396 42.2544C44.3236 44.0898 43.5874 45.8455 42.2896 47.1434C40.9917 48.4412 39.236 49.1774 37.4007 49.1933C35.5653 49.2093 33.7971 48.5037 32.4769 47.2286C31.8083 46.5829 31.275 45.8105 30.9082 44.9565C30.5413 44.1024 30.3482 43.1839 30.3401 42.2544C30.332 41.325 30.5091 40.4032 30.8611 39.5429C31.2131 38.6827 31.7328 37.9011 32.3901 37.2439C33.0473 36.5866 33.8289 36.0668 34.6892 35.7149ZM37.3659 39.1937C36.9676 39.1903 36.5725 39.2662 36.2038 39.417C35.8352 39.5678 35.5002 39.7906 35.2185 40.0723C34.9368 40.354 34.7141 40.6889 34.5632 41.0576C34.4124 41.4263 34.3365 41.8213 34.34 42.2197C34.3434 42.618 34.4262 43.0117 34.5834 43.3777C34.7406 43.7437 34.9692 44.0747 35.2557 44.3515C35.8215 44.8979 36.5793 45.2003 37.3659 45.1935C38.1525 45.1867 38.9049 44.8712 39.4612 44.3149C40.0174 43.7587 40.3329 43.0063 40.3397 42.2197C40.3466 41.4331 40.0442 40.6753 39.4977 40.1095C39.221 39.8229 38.8899 39.5944 38.5239 39.4372C38.1579 39.2799 37.7642 39.1972 37.3659 39.1937Z" fill="#c1c1c1"/>
                            </svg>
                        </div>
                        <h4 class="m-0">UI設計</h4>
                        <div class="line"></div>
                        <p class="m-0">15,000
                            <span>起</span>
                        </p>
                    </div>
                </div>
                <div class="price-wrapper col-12 col-xl-4">
                    <div class="price-item">
                        <div class="logo">
                            <svg fill="none" height="56" viewBox="0 0 80 80" width="56" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="m25.6178 32.3054-9.4337 7.6949 9.4337 
                                7.6949c.3128.251.5719.5602.7621.9096.1902.3495.3078.7324.3462 
                                1.1266.0383.3942-.0035.7919-.123 1.1702s-.3142.7297-.5731 
                                1.034c-.2589.3042-.5768.5553-.9353.7387s-.7505.2955-1.1535.3299c-.403.0343-.8089-.0097-1.1944-.1297s-.7429-.3135-1.0516-.5693l-12.25814-9.9999c-.34524-.2815-.62301-.634-.81364-1.0323-.19062-.3983-.28944-.8328-.28944-1.2727s.09882-.8743.28944-1.2727c.19063-.3983.4684-.7507.81364-1.0322l12.25814-9.9999c.6253-.5017 1.4279-.7411 2.2328-.6662.8048.075 1.5468.4583 2.0643 1.0665.5175.6081.7685 1.3918.6983 2.1803-.0701.7885-.4557 1.5179-1.0728 
                                2.0293zm44.9464 5.39-12.2581-9.9999c-.3087-.2559-.6661-.4494-1.0516-.5693-.3855-.12-.7914-.1641-1.1944-.1297-.403.0343-.795.1464-1.1535.3298s-.6764.4345-.9353.7388c-.2589.3042-.4536.6556-.5731 1.034-.1195.3783-.1613.776-.123 1.1702.0384.3942.156.7771.3462 1.1265.1902.3495.4493.6586.7621.9096l9.4337 7.6949-9.4337 7.6949c-.3128.251-.5719.5602-.7621.9096-.1902.3495-.3078.7324-.3462 1.1266-.0383.3942.0035.7919.123 1.1702s.3142.7297.5731 
                                1.034c.2589.3042.5768.5553.9353.7387s.7505.2955 1.1535.3299c.403.0343.8089-.0097 1.1944-.1297s.7429-.3135 1.0516-.5693l12.2581-9.9999c.3453-.2815.6231-.634.8137-1.0323s.2894-.8328.2894-1.2727-.0988-.8743-.2894-1.2727c-.1906-.3983-.4684-.7507-.8137-1.0322zm-21.3444-22.5148c-.3783-.1346-.78-.195-1.1821-.1777-.4022.0173-.7969.112-1.1616.2787-.3648.1667-.6924.4021-.9642.6928-.2718.2906-.4824.6309-.6198 1.0012l-16.3442 43.9994c-.277.7476-.2395 1.5723.1043 2.2928s.9658 1.2779 1.7293 1.5497c.3352.1212.6898.183 
                                1.0471.1825.6292.0001 1.2431-.1894 1.7585-.5427s.9072-.8534 1.1221-1.4323l16.3442-43.9994c.1376-.3703.1993-.7635.1816-1.1572s-.1145-.7801-.2848-1.1371c-.1702-.3571-.4107-.6778-.7076-.9439-.2969-.266-.6445-.4722-1.0228-.6068z" fill="#c1c1c1"/>
                            </svg>
                        </div>
                        <h4 class="m-0">前端開發</h4>
                        <div class="line"></div>
                        <p class="m-0">22,000
                            <span>起</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="client-case">
        <div class="client-case-title">
            <div class="pic">
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-left-lg.png?raw=true" alt="left-line">
            </div>
            <h3 class="m-0">客戶案例</h3>
            <div class="pic">
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-right-lg.png?raw=true" alt="right-line">
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="client-case-wrapper col-12 col-lg-6">
                    <div class="client-case-item">
                        <div class="pic">
                            <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image4.png?raw=true" alt="客戶案例">
                        </div>
                        <div class="txt">
                            <h3>美美美早餐店</h3>
                            <p>訂單送單一目瞭然, 自動報表分析好輕鬆</p>
                        </div>
                        <ul class="tag">
                            <li>UI設計</li>
                            <li>前端開發</li>
                            <li>Wix</li>
                        </ul>
                    </div>
                </div>
                <div class="client-case-wrapper col-12 col-lg-6">
                    <div class="client-case-item">
                        <div class="pic">
                            <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image6.png?raw=true" alt="客戶案例">
                        </div>
                        <div class="txt">
                            <h3>巧克巧克形象官網</h3>
                            <p>三步驟完成訂票, 電腦手機都支援</p>
                        </div>
                        <ul class="tag">
                            <li>UI設計</li>
                            <li>設計系統</li>
                            <li>網路電商</li>
                        </ul>
                    </div>
                </div>
                <div class="client-case-wrapper col-12 col-lg-6">
                    <div class="client-case-item">
                        <div class="pic">
                            <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image5.png?raw=true" alt="客戶案例">
                        </div>
                        <div class="txt">
                            <h3>電影院訂票系統</h3>
                            <p>三步驟完成訂票, 電腦手機都支援</p>
                        </div>
                        <ul class="tag">
                            <li>前端開發</li>
                            <li>後端支援</li>
                            <li>Vue</li>
                        </ul>
                    </div>
                </div>
                <div class="client-case-wrapper col-12 col-lg-6">
                    <div class="client-case-item">
                        <div class="pic">
                            <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image7.png?raw=true" alt="客戶案例">
                        </div>
                        <div class="txt">
                            <h3>2023餉茶坊飲料旗艦店活動官網設計</h3>
                            <p>主打水果主題, 冰鎮夏天暑氣</p>
                        </div>
                        <ul class="tag">
                            <li>網頁設計</li>
                            <li>切版服務</li>
                            <li>javascript</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="question">
        <div class="question-title">
            <div class="pic">
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-left-lg.png?raw=true" alt="left-line">
            </div>
            <h3 class="m-0">常見問題</h3>
            <div class="pic">
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/title-deco-right-lg.png?raw=true" alt="right-line">
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6 mt-4">
                    <div class="question-item">
                        <h4>時程很趕的話可以加快作業嗎?</h4>
                        <p>每提早一天, 只要支付總報價的5%, 我們即會視為急件為您趕工!</p>
                    </div>
                </div>
                <div class="col-12 col-lg-6 mt-4">
                    <div class="question-item">
                        <h4>白天可以開會討論嗎?</h4>
                        <p>每週一三五的白天, 可以約定開會時間!</p>
                    </div>
                </div>
                <div class="col-12 col-lg-6 mt-4">
                    <div class="question-item">
                        <h4>有實際開發的網站可以參考嗎?</h4>
                        <p>請填寫表單或來信索取, 部分合作有簽保密協定, 無法於網路上公開喔。</p>
                    </div>
                </div>
                <div class="col-12 col-lg-6 mt-4">
                    <div class="question-item">
                        <h4>提供比稿服務嗎?</h4>
                        <p>只要支付費用, 設計提供比稿服務, 但切板與前端開發恕不提供該服務內容。</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <Footer></Footer>
    </footer>
</template>

<style scoped>
    header{
        margin: 120px 0;
    }
    .header-title{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        margin-bottom: 80px;
    }
    .header-title h3{
        font-size: 2rem;
        font-weight: 600;
        color: var(--main-text-color);
    }
    .header-item{
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
    .header-txt{
        color: #fff;
        font-size: 1.75rem;
        font-weight: 700;
    }
    .header-txt p{
        margin-bottom: 0;
    }
    main{
        background: 
            url("https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/service-item-bg.png?raw=true")
            no-repeat
            center / 100% 100%;
        padding: 120px 12px;
        margin-bottom: 120px;
    }
    .main-content{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .main-content li{
        background-color: #3b3b3b;
        border: 1px #919191 solid;
        border-radius: 4px;
        padding: 24px 32px;
        display: flex;
        align-items: center;
        max-width: 650px;
        flex: 1;
        width: 100%;
    }
    main .number{
        font-family: "Tourney", sans-serif;
        font-weight: 400;
        font-size: 4.5rem;
        color: #919191;
        margin-right: 32px;
    }
    .main-title{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        gap: 16px;
        margin-bottom: 80px;
    }
    .arrow{
        margin: 24px 0;
        color: #5b5b5b;
        font-size: 1.5rem;
    }
    .content h3{
        color: #fff;
        font-size: 1.75rem;
    }
    .content p{
        color: #e9e9e9;
        font-size: 1.25rem;
    }
    .price-title{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        margin-bottom: 80px;
    }
    .price-wrapper{
        margin-bottom: 24px;
    }
    .price-item{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #fafafa;
        padding: 32px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, .1);
    }
    .price-item h4{
        color: #5b5b5b;
        font-weight: 600;
        font-size: 1.75rem;
    }
    .price-item p{
        color: #1e1e1e;
        font-size: 2rem;
        font-weight: 700;
    }
    .price-item p span{
        font-size: 1rem;
        font-weight: 400;
        color: #5b5b5b;
    }
    .price-item .line{
        width: 41px;
        height: 1px;
        background-color: #c1c1c1;
        border-radius: 8px;
    }
    .client-case{
        padding: 80px 0;
    }
    .client-case-title{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        margin-bottom: 80px;
    }
    .client-case-wrapper{
        margin-top: 80px;
    }
    .client-case-item{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .client-case-item .pic img{
        border-radius: 8px;
    }
    .client-case-item .txt{
        padding: 16px 0 0 16px;
        margin-bottom: 24px;
    }
    .client-case-item .txt h3{
        color: var(--main-text-color);
        font-size: 1.75rem;
        font-weight: 700;
    }
    .client-case-item .txt p{
        color: #919191;
        font-size: 1rem;
    }
    .client-case-item .tag{
        display: flex;
        list-style: none;
        padding-left: 16px;
        gap: 16px;
        margin-top: auto;
    }
    .client-case-item .tag li{
        background-color: #f1f1f1;
        padding: 4px 12px;
        font-size: 1rem;
        border-radius: 16px;
    }
    .question-title{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        margin-bottom: 56px;
    }
    .question-item{
        display: flex;
        flex-direction: column;
        height: 100%;
        align-items: flex-start;
        border: 1px #e9e9e9 solid;
        border-radius: 8px;
        padding: 24px;
    }
    .question-item h4{
        color: var(--main-text-color);
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 16px;
    }
    footer{
        margin-top: 140px;
    }
    @media (max-width: 1500px) {
        .price-item{
            padding: 24px;
        }
    }
    @media (max-width: 1400px) {
        .price-item{
            margin: auto;
            max-width: 400px;
        }
        .price-item h4{
            font-size: 1.5rem;
        }
        .price-item p{
            font-size: 1.75rem;
        }
        .client-case-wrapper{
            margin-top: 48px;
        }
    }
    @media (max-width: 991px) {
        .question-title{
            margin-bottom: 16px;
        }
        .question-item h4{
            font-size: 1.25rem;
        }
    }
    @media (max-width: 575px) {
        .main-title{
            margin-bottom: 40px;
        }
        .main-content li{
            flex-direction: column;
        }
        main .number{
            margin-right: 0;
        }
        .content{
            text-align: center;
        }
    }
    @media (max-width: 450px) {
        .header-title,
        .price-title,
        .client-case-title,
        .question-title{
            gap: 8px;
        }
        .price-item h4{
            font-size: 1.25rem;
        }
        .price-item p{
            font-size: 1.5rem;
        }
    }
</style>
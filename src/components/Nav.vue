<script setup>
    import { ref } from "vue";
    const icon = ref(null);
    const collapse = ref(null);
    function toggleIcon(){
        for(let item of collapse.value.classList){
            if(item == "collapsed"){
                icon.value.style.backgroundImage = `url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,0,0,1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E")`;
            }else{
                icon.value.style.backgroundImage = `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-x' viewBox='0 0 16 16'%3E%3Cpath d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E")`;
            }
        }
    }
</script>

<template>
    <nav class="navbar navbar-expand-lg">
        <div class="nav container-fluid">
            <a class="navbar-brand" href="#">
                <svg width="90" height="40" viewBox="0 0 90 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M76.3672 7.73269C78.9572 6.79878 80.4108 6.71369 83.0004 7.73269V31.5667C80.409 32.3845 78.9582 32.4433 76.3672 31.5667V7.73269Z" fill="black"/>
                    <path d="M73.0567 24.8793H59.7903C59.9095 25.9414 60.1968 26.7326 60.652 27.2529C61.2915 28.0008 62.126 28.3747 63.1557 28.3747C63.806 28.3747 64.4238 28.2121 65.0091 27.887C65.3668 27.681 65.7515 27.3179 66.1634 26.7977C66.9383 25.8188 72.4877 26.0715 72.6828 27.3992C71.6856 29.1334 70.4826 30.3798 69.0735 31.1385C67.6645 31.8864 65.6431 32.2603 63.0094 32.2603C60.7224 32.2603 58.9232 31.9406 57.6118 31.3011C56.3003 30.6508 55.211 29.6265 54.3439 28.2284C53.4877 26.8194 53.0596 25.1665 53.0596 23.2697C53.0596 20.5709 53.9212 18.387 55.6446 16.7178C57.3787 15.0487 59.7686 14.2141 62.8143 14.2141C65.2855 14.2141 67.2364 14.588 68.6671 15.3359C70.0978 16.0838 71.1871 17.1676 71.9349 18.5875C72.6828 20.0073 73.0567 21.8553 73.0567 24.1314V24.8793ZM66.326 21.709C66.1959 20.43 65.8491 19.5142 65.2855 18.9614C64.7327 18.4086 64.0011 18.1323 63.0907 18.1323C62.0393 18.1323 61.1993 18.5495 60.5707 19.3841C60.1697 19.9044 59.915 20.6793 59.8066 21.709H66.326Z" fill="black"/>
                    <path d="M30.8623 23.286C30.8623 20.6522 31.7511 18.4845 33.5286 16.7829C35.3061 15.0704 37.7069 14.2141 40.7308 14.2141C44.1883 14.2141 46.8004 15.2167 48.5671 17.2218C49.9869 18.8368 50.6969 20.8256 50.6969 23.1884C50.6969 25.8439 49.8135 28.0224 48.0468 29.7241C46.291 31.4149 43.8577 32.2603 40.7471 32.2603C37.9724 32.2603 35.7288 31.5558 34.0163 30.1468C31.9136 28.4018 30.8623 26.1149 30.8623 23.286ZM37.4955 23.2697C37.4955 24.8088 37.8044 25.9469 38.4222 26.6839C39.0508 27.4209 39.8366 27.7894 40.7796 27.7894C41.7334 27.7894 42.5138 27.4263 43.1207 26.7001C43.7385 25.9739 44.0474 24.8088 44.0474 23.2047C44.0474 21.709 43.7385 20.598 43.1207 19.8718C42.5029 19.1348 41.7388 18.7663 40.8284 18.7663C39.8637 18.7663 39.0671 19.1402 38.4385 19.8881C37.8098 20.6251 37.4955 21.7523 37.4955 23.2697Z" fill="black"/>
                    <path d="M27.7125 31.3622C24.4701 32.2797 22.6727 32.3449 20.0713 31.3622L7 9.78802C10.087 8.01318 11.7633 7.82961 14.5924 9.78802L27.7125 31.3622ZM7 31.3622V11.8365L13.2593 22.0952V31.3622C11.0572 32.269 9.71911 32.3857 7 31.3622ZM27.7125 9.78802V29.3137L21.4532 19.0062V9.78802C24.0301 8.20204 25.3973 8.17726 27.7125 9.78802Z" fill="black"/>
                </svg>
            </a>
            <button @click="toggleIcon()" ref="collapse" class="navbar-toggler ms-auto custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon" ref="icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                <ul class="navbar-nav align-items-center">
                    <li class="nav-item">
                        <router-link to="/home" class="nav-link">首頁</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/homework" class="nav-link">作品集</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/service" class="nav-link">服務項目</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/blog" class="nav-link" href="#">部落格</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">聯絡我</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    .navbar{
        background-color: #f1f1f1;
    }
    .nav{
        position: relative;
        padding: 32px 12px;
    }
    .navbar-brand{
        position: absolute;
        left: 300px;
        top: 25%;
    }
    .custom-toggler .navbar-toggler-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,0,0,1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
    }
    .navbar-nav{
        gap: 40px;
        font-size: 1rem;
    }
    .nav-link{
        color: #000;
        font-size: 1rem;
    }
    @media (max-width: 1400px) {
        .navbar-brand{
            left: 100px;
        }
    }
    @media (max-width: 991px) {
        .nav{
            padding: 8px 12px;
        }
        .navbar-brand{
            left: 12px;
            top: 0;
        }
        .navbar-nav{
            gap: 24px;
        }
    }
</style>
<template>
        <div class="bg-light">
    <div class="container-xxl bg-primary position-relative p-0" id="home">
            <div class="container-xxl hero-header">
                <div class="container">

                <!-- ================원본 데이터==================== --> 

        <page-title :title="`이력관리`" :msg="`운동도 체계적으로`"></page-title>
        <header class="site-header d-flex flex-column justify-content-center align-items-center">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-12 text-center">

                        
                    </div>

                </div>
            </div>
        </header>

                      <!-- ===============원본 데이터===================== -->
                    </div>
              </div>
            </div>
            <router-view></router-view>
        </div> 
</template>
  
<script>
//import BoardNav from "@/components/board/BoardNav.vue"
import PageTitle from "@/components/common/PageTitle.vue";

export default {
    name: "Record",
    components: {
        //BoardNav,
        PageTitle,
    }
};
</script>
 
  
  
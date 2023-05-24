<template>
    <div>
        <page-title :title="`이력관리`" :msg="`운동도 체계적으로`"></page-title>
        <header class="site-header d-flex flex-column justify-content-center align-items-center">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-12 text-center">

                        
                    </div>

                </div>
            </div>
        </header>
        <!-- <board-nav></board-nav> -->
        <router-view></router-view>
        <hr />
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
  
  
  
  
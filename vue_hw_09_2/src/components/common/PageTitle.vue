<template>
      <header class="site-header d-flex flex-column justify-content-center align-items-center">
            <div class="container">
                <div class="row g-5">

                    <div class="col-lg-12 col-12 text-center">
                            <h1 class="text-white mb-4 animated slideInDown">{{title}}</h1>
                            <p class="text-white pb-3 animated slideInDown">{{msg}}</p>
                        </div>
                    </div>
            </div>
      </header>
</template>

<script>
export default {
  name: "PageTitle",
  props:{
    title: {
    type: String,
    required: true
    },
    msg: {
    type: String, // MyClass의 생성자 함수를 사용하여 유형을 지정
    required: true
    },
  }
}
</script>
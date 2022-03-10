<template>
  <div>
    <h1>个人信息</h1>
    {{ $route.params.id }}
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  //router 里面的方法
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被验证前调用
    console.log("渲染组件前调用!--这里可以使用axios调用后台接口进行页面渲染");
    //这里不用使用直接调用,

    next((vm) => {
      vm.getShow();
    });
  },
  beforeRouteLeave(to, from, next) {
    // 在导航离开渲染该组件的对应路由时调用
    console.log("渲染组件后调用!");
    next();
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    getShow: function () {
      //大坑:在axios中直接用this.name 因为 (https://segmentfault.com/q/1010000012547709):解释
      //因为:this 通常是指调用这个函数内的对象,当无法确定谁调用了这个函数
      //,就要在函数外面把this赋给一个新变量,然后就可以在函数内部使用这个变量了
      var thist = this;
      this.axios
        .get("http://www.lumenapi.com/show", {
          params: {
            id: this.$route.params.id,
          },
        })
        .then(function (response) {
          //接受值
          thist.name = response.data.data[0].title;
          console.log(name);
          console.log(response);
          console.log(response.data.data[0].title);
        });
      console.log(this.$route.params.id);
    },
  },
};
</script>

<style>
</style>
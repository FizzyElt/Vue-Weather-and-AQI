<template>
  <router-link class="router-btn" :class="{'router-active':active}" :to="path">{{title}}</router-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    path: {
      type: String,
      default: "/"
    },
    active: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss" scoped>
.router-btn {
    cursor: pointer;
  text-decoration: none;
  width: 100%;
  text-align: end;
  padding: 5px 10px;
  font-size: 25px;
  color: $navyblue;
  font-weight: 600;
  border-radius: 5px;
  transition: 0.2s;
}
.router-btn:hover {
  background-color: $navyblue;
  color: $white;
}
.router-btn.router-active {
  background-color: $navyblue;
  color: $white;
}

</style>
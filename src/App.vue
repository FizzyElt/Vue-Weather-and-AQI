<template>
  <div id="app">
    <transition name="fade">
      <div class="loading-container" v-if="this.$store.state.isLoading">
        <div class="loading">
          <div class="circle"></div>
          <h3>Loading . . .</h3>
        </div>
      </div>
    </transition>
    <router-view />
  </div>
</template>
<script>
export default {
};
</script>
<style lang="scss" scoped>
#app{
  width: 100%;
  height: fit-content;
  padding-bottom: 20px;
  background-color: $bluegrotto;
  min-height: 100vh;
}
.loading-container {
  width: 100%;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
}
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 8px solid white;
    border-left: 8px solid rgba(0, 0, 0, 0);
    border-right: 8px solid rgba(0, 0, 0, 0);
    margin-bottom: 10px;
    animation: loadingAnimation 1s linear infinite;
  }
  h3 {
    color: rgb(255, 255, 255);
  }
}
@keyframes loadingAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

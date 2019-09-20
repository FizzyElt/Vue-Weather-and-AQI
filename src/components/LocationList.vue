<template>
  <transition name="fade2" appear="fade2">
    <ul class="location-list">
      <location-item
        v-for="item in locationListData"
        :key="item.location"
        :locationName="item.location"
        :maxT="item.maxT"
        :minT="item.minT"
      />
    </ul>
  </transition>
</template>

<script>
import LocationItem from "./LocationItem.vue";
export default {
  components: {
    LocationItem
  },
  computed: {
    locationListData() {
      const list = this.$store.state.weatherData.map(data => {
        const minT = data.weatherElement.find(t => {
          return t.elementName === "MinT";
        }).time[0].parameter.parameterName;
        const maxT = data.weatherElement.find(t => {
          return t.elementName === "MaxT";
        }).time[0].parameter.parameterName;
        return {
          location: data.locationName,
          minT: minT,
          maxT: maxT
        };
      });

      return list;
    }
  }
};
</script>

<style lang="scss" scoped>
.location-list {
  border-radius: 8px;
  background-color: $babyblue;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  max-width: 820px;
}
@media screen and (max-width: 819px) {
  .location-list {
    max-width: 560px;
  }
}
</style>
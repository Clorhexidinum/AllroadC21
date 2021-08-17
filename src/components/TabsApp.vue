<template>
  <div class="tabs">
    <div class="tabs__list">
      <a
        class="tabs__item"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ activeTab: selectedTab === index }"
        @click.prevent="click({ index, tab })"
        >{{ tab }}</a
      >
    </div>
    <div class="tabs__content">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "TabsApp",

  data: function () {
    return {
      selectedTab: 0,
    };
  },

  props: {
    tabs: Array,
  },

  methods: {
    click({ index, tab }) {
      this.selectedTab = index;
      this.$emit("clicked", { index, tab });
    },
  },
};
</script>

<style lang="scss">
.tabs {
  &__list {
    display: flex;
    overflow-x: auto;
    margin-bottom: 25px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
  }

  &__item + &__item {
    margin-left: 30px;
  }

  &__item {
    padding-bottom: 5px;
    cursor: pointer;
    white-space: nowrap;
  }

  &__item:hover {
    color: red;
  }

  &__content {
    display: flex;
    overflow-x: auto;
  }
}

.activeTab {
  border-bottom: 2px solid red;
}
</style>

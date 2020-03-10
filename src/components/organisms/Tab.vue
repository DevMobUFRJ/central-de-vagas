<template>
  <nav :class="wrapperClass">
    <li
      v-for="tab in tabs"
      :key="tab.value"
      :class="[
        { 'is-active': tab.value === currentTab },
        tab.value === currentTab && tabActiveClass ? tabActiveClass : '',
        tabClass
      ]"
      :ref="tab.value"
      :disabled="tab.disabled || false"
      @click="handleClick(tab.value)"
    >
      {{ tab.title }}
    </li>
  </nav>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    currentTab: {
      type: String,
      required: true
    },
    tabs: {
      type: Array,
      required: true
    },
    wrapperClass: {
      type: String,
      required: false,
      default: ""
    },
    tabClass: {
      type: String,
      required: false,
      default: ""
    },
    tabActiveClass: {
      type: String,
      required: false,
      default: ""
    }
  },
  watch: {
    currentTab(newCurrentTab) {
      if (this.newTab === newCurrentTab) return;
    }
  },
  data: () => ({
    newTab: ""
  }),
  methods: {
    handleClick(value) {
      this.$emit("onClick", value);

      this.newTab = value;
    }
  }
};
</script>

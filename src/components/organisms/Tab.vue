<template>
  <nav class="tabs" :class="wrapperClass">
    <button
      class="tabs is-centered is-large"
      type="button"
      v-for="tab in tabs"
      :key="tab.value"
      :class="[
        { tabs__item_active: tab.value === currentTab },
        tab.value === currentTab && tabActiveClass ? tabActiveClass : '',
        tabClass
      ]"
      :ref="tab.value"
      :disabled="tab.disabled || false"
      @click="handleClick(tab.value)"
      v-html="tab.title"
    />
    <div
      class="tabs__active-line"
      :class="lineClass"
      :style="{
        width: `${activeLineWidth}px`,
        transform: `translateX(${activeLineOffset}px)`
      }"
    />
  </nav>
</template>

<script>
export default {
  name: "TabsWithActiveLine",
  props: {
    currentTab: {
      type: String,
      required: true
    },
    tabs: {
      type: Array,
      required: true
    },
    updated: {
      type: [Boolean, String, Array],
      default: undefined
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
    },
    lineClass: {
      type: String,
      required: false,
      default: ""
    }
  },
  watch: {
    currentTab(newCurrentTab) {
      if (this.newTab === newCurrentTab) return;
      this.moveActiveLine(newCurrentTab);
    },
    updated() {
      this.moveActiveLine(this.currentTab);
    }
  },
  data: () => ({
    activeLineWidth: 0,
    activeLineOffset: 0,
    newTab: ""
  }),
  methods: {
    handleClick(value) {
      this.$emit("onClick", value);
      this.moveActiveLine(value);

      this.newTab = value;
    },
    moveActiveLine(newValue) {
      if (!this.currentTab) return;

      if (!this.$refs || !this.$refs[newValue] || !this.$refs[newValue][0])
        return;

      const element = this.$refs[newValue][0];

      this.activeLineWidth = element.clientWidth;
      this.activeLineOffset = element.offsetLeft;
    }
  },
  mounted() {
    this.moveActiveLine(this.currentTab);
  }
};
</script>

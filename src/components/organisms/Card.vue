<template>
  <div :class="wrapperClass">
    <header :class="cardHeaderClass">
      <p :class="cardHeaderTitleClass">{{ cardTitle }}</p>
    </header>
    <div :class="cardContentClass">
      <div :class="contentClass">
        <p>{{ cardContent }}</p>
      </div>
    </div>
    <footer :class="cardFooterClass">
      <slot>
        <button :class="actionButtonClass" @click="handleClick">
          {{ actionButtonText }}
        </button>
      </slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    cardTitle: {
      type: String,
      required: false,
      default: ""
    },
    cardContent: {
      type: String,
      required: false,
      default: ""
    },
    actionButtonText: {
      type: String,
      required: false,
      default: "Ver mais"
    },
    wrapperClass: {
      type: String,
      required: false,
      default: "card"
    },
    cardHeaderClass: {
      type: String,
      required: false,
      default: "card-header"
    },
    cardHeaderTitleClass: {
      type: String,
      required: false,
      default: "card-header-title"
    },
    cardContentClass: {
      type: String,
      required: false,
      default: "card-content"
    },
    contentClass: {
      type: String,
      required: false,
      default: "content"
    },
    cardFooterClass: {
      type: String,
      required: false,
      default: "card-footer"
    },
    actionButtonClass: {
      type: String,
      required: false,
      default: "button"
    }
  },
  methods: {
    handleClick(value) {
      this.$emit("onClick", value);
    }
  }
};
</script>

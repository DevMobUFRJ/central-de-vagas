<template>
  <div :class="wrapperClass">
    <label :class="labelClass">{{ label }}</label>
    <div :class="inputContainerClass">
      <input :class="inputClass" :type="inputType" />
    </div>
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: {
    wrapperClass: { type: String, required: false, default: "'field'" },
    labelClass: { type: String, required: false, default: "'label'" },
    inputContainerClass: {
      type: String,
      required: false,
      default: "'control'"
    },
    inputClass: { type: String, required: false, default: "'input'" },
    label: { type: String, required: true },
    inputType: { type: String, required: true }
  }
};
</script>

<style></style>

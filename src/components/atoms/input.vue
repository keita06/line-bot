<template>
  <div class="form-group">
    <label v-if="showLabel" :for="labelFor">{{ labelName }}</label>
    <input
      :type="type"
      :class="className"
      :id="id"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      @change="$emit('chnageValue')"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    showLabel: {
      type: Boolean,
      default: true,
    },
    labelName: {
      type: String,
      default: "",
    },
    labelFor: {
      type: String,
      default: "",
    },
    placeholder: {
      default: "",
      type: String,
    },
    value: {
      default: "",
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    className: {
      type: String,
      default: "form-control",
    },
    id: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>
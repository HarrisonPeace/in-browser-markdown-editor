<template>
  <div class="markdown-panel">
    <div class="markdown-panel__header">
      <h2 class="markdown-panel__heading">{{ heading }}</h2>
      <div><slot name="button"></slot></div>
    </div>
    <div class="markdown-panel__content container"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "MarkDownPanel",
  props: {
    heading: {
      type: String,
      required: true
    },
    showBorder: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.markdown-panel {
  &__header {
    background-color: var(--background-panel-heading);
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__heading {
    font-size: 13px;
    padding-left: 21px;
    margin-bottom: 0;
    font-family: "Commissioner", sans-serif;
    letter-spacing: 5px;
    text-transform: uppercase;
  }
  &__content {
    background-color: var(--background-main);
    height: 100%;
  }
}
</style>

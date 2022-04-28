<template>
  <div class="markdown-panel" ref="container">
    <div class="markdown-panel__header">
      <h2 class="markdown-panel__heading">{{ heading }}</h2>
      <div><slot name="button"></slot></div>
    </div>
    <div class="markdown-panel__content" :style="{ maxWidth: `${contentMaxWidth}px` }"><slot></slot></div>
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
    },
    // TODO: add showEditor to store
    showEditor: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      contentMaxWidth: 0
    };
  },
  methods: {
    getContainerWidth() {
      return this.showEditor ? this.$refs.container.clientWidth : this.$refs.container.clientWidth / 2;
    },
    handelResize() {
      this.contentMaxWidth = this.getContainerWidth();
    },
    setResizeListener() {
      window.addEventListener("resize", this.handelResize);
    },
    removeResizeListener() {
      window.removeEventListener("resize", this.handelResize);
    }
  },
  mounted() {
    this.handelResize();
    this.setResizeListener();
  },
  unmounted() {
    this.removeResizeListener();
  }
};
</script>

<style lang="scss">
.markdown-panel {
  width: 100%;
  background-color: var(--background-main);
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
    display: flex;
    padding: 22px 23px;
    margin: 0 auto;
    min-height: 95%;
  }
}
</style>

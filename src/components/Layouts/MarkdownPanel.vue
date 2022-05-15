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
import { mapState } from "pinia";
import { useMarkdownStore } from "@/store/MarkdownStore";

export default {
  name: "MarkDownPanel",
  props: {
    heading: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState(useMarkdownStore, ["showEditor"])
  },
  data() {
    return {
      contentMaxWidth: 0
    };
  },
  methods: {
    getContainerWidth() {
      const windowWidth = window.innerWidth;
      return windowWidth < 768 ? windowWidth : windowWidth / 2;
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

<style lang="scss" scoped>
.markdown-panel {
  width: 100%;
  &__header {
    background-color: var(--background-panel-heading);
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 56px;
    transition: width 900ms cubic-bezier(0.215, 0.61, 0.355, 1);
    width: 100%;
    @media (min-width: 768px) {
      top: 72px;
    }
  }
  &__heading {
    font-size: 13px;
    padding-left: 21px;
    margin-bottom: 0;
    font-family: "Commissioner", sans-serif;
    letter-spacing: 4px;
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

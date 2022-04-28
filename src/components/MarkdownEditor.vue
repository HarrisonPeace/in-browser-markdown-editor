<template>
  <section class="markdown-editor" :style="{ width: showEditor ? '50%' : '0%' }">
    <markdown-panel heading="Markdown" :show-editor="showEditor">
      <div contenteditable="true" class="markdown-editor__content"></div>
    </markdown-panel>
  </section>
</template>

<script>
import MarkdownPanel from "./Layouts/MarkdownPanel.vue";

export default {
  name: "MarkdownEditor",
  components: {
    MarkdownPanel
  },
  props: {
    showEditor: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.markdown-editor {
  display: flex;
  transition: width 900ms cubic-bezier(0.215, 0.61, 0.355, 1);
  &__content {
    outline: none;
    width: 100%;
    color: var(--text-main);
  }
}
</style>

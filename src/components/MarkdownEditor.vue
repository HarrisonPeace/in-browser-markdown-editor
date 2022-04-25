<template>
  <section class="markdown-editor" :style="{ width: showEditor ? '50%' : '0%' }">
    <markdown-panel heading="Markdown"></markdown-panel>
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
  transition: width 900ms cubic-bezier(0.215, 0.61, 0.355, 1);
}
</style>

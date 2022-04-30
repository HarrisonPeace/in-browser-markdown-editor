<template>
  <div class="markdown-home">
    <markdown-editor></markdown-editor>
    <markdown-preview></markdown-preview>
  </div>
</template>

<script>
import MarkdownEditor from "@/components/MarkdownEditor.vue";
import MarkdownPreview from "@/components/MarkdownPreview.vue";

export default {
  name: "MarkdownHome",
  components: {
    MarkdownEditor,
    MarkdownPreview
  }
};
</script>

<style lang="scss" scoped>
.markdown-home {
  display: flex;
  height: 100%;
}
</style>

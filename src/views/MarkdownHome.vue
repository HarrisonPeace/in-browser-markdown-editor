<template>
  <div class="markdown-home">
    <markdown-editor :show-editor="showEditor"></markdown-editor>
    <markdown-preview :show-editor="showEditor" @hide-show-editor="hideShowEditor"></markdown-preview>
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
  },
  data() {
    return {
      showEditor: true
    };
  },
  methods: {
    hideShowEditor() {
      this.showEditor = !this.showEditor;
    }
  }
};
</script>

<style lang="scss" scoped>
.markdown-home {
  display: flex;
  height: 100%;
}
</style>

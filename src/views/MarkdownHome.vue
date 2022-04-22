<template>
  <div class="markdown-home">
    <div style="display: flex">
      <markdown-editor style="width: 50%"></markdown-editor>
      <markdown-Preview style="width: 50%"></markdown-Preview>
    </div>
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

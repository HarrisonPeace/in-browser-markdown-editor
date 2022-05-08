<template>
  <div class="markdown-home">
    <markdown-editor></markdown-editor>
    <markdown-preview></markdown-preview>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useMarkdownStore } from "@/store/MarkdownStore";

import MarkdownEditor from "@/components/MarkdownEditor.vue";
import MarkdownPreview from "@/components/MarkdownPreview.vue";

export default {
  name: "MarkdownHome",
  components: {
    MarkdownEditor,
    MarkdownPreview
  },
  beforeMount() {
    this.setActiveFile(this.$route.params.fileName);
  },
  methods: {
    ...mapActions(useMarkdownStore, ["setActiveFile"])
  },
  watch: {
    $route() {
      this.setActiveFile(this.$route.params.fileName);
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

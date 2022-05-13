<template>
  <div class="markdown-home">
    <markdown-editor></markdown-editor>
    <markdown-preview></markdown-preview>
    <v-modal :show-modal="showModal" />
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useMarkdownStore } from "@/store/MarkdownStore";

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
      error: false
    };
  },
  computed: {
    ...mapState(useMarkdownStore, ["showModal"])
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
  width: 100vw;
  padding-top: 72px;
  display: flex;
  min-height: 100%;
  overflow-y: scroll;
  background-color: var(--background-main);
}
</style>

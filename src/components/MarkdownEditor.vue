<template>
  <section :class="['markdown-editor', !showEditor && 'markdown-editor--no-width']">
    <markdown-panel heading="Markdown">
      <div
        ref="markdownText"
        contenteditable="true"
        class="markdown-editor__content"
        :class="['markdown-editor__content', !showEditor && 'markdown-editor__content--no-height']"
        @keyup="e => updateActiveFileContent(e.target.innerText)"></div>
    </markdown-panel>
  </section>
</template>

<script>
import { mapState, mapActions } from "pinia";
import DOMPurify from "dompurify";
import { useMarkdownStore } from "@/store/MarkdownStore";
import MarkdownPanel from "./Layouts/MarkdownPanel.vue";

export default {
  name: "MarkdownEditor",
  components: {
    MarkdownPanel
  },
  mounted() {
    this.getMarkdownContent();
  },
  computed: {
    ...mapState(useMarkdownStore, ["showEditor", "activeFile"])
  },
  watch: {
    activeFile() {
      this.getMarkdownContent();
    }
  },
  methods: {
    ...mapActions(useMarkdownStore, ["updateActiveFileContent", "getActiveFile"]),
    getMarkdownContent() {
      if (!this.activeFile || !this.activeFile.content) {
        this.$refs.markdownText.innerText = "";
        return;
      }
      this.$refs.markdownText.innerText = DOMPurify.sanitize(this.activeFile.content);
    }
  }
};
</script>

<style lang="scss" scoped>
.markdown-editor::v-deep .markdown-panel__header {
  @media (min-width: 768px) {
    width: 50%;
  }
}
.markdown-editor--no-width::v-deep .markdown-panel__header {
  width: 0;
}
.markdown-editor {
  display: flex;
  transition: width 900ms cubic-bezier(0.215, 0.61, 0.355, 1);
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
  overflow-x: hidden;
  overflow-y: initial;
  &--no-width {
    width: 0;
    overflow: hidden;
  }
  &__content {
    max-width: 100%;
    padding-top: 42px;
    outline: none;
    width: 100%;
    caret-color: var(--highlight-primary);
    color: var(--text-editor);
    transition: height 900ms cubic-bezier(0.215, 0.61, 0.355, 1);
    font-family: "Roboto Mono", monospace;
    font-size: 14px;
    &--no-height {
      height: 0;
    }
  }
}
</style>

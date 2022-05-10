<template>
  <section :class="['markdown-editor', showEditor && 'markdown-editor--half-width']">
    <markdown-panel heading="Markdown" :headingWidth="showEditor ? '' : 'no-width'">
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
.markdown-editor {
  display: flex;
  transition: width 900ms cubic-bezier(0.215, 0.61, 0.355, 1);
  width: 0;
  overflow-x: hidden;
  &--half-width {
    width: 50%;
  }
  &__content {
    padding-top: 42px;
    outline: none;
    width: 100%;
    color: var(--text-main);
    transition: height 900ms cubic-bezier(0.215, 0.61, 0.355, 1);
    &--no-height {
      height: 0;
    }
  }
}
</style>

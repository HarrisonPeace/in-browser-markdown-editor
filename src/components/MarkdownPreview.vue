<template>
  <section :class="['markdown-preview', showEditor && 'markdown-preview--alter-width']">
    <markdown-panel heading="Preview">
      <div
        :class="['markdown-preview__content', showEditor && 'markdown-preview__content--no-height-mobile']"
        v-html="HTMLContent"></div>
    </markdown-panel>
  </section>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useMarkdownStore } from "@/store/MarkdownStore";
import MarkdownPanel from "./Layouts/MarkdownPanel.vue";
import { marked } from "marked";
import DOMPurify from "dompurify";

export default {
  name: "MarkdownPreview",
  components: {
    MarkdownPanel
  },
  computed: {
    ...mapState(useMarkdownStore, ["showEditor"]),
    HTMLContent() {
      const currentFile = this.getActiveFile();
      if (!currentFile || !currentFile.content) {
        return "";
      }
      return DOMPurify.sanitize(marked.parse(currentFile.content));
    }
  },
  methods: {
    ...mapActions(useMarkdownStore, ["getActiveFile", "getActiveFileName"])
  }
};
</script>

<style lang="scss">
.markdown-preview-alter-width-alter-width::v-deep .markdown-panel__header {
  width: 0;
  @media (min-width: 768px) {
    width: 50%;
  }
}
.markdown-preview {
  display: flex;
  transition: width 900ms cubic-bezier(0.215, 0.61, 0.355, 1), border-width 900ms cubic-bezier(0.215, 0.61, 0.355, 1);
  width: 100%;
  border-left: 0px solid var(--bs-gray-600);
  &--alter-width {
    width: 0;
    border-width: 1px;
    overflow: hidden;
    @media (min-width: 768px) {
      width: 50%;
      overflow: initial;
    }
  }
  &__content {
    max-width: 100%;
    padding-top: 42px;
    &--no-height-mobile {
      height: 0;
      @media (min-width: 768px) {
        height: 100%;
      }
    }
  }
}
</style>

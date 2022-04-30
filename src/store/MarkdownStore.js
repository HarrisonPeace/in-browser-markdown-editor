import { defineStore } from "pinia";

export const useMarkdownStore = defineStore("MarkdownStore", {
  state: () => {
    return { showEditor: true };
  },
  actions: {
    toggleShowEditor() {
      this.showEditor = !this.showEditor;
    }
  }
});

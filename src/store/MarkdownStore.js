import { defineStore } from "pinia";

import { welcomeFile } from "@/data/welcome.js";

export const useMarkdownStore = defineStore("MarkdownStore", {
  state: () => {
    return { showEditor: true, files: [welcomeFile] };
  },
  actions: {
    toggleShowEditor() {
      this.showEditor = !this.showEditor;
    }
  }
});

import { defineStore } from "pinia";

import { welcomeFile } from "@/data/welcome.js";
import { untitledDocument } from "@/data/untitledDocument.js";

export const useMarkdownStore = defineStore("MarkdownStore", {
  state: () => {
    return { showEditor: true, activeFile: {}, files: [welcomeFile, untitledDocument] };
  },
  actions: {
    toggleShowEditor() {
      this.showEditor = !this.showEditor;
    },
    updateActiveFileContent(fileContent) {
      this.activeFile.content = fileContent;
    },
    updateActiveFileName(fileName) {
      this.activeFile.fileName = fileName;
    },
    getActiveFile() {
      return this.activeFile;
    },
    setActiveFile(fileName) {
      if (!fileName) return;
      const file = this.files.find(file => file.fileName === fileName);
      if (!file) {
        //TODO: create error redirect
        return;
      }
      this.activeFile = file;
    }
  }
});

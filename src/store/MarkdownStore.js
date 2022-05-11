import { defineStore } from "pinia";

import { welcomeFile } from "@/data/welcome.js";
import { untitledDocument } from "@/data/untitledDocument.js";

export const useMarkdownStore = defineStore("MarkdownStore", {
  state: () => {
    const state = { showEditor: true, activeFile: {}, showModal: false };
    let savedFiles = localStorage.getItem("files");
    if (savedFiles) {
      return { ...state, files: JSON.parse(savedFiles) };
    } else {
      return { ...state, files: [welcomeFile, untitledDocument] };
    }
  },
  actions: {
    toggleShowEditor() {
      this.showEditor = !this.showEditor;
    },
    // TODO: revert this to false on modal close + add in second modal when not saved
    toggleModal() {
      this.showModal = true;
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
    },
    createNewFile() {
      let fileName = "untitled-document";
      let fileNumber = 1;
      let isFileNameUnique = false;
      while (!isFileNameUnique) {
        isFileNameUnique = true;
        this.files.forEach(file => {
          if (file.fileName === fileName) {
            isFileNameUnique = false;
            fileName = `untitled-document-${fileNumber++}`;
          }
        });
      }
      this.files.push({ fileName, lastSaveDate: new Date(), content: `` });
    }
  }
});

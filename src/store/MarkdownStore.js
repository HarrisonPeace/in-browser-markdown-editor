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
    toggleModal() {
      this.showModal = !this.showModal;
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
    deleteActiveFile() {
      this.files = this.files.filter(file => file.fileName !== this.activeFile.fileName);
      this.saveFiles();
      this.$router.push("/");
    },
    saveFiles() {
      if (!this.files.some(file => file.fileName === this.activeFile.fileName)) {
        this.files.push(this.activeFile);
      }
      localStorage.setItem("files", JSON.stringify(this.files));
      this.$router.replace(`/${this.activeFile.fileName}`);
    },
    setActiveFile(fileName) {
      if (!fileName) {
        this.activeFile = welcomeFile;
        return;
      }
      let file = this.files.find(file => file.fileName === fileName);
      if (!file) {
        file = this.activeFile = {
          fileName,
          lastSaveDate: new Date(),
          content: `# File ***${fileName}*** either never existed or has been lost to the cosmos

###### Either select another file from the menu or start editing!
          `
        };
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

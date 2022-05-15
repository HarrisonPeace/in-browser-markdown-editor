<template>
  <div class="header">
    <div class="header__menu-container" @click="menuClick">
      <svg
        class="header__menu-container__close-icon"
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        v-if="navOpen"
        viewBox="0 0 24 24">
        <g fill="#FFF" fill-rule="evenodd">
          <path d="M2.1.686 23.315 21.9l-1.415 1.415L.686 2.1z" />
          <path d="M.686 21.9 21.9.685l1.415 1.415L2.1 23.314z" />
        </g>
      </svg>
      <svg
        class="header__menu-container__burger-icon"
        width="30"
        height="18"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 18"
        v-else>
        <g fill="#FFF" fill-rule="evenodd">
          <path d="M0 0h30v2H0zM0 8h30v2H0zM0 16h30v2H0z" />
        </g>
      </svg>
    </div>
    <h1 class="header__heading">MARKDOWN</h1>
    <div class="header__divider"></div>
    <div class="header__file">
      <file-display hide-sub-heading-mobile>
        <span
          contenteditable="true"
          class="header__active-file-name color-light"
          @keyup="e => updateActiveFileName(e.target.innerText)">
          {{ `${activeFile.fileName}` }} </span
        >.md
      </file-display>
    </div>
    <svg width="18" height="20" xmlns="http://www.w3.org/2000/svg" class="header__delete" @click="toggleModal">
      <path
        d="M7 16a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM17 4h-4V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H1a1 1 0 1 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6h1a1 1 0 0 0 0-2ZM7 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7V3Zm7 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h10v11Zm-3-1a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
        fill="#7C8187" />
    </svg>
    <div
      :class="['header__save-container header__save-container--mobile', showFileSaved && 'header__save--show-saved']">
      <v-button show-save @click="saveFile">
        <span class="color-light header__saved"></span>
      </v-button>
    </div>
    <div
      :class="[
        'header__save-container header__save-container--tablet-up',
        showFileSaved && 'header__save--show-saved'
      ]">
      <v-button show-save @click="saveFile">
        Save Changes
        <span class="color-light header__saved">Changes Saved</span>
      </v-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useMarkdownStore } from "@/store/MarkdownStore";

export default {
  name: "TheHeader",
  emits: ["menuClick"],
  props: {
    navOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      showFileSaved: false
    };
  },
  computed: {
    ...mapState(useMarkdownStore, ["activeFile"])
  },
  methods: {
    ...mapActions(useMarkdownStore, ["updateActiveFileName", "toggleModal", "saveFiles"]),
    menuClick() {
      this.$emit("menuClick");
    },
    saveFile() {
      this.saveFiles();
      this.showFileSaved = true;
      setTimeout(() => (this.showFileSaved = false), 1000);
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  background-color: var(--bs-gray-800);
  height: 56px;
  display: flex;
  align-items: center;
  padding-right: 16px;
  position: fixed;
  width: 100%;
  @media (min-width: 768px) {
    height: 72px;
  }
  &__menu-container {
    background-color: var(--bs-gray-700);
    height: 100%;
    width: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media (min-width: 768px) {
      width: 72px;
    }
    &__burger-icon {
      width: 23px;
      height: 14px;
      @media (min-width: 768px) {
        width: 30px;
        height: 18px;
      }
    }
    &__close-icon {
      width: 20px;
      height: 20px;
      @media (min-width: 768px) {
        width: 24px;
        height: 24px;
      }
    }
  }

  &__heading {
    @include hide-mobile;
    font-size: 15px;
    color: var(--bs-white);
    text-align: center;
    line-height: 72px;
    padding-left: 25px;
    padding-right: 29px;
    font-family: "Commissioner", sans-serif;
    letter-spacing: 5px;
    margin-bottom: 0;
  }

  &__divider {
    @include hide-mobile;
    height: 55%;
    background-color: var(--bs-gray-600);
    width: 1px;
  }

  &__file {
    padding-left: 24px;
  }

  &__delete {
    margin-left: auto;
    margin-right: 24px;
    cursor: pointer;
    &:hover {
      path {
        fill: var(--highlight-primary);
      }
    }
  }
  &__active-file-name {
    outline: none;
    caret-color: var(--highlight-primary);
  }
  &__save--show-saved {
    .header__saved {
      top: 0px;
    }
  }
  &__save-container {
    position: relative;
    overflow: hidden;
    &:hover {
      .header__saved {
        background-color: var(--highlight-secondary);
      }
    }
    &--tablet-up {
      @include hide-mobile;
    }
    &--mobile {
      @include hide-tablet-up;
    }
  }
  &__saved {
    position: absolute;
    height: 100%;
    left: 15%;
    width: 70%;
    top: -100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--highlight-primary);
    border-radius: 4px;
    transition: top 900ms cubic-bezier(0.215, 0.61, 0.355, 1);
    @media (min-width: 768px) {
      left: 39px;
    }
  }
}
</style>

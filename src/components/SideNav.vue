<template>
  <nav :class="['side-nav', navOpen && 'side-nav--nav-open']">
    <span class="heading side-nav__heading">MY DOCUMENTS</span>
    <v-button @click="createNewFile">+ New Document</v-button>
    <div class="side-nav__files-container">
      <file-display
        v-for="file in files"
        :key="file.fileName"
        class="side-nav__file"
        :sub-heading="formatLastSaveDate(file.lastSaveDate)"
        :to="`/${file.fileName}`"
        restrict-width
        >{{ `${file.fileName}.md` }}</file-display
      >
    </div>
    <div class="side-nav__theme-controls">
      <svg
        width="17"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        :class="themeActive === 'dark' ? 'side-nav__theme-svg--active' : ''">
        <path
          d="M16.141 8.804a.823.823 0 0 0-.864-.115 6.622 6.622 0 0 1-2.772.6A6.704 6.704 0 0 1 5.81 2.626 7.066 7.066 0 0 1 6.015.981a.823.823 0 0 0-1.094-.93 8.341 8.341 0 1 0 11.516 9.617.823.823 0 0 0-.296-.864Zm-7.814 5.503A6.696 6.696 0 0 1 4.164 2.404v.222a8.35 8.35 0 0 0 10.069 8.16 6.671 6.671 0 0 1-5.906 3.554v-.033Z"
          fill="#5A6069" />
      </svg>
      <div class="form-check form-switch">
        <input
          @click="switchTheme"
          ref="toggleSwitch"
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          :style="sliderBGImage" />
        <label class="form-check-label" for="flexSwitchCheckDefault">Dark to light mode switch</label>
      </div>
      <svg
        width="18"
        height="18"
        xmlns="http://www.w3.org/2000/svg"
        :class="themeActive === 'light' ? 'side-nav__theme-svg--active' : ''">
        <path
          d="M2.7 9a.9.9 0 0 0-.9-.9H.9a.9.9 0 0 0 0 1.8h.9a.9.9 0 0 0 .9-.9Zm.576 4.5-.639.639a.9.9 0 0 0 0 1.269.9.9 0 0 0 1.269 0l.639-.639A.9.9 0 0 0 3.276 13.5ZM9 2.7a.9.9 0 0 0 .9-.9V.9a.9.9 0 0 0-1.8 0v.9a.9.9 0 0 0 .9.9Zm5.094 2.106a.9.9 0 0 0 .63-.261l.639-.639a.9.9 0 1 0-1.269-1.269l-.594.639a.9.9 0 0 0 0 1.269.9.9 0 0 0 .594.261Zm-10.8-.261a.9.9 0 0 0 1.269 0 .9.9 0 0 0 0-1.269l-.639-.639a.904.904 0 1 0-1.287 1.269l.657.639ZM17.1 8.1h-.9a.9.9 0 1 0 0 1.8h.9a.9.9 0 1 0 0-1.8Zm-2.376 5.4a.9.9 0 0 0-1.224 1.224l.639.639a.9.9 0 0 0 1.269 0 .9.9 0 0 0 0-1.269l-.684-.594ZM9 4.05A4.95 4.95 0 1 0 13.95 9 4.959 4.959 0 0 0 9 4.05Zm0 8.1a3.15 3.15 0 1 1 0-6.3 3.15 3.15 0 0 1 0 6.3Zm0 3.15a.9.9 0 0 0-.9.9v.9a.9.9 0 1 0 1.8 0v-.9a.9.9 0 0 0-.9-.9Z"
          fill="#5A6069" />
      </svg>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useMarkdownStore } from "@/store/MarkdownStore";
import { formatDate } from "@/functions/formatDate";

export default {
  props: {
    navOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      themeActive: "dark"
    };
  },
  mounted() {
    const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : null;
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
      if (currentTheme === "light") {
        this.$refs.toggleSwitch.checked = true;
        this.themeActive = "light";
      }
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      document.documentElement.setAttribute("data-theme", "light");
    }
  },
  computed: {
    ...mapState(useMarkdownStore, ["files"]),
    sliderBGImage() {
      return 'background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e")';
    }
  },
  methods: {
    ...mapActions(useMarkdownStore, ["createNewFile"]),
    switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        this.themeActive = "light";
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        this.themeActive = "dark";
      }
    },
    formatLastSaveDate(date) {
      return formatDate(date);
    }
  }
};
</script>

<style scoped lang="scss">
.form-check-label {
  visibility: hidden;
  height: 0;
  width: 0;
}
.form-switch {
  height: 30px;
  padding-left: 3em;
  margin-left: 12px;
  margin-right: 10px;
  .form-check-input {
    padding: 11px 23px;
    cursor: pointer;
    box-shadow: none;
    background-color: var(--bs-gray-600);
    border: var(--bs-gray-600);
    margin-left: -3em;
    transition: background-position ease-out 0.3s;
  }
}

.side-nav {
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 27px 24px;
  background-color: var(--bs-gray-900);
  height: 100%;
  position: fixed;
  top: 0;
  left: -250px;
  transition: left 900ms cubic-bezier(0.215, 0.61, 0.355, 1);
  &--nav-open {
    left: 0;
  }
  &__heading {
    color: var(--bs-gray-500);
    margin-bottom: 29px;
    display: inline-block;
  }
  &__files-container {
    padding: 24px 0;
    overflow-y: auto;
  }
  &__file:not(:first-child) {
    margin-top: 24px;
  }
  &__theme-controls {
    margin-top: auto;
    display: flex;
    align-items: center;
  }
  &__theme-svg {
    &--active {
      path {
        transition: fill ease-out 0.3s;
        fill: var(--bs-gray-100);
      }
    }
  }
}
</style>

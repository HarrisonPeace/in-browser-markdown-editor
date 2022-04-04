<template>
  <div class="header">
    <div class="header__menu-container">
      <svg width="30" height="18" xmlns="http://www.w3.org/2000/svg">
        <g fill="#FFF" fill-rule="evenodd">
          <path d="M0 0h30v2H0zM0 8h30v2H0zM0 16h30v2H0z" />
        </g>
      </svg>
    </div>
    <span class="header__heading">MARKDOWN</span>
    <div class="header__divider"></div>
    <div class="header__file">
      <file-display>welcome.md</file-display>
    </div>
    <svg width="18" height="20" xmlns="http://www.w3.org/2000/svg" class="header__delete">
      <path
        d="M7 16a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM17 4h-4V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H1a1 1 0 1 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6h1a1 1 0 0 0 0-2ZM7 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7V3Zm7 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h10v11Zm-3-1a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
        fill="#7C8187" />
    </svg>
    <v-button show-save>Save Changes</v-button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.header {
  background-color: var(--bs-gray-800);
  color: var(--bs-white);
  height: 72px;
  display: flex;
  align-items: center;
  padding-right: 16px;

  &__menu-container {
    background-color: var(--bs-gray-700);
    height: 100%;
    width: 72px;
    text-align: center;
    line-height: 72px;
    cursor: pointer;
  }

  &__heading {
    text-align: center;
    line-height: 72px;
    padding-left: 25px;
    padding-right: 29px;
    font-family: "Commissioner", sans-serif;
    letter-spacing: 5px;
  }

  &__divider {
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
}
</style>

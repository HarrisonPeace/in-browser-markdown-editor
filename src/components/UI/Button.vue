<template>
  <button @click="$emit('onClick')" class="button">
    <svg v-if="showSave" class="button__save-icon" width="17" height="17" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.91 5.931 10.575.598A.889.889 0 0 0 10.29.41.969.969 0 0 0 9.945.34H2.834A2.667 2.667 0 0 0 .167 3.007v10.666a2.667 2.667 0 0 0 2.667 2.667H13.5a2.667 2.667 0 0 0 2.667-2.667v-7.11a.889.889 0 0 0-.258-.632ZM5.5 2.118h3.556v1.778H5.5V2.118Zm5.334 12.444H5.5v-2.666c0-.491.398-.89.89-.89h3.555c.49 0 .889.399.889.89v2.666Zm3.555-.889c0 .491-.398.89-.889.89h-.889v-2.667a2.667 2.667 0 0 0-2.666-2.667H6.389a2.667 2.667 0 0 0-2.666 2.667v2.666h-.89a.889.889 0 0 1-.888-.889V3.007c0-.491.398-.89.889-.89h.889v2.667c0 .491.398.89.888.89h5.334c.49 0 .889-.399.889-.89V3.371l3.555 3.556v6.746Z"
        fill="#FFF" />
    </svg>
    <span class="color-light"><slot /></span>
  </button>
</template>

<script>
export default {
  name: "v-button",
  emits: ["onClick"],
  props: {
    showSave: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
.button {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: var(--bs-white);
  background-color: var(--highlight-primary);
  border-radius: 4px;
  text-decoration: none;
  padding: 10px 16px;
  line-height: normal;
  border: none;
  &:hover {
    background-color: var(--highlight-secondary);
  }
  &__save-icon {
    margin-right: 8px;
  }
}
</style>

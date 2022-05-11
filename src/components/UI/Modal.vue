<template>
  <div>
    <button ref="modalButton" data-bs-toggle="modal" data-bs-target="#exampleModal" style="display: none"></button>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <h4>Delete this document?</h4>
            <p>
              Are you sure you want to delete ‘welcome.md’ document and its contents? This action cannot be reversed.
            </p>
            <v-button type="button" data-bs-dismiss="modal" class="btn btn-primary">Confirm & Delete</v-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-modal",
  emits: ["showModal"],
  data() {
    return {
      modal: null
    };
  },
  props: {
    showModal: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if (this.showModal) {
      this.$refs.modalButton.click();
    }
  },
  watch: {
    showModal() {
      this.$refs.modalButton.click();
    }
  }
};
</script>

<style scoped lang="scss">
.modal {
  background-color: var(--modal-background);
}

.modal-dialog {
  max-width: 343px;
}

.modal-body {
  background-color: var(--background-main);
  display: flex;
  flex-direction: column;
  padding: 24px;
}
</style>

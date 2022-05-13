<template>
  <div>
    <button ref="modalButton" data-bs-toggle="modal" data-bs-target="#exampleModal" style="display: none"></button>
    <div
      ref="modal"
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <h4>Delete this document?</h4>
            <p>
              Are you sure you want to delete ‘welcome.md’ document and its contents? This action cannot be reversed.
            </p>
            <v-button type="button" data-bs-dismiss="modal" class="btn btn-primary" @click="confirmDelete"
              >Confirm & Delete</v-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useMarkdownStore } from "@/store/MarkdownStore";

export default {
  name: "v-modal",
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
    this.$refs.modal.addEventListener("hidden.bs.modal", () => {
      this.toggleModal();
    });
    if (this.showModal) {
      this.$refs.modalButton.click();
    }
  },
  watch: {
    showModal() {
      this.showModal && this.$refs.modalButton.click();
    }
  },
  methods: {
    ...mapActions(useMarkdownStore, ["toggleModal", "deleteActiveFile"]),
    menuClick() {
      this.$emit("menuClick");
    },
    confirmDelete() {
      this.deleteActiveFile();
      this.$router.push("/");
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

<script>
  export let isOpen = false;

  function closeModal() {
    isOpen = false;
  }
</script>

{#if isOpen}
  <div class="modal-overlay" on:click={closeModal}>
    <div class="modal-box" on:click={(e) => e.stopPropagation()}>
      <slot />
    </div>
  </div>
{/if}

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-box {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    max-width: 400px;
    width: 100%;
    text-align: center;
  }
</style>

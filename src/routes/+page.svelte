<script lang="ts">
  import UserList from '$lib/components/users/UserList.svelte';
  import NewUserModal from '$lib/components/users/NewUserModal.svelte';

  let showModal = false;

  const toggleModal = () => {
    showModal = !showModal;
  }
</script>

<main>
  <h1>Svelte Assessment</h1>
  <button on:click={toggleModal}>Add username</button>
  
  <UserList />

  <NewUserModal
    isOpen={showModal}
    on:toggle={toggleModal}
  />

  <div class="footer">
    <a href="/one">You can see a different implementation of the same functionality on here</a>
  </div>
</main>

<style>
  .footer {
    margin-top: 50px;
  }
</style>
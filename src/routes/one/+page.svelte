<script lang="ts">
  import Modal from '$lib/components/common/Modal.svelte';
  import UserList from '$lib/components/users/UserList.svelte';
  import { usernames } from '$lib/stores';
  import { addUser } from '$lib/services/users';

  let showModal = false;
  let username = '';

  const toggleModal = () => {
    showModal = !showModal;
  }

  const handleSubmit = async () => {
    const res = await addUser(username);
    if (res.status === true) {
      usernames.update((list: string[]) => [...list, username]);
      toggleModal();
    } else {
      // TODO: Show errors later
    }
  }
</script>

<main>
  <h1>Page one: Different way to use modal</h1>
  <button on:click={toggleModal}>Add username</button>
  
  <UserList />

  <Modal isOpen={showModal}>
    <div style="margin-bottom: 15px;">
      <input bind:value={username} placeholder="Enter username" />
    </div>
    <div>
      <button type="button" class="btn" on:click={handleSubmit}>
        Submit
      </button>
      <button type="button" class="btn" on:click={toggleModal}>
        Cancel
      </button>
    </div>
  </Modal>
</main>

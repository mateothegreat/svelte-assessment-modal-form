<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Modal from '$lib/components/common/Modal.svelte';
  import { usernames } from '$lib/stores';
  import { addUser } from '$lib/services/users';

  export let isOpen = false;

  const dispatch = createEventDispatcher();

  let username = '';

  const toggleModal = () => {
    dispatch('toggle');
  }

  const handleSubmit = async () => {
    const res = await addUser(username);
    if (res.status === true) {
      usernames.update((list: string[]) => [...list, username]);

      dispatch('submit');
    } else {
      // TODO: Show errors later
    }
  }
</script>


<Modal isOpen={isOpen}>
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
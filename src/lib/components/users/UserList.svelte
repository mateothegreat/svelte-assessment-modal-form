<script lang="ts">
  import { usernames } from '$lib/stores';
</script>

<div>
  <h2>User List</h2>
  <ul>
    {#each $usernames as username (username)}
      <li>{username}</li>
    {/each}
  </ul>
</div>

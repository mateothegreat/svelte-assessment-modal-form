<script lang="ts">
    import { modal } from '../../stores/modal';

    let userList: string[] = [];

    modal.subscribe((value) => {
        userList = value.users;
    });


</script>

<div>
    Page 1 - Users
    {#key userList}
        {#each userList as user}
            <p>{user}</p>
        {/each}
    {/key}
</div>
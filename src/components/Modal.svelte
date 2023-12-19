<script lang="ts">
    import { modal } from "../stores/modal";

    let modalOpen = false;
    modal.subscribe(value => {
      modalOpen = value.open;
    })

    let user = '';

    const handleInputChange = (e: any) => {
        user = e.target.value;
    }

    const handleClose = () => {
        modal.update((state) => {
            return {
                ...state,
                open: false
            }
        })
    }
    const handleSubmit = () => {
        console.log("Added User")
        modal.update((state) => {
            return {
                ...state,
                users: [...state.users, user]
            }
        })
        user = ''

        // Stub out REST API call
        // fetch('http://localhost:3000/users', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ user })
        // })
        // .then(res => res.json())
    }

</script>
{#if modalOpen}
<div id="modal">
    <input id="user" on:change|preventDefault={handleInputChange} value={user}>
    <button on:click|preventDefault={handleSubmit}>Add User</button>

    <button id="close" on:click|preventDefault={handleClose}>X</button>
</div>
{/if}

<style>
    #modal {
        z-index: 100;
        box-shadow: black 0 0 10px;
        position: fixed;
        top: 30%;
        left: 30%;
        width: 50%;
        height: 320px;
        background: white;
        padding: 16px;
    }

    #close {
        position: absolute;
        top: 0;
        right: 0;
    }
</style>
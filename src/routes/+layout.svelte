<script lang="ts">
    import { modal } from '../stores/modal'
    import Modal from "../components/Modal.svelte";

    let open = false
    modal.subscribe(value => {open = value.open})
    const handleButtonClick = () => {
        modal.update(value => {
            return {
                ...value,
                open: !value.open
            }
        })
        console.log(modal)
    }

</script>


<h1>Svelte Demo - Global Modal</h1>
<button on:click|preventDefault={handleButtonClick}>{open ? 'Close Modal' : 'Open Modal'}</button>
<Modal />
<ul>
    <li>
        <a href="/one">Users (Page One)</a>
    </li>
    <li>
        <a href="/two">Two</a>
    </li>
</ul>
<slot/>
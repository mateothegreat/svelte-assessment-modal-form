<script lang="ts">
	import '../app.pcss';
	import { modal } from '../stores/modal';
	import Button from "$lib/components/ui/button/button.svelte";
	import * as Dialog from "$lib/components/ui/dialog";

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
	}
</script>

<div class="m-8">
	<Dialog.Root>
		<Dialog.Trigger>Open Modal</Dialog.Trigger>
		<Dialog.Content>
			<Dialog.Header>
				<Dialog.Title>Add A User</Dialog.Title>
				<Dialog.Description>
					Add a user to the list.
				</Dialog.Description>
			</Dialog.Header>
			<input id="user" on:change|preventDefault={handleInputChange} value={user} class="outline">
			<Button on:click={handleSubmit}>Add User</Button>
		</Dialog.Content>
	</Dialog.Root>
	<h1 class="text-xl my-4">Svelte Demo - Global Modal</h1>
	<div class="my-4">
		<h2 class="text-lg">Navigation</h2>
		<ul class="flex flex-row gap-4 underline mb-4">
			<li>
				<a href="/one">Users (Page One)</a>
			</li>
			<li>
				<a href="/two">Two</a>
			</li>
		</ul>
	</div>
	<slot />
</div>

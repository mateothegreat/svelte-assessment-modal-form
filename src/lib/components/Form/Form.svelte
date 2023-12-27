<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import * as Form from '$lib/components/ui/form';

	export let open = false;
	onMount(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				open = false;
			}
		};

		window.addEventListener('keydown', handleEsc);

		return () => {
			window.removeEventListener('keydown', handleEsc);
		};
	});
</script>

{#if open}
	<div
		transition:fade={{ delay: 250, duration: 300 }}
		class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
	>
		<div class="rounded bg-white p-4 text-left shadow-lg">
			<Form.Root let:config>
				<div class="flex gap-4">
					<div class="w-3/5">
						<Form.Field {config} name="cameraname">
							<Form.Item>
								<Form.Label>Camera Name</Form.Label>
								<Form.Input placeholder="How do we call this camera?" />
								<Form.Validation />
							</Form.Item>
						</Form.Field>
					</div>
					<div class="w-2/5">
						<Form.Field {config} name="location">
							<Form.Item>
								<Form.Label>Location</Form.Label>
								<Form.FormNativeSelect />
								<Form.Validation />
							</Form.Item>
						</Form.Field>
					</div>
				</div>
				<Form.Field {config} name="description">
					<Form.Item>
						<Form.FormTextarea placeholder="Camera description/notes (Optional)" />
						<Form.Validation />
					</Form.Item>
				</Form.Field>
				<div class="flex gap-4">
					<div class="w-4/5">
						<Form.Field {config} name="address">
							<Form.Item>
								<Form.Label>IP Address/hostname</Form.Label>
								<Form.Input placeholder="10.123.45.6" />
								<Form.Validation />
							</Form.Item>
						</Form.Field>
					</div>
					<div class="w-1/5">
						<Form.Field {config} name="port">
							<Form.Item>
								<Form.Label>Port</Form.Label>
								<Form.Input placeholder="554" />
								<Form.Validation />
							</Form.Item>
						</Form.Field>
					</div>
				</div>
				<Form.Field {config} name="email">
					<Form.Item>
						<Form.Label>Security emails</Form.Label>
						<Form.FormSwitch />
						<Form.Description
							>Receive emails about your account activity and security.</Form.Description
						>
						<Form.Validation />
					</Form.Item>
				</Form.Field>
				<div class="text-right">
					<Form.Button>Help</Form.Button>
					<Form.Button>Save</Form.Button>
				</div>
			</Form.Root>
			<!-- <button class="absolute top-4 right-4" on:click={() => change()}>&times;</button> -->
		</div>
	</div>
{/if}

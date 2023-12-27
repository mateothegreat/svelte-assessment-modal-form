<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import * as Form from '$lib/components/ui/form';
	import { Separator } from '$lib/components/ui/separator';

	export let open = false;

	const languages = [
		{ value: 'English', label: 'English' },
		{ value: 'Spanish', label: 'Spanish' },
		{ value: 'Chinese', label: 'Chinese' },
		{ value: 'Russian', label: 'Russian' },
		{ value: 'Portuguese', label: 'Portuguese' },
		{ value: 'Arabic', label: 'Arabic' },
		{ value: 'Hindi', label: 'Hindi' },
		{ value: 'French', label: 'French' }
	];

	const close = () => {
		open = false;
	};

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
		transition:fade={{ delay: 100, duration: 300 }}
		class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
	>
		<div class="relative max-w-[500px] rounded bg-white p-4 text-left shadow-lg">
			<button class="absolute right-4 top-4 text-gray-600" on:click={close}>&times;</button>

			<h2 class="mb-2 text-2xl font-bold">Create Camera</h2>
			<p class="mb-4 text-gray-600">
				Locations are used to group related cameras together. You can have as many locations and
				cameras as you need.
			</p>
			<Form.Root let:config>
				<div class="flex gap-4 pt-4">
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
								<Form.Select>
									<Form.SelectTrigger placeholder="Select language" />
									<Form.SelectContent>
										{#each languages as lang}
											<Form.SelectItem value={lang.value}>{lang.label}</Form.SelectItem>
										{/each}
									</Form.SelectContent>
								</Form.Select>
								<Form.Validation />
							</Form.Item>
						</Form.Field>
					</div>
				</div>
				<div class="py-4">
					<Form.Field {config} name="description">
						<Form.Item>
							<Form.FormTextarea placeholder="Camera description/notes (Optional)" />
							<Form.Validation />
						</Form.Item>
					</Form.Field>
				</div>
				<Separator />
				<div class="flex gap-4 py-4">
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
				<Separator />
				<Form.Field {config} name="email">
					<Form.Item class="mt-4 flex justify-between rounded border-2 border-slate-100 p-4">
						<div>
							<Form.Label>Security emails</Form.Label>
							<Form.Description
								>Receive emails about your account activity and security.</Form.Description
							>
						</div>
						<Form.FormSwitch />
						<Form.Validation />
					</Form.Item>
				</Form.Field>
				<div class="flex justify-end gap-2 py-4">
					<Form.Button variant="outline">Help</Form.Button>
					<Form.Button>Save</Form.Button>
				</div>
			</Form.Root>
		</div>
	</div>
{/if}

<script lang="ts"> 
import { onMount } from 'svelte';
import { fade } from 'svelte/transition';
import * as Form from "$lib/components/ui/form";

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
    <div transition:fade={{ delay: 250, duration: 300 }} class="fixed top-0 left-0 flex items-center justify-center w-full h-full transition-opacity duration-300 ease-in-out bg-black bg-opacity-50">
        <div class="p-4 bg-white rounded shadow-lg">
            <Form.Root method="POST" let:config>
                <Form.Field {config} name="username">
                    <Form.Item>
                        <Form.Label>Username</Form.Label>
                        <Form.Input />
                        <Form.Description>This is your public display name.</Form.Description>
                        <Form.Validation />
                    </Form.Item>
                    </Form.Field>
                <Form.Button>Submit</Form.Button>
            </Form.Root>
          <button class="absolute top-4 right-4" on:click={() => change()}>&times;</button>
        </div>
    </div>
{/if}
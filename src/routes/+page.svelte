<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import Form from "$lib/components/Form/Form.svelte";

    
    let toggleForm = false;
    function change() {
        toggleForm = !toggleForm;
        console.log(toggleForm);
    }

    
  </script>
<div class="grid justify-center max-w-4xl gap-2 mx-4 text-center md:mx-auto md:max-w-md lg:max-w-lg xl:max-w-2xl">
    <h1 class="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Welcome to Moses Svelte Form Assessment</h1>
    <p class="text-base md:text-lg lg:text-xl">Click here to test the form 👇</p>
    <Button on:click={()=> change()}>Go to form</Button>

    <Form bind:open={toggleForm} />
  </div>
  

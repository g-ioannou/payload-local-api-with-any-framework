<script lang="ts">
	export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<img src="/media/16-bak-16.jpg" />

Found user ids:
{#each data.docs as user (user.id)}
	{user.id}
{/each}

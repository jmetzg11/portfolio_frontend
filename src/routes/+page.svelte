<script>
	const projects = [{ name: 'Crypt', link: '/crypto' }];
</script>

<h1>Projects</h1>

<ul>
	{#each projects as project}
		<li><a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a></li>
	{/each}
</ul>

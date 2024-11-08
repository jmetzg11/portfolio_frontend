<script>
	const projects = [
		{ name: 'Project 1', link: '#', description: 'Description for project 1' },
		{ name: 'Project 2', link: '#', description: 'Description for project 2' },
		{ name: 'Project 3', link: '#', description: 'Description for project 3' }
	];
</script>

<section
	class="custom-pattern h-screen flex flex-col items-center justify-start text-white p-8 space-y-8"
>
	<!-- Top Section with Image and Intro -->
	<div
		class="w-full max-w-5xl flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8"
	>
		<!-- Profile Image -->
		<div class="w-40 h-40 lg:w-60 lg:h-60 flex-shrink-0 rounded-full overflow-hidden shadow-lg">
			<img src="/static/porile.jpeg" alt="Jesse Metzger" class="object-cover w-full h-full" />
		</div>

		<!-- Intro Text -->
		<div class="text-center lg:text-left space-y-4">
			<h1 class="text-3xl lg:text-5xl font-bold">Jesse Metzger</h1>
			<p class="text-lg lg:text-xl max-w-lg leading-relaxed">
				I am a former Data Scientist who currently works as a full-stack developer. I have an
				interest in IoT. Going through my projects you'll discover more of my interests.
			</p>
		</div>
	</div>

	<!-- Projects List -->
	<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
		{#each projects as project}
			<li
				class="bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105"
			>
				<a
					href={project.link}
					target="_blank"
					rel="noopener noreferrer"
					class="text-xl font-semibold text-blue-400 hover:underline"
				>
					{project.name}
				</a>
				<p class="mt-2 text-gray-300">{project.description}</p>
			</li>
		{/each}
	</ul>
</section>

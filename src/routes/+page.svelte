<script>
	const projects = [
		{
			name: 'See My Family',
			link: 'https://seemyfamily.net',
			description: 'A site for my family to track and visualize relations across the globe and time'
		},
		{
			name: 'ETF Investing',
			link: 'etf',
			description:
				'An automated investment strategy that targets the globally 11 sectors of the economy'
		},
		{
			name: 'Government Spending',
			link: 'gov-spending',
			description: 'Visualize government spending by agency and geography'
		},
		{
			name: 'Education & Certificates',
			link: 'certificates',
			description: 'My university diplomas and related certificates'
		},
		{
			name: 'Geography',
			link: 'geography',
			description: 'A tracker to see all the places I have visited'
		}
	];

	const links = [
		{
			path: 'M12 11c.828 0 1.5-.672 1.5-1.5S12.828 8 12 8s-1.5.672-1.5 1.5S11.172 11 12 11zm0-6a4.5 4.5 0 014.5 4.5c0 3.008-4.5 7.5-4.5 7.5s-4.5-4.492-4.5-7.5A4.5 4.5 0 0112 5z',
			ref: 'https://en.wikipedia.org/wiki/Nashville,_Tennessee',
			info: 'Nashville, TN'
		},
		{
			path: 'M20.5 4h-17A2.5 2.5 0 001 6.5v11A2.5 2.5 0 003.5 20h17a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0020.5 4zm-1 2l-7.5 5-7.5-5h15zm-16 11v-8.25l6.646 4.43c.258.171.569.259.854.259s.596-.088.854-.259L19.5 8.75V17h-16z',
			ref: 'https://mail.google.com/',
			info: 'jessejmetzger@gmail.com'
		},
		{
			path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.418 2.867 8.167 6.839 9.49.5.091.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.154-1.11-1.461-1.11-1.461-.908-.621.069-.608.069-.608 1.004.07 1.532 1.033 1.532 1.033.892 1.529 2.341 1.087 2.91.831.091-.647.349-1.087.635-1.337-2.221-.253-4.555-1.114-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.271.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.908-1.296 2.748-1.026 2.748-1.026.546 1.379.203 2.397.1 2.65.64.7 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.358.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.579.688.481A10.019 10.019 0 0022 12.017C22 6.484 17.523 2 12 2z',
			ref: 'https://github.com/jmetzg11alpine',
			info: 'jmetzg11alpine'
		},
		{
			path: 'M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5zM7.25 18.375H4.625V9h2.625v9.375zM5.938 7.688a1.516 1.516 0 110-3.032 1.516 1.516 0 010 3.032zM18.375 18.375h-2.625v-4.219c0-1.008-.02-2.305-1.404-2.305-1.405 0-1.62 1.097-1.62 2.23v4.294H10.1V9h2.523v1.281h.034c.351-.664 1.206-1.404 2.485-1.404 2.656 0 3.141 1.749 3.141 4.021v5.477z',
			ref: 'https://www.linkedin.com/in/jmetzg11/',
			info: 'jmetzg11'
		}
	];
</script>

<section
	class="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen flex flex-col items-center justify-start p-8 space-y-12"
>
	<div
		class="w-full max-w-5xl flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12"
	>
		<div
			class="w-40 h-40 lg:w-60 flex-shrink-0 rounded-full overflow-hidden shadow-2xl border-4 border-blue-400"
		>
			<img src="/profile.jpeg" alt="Jesse Metzger" class="object-cover w-full h-full" />
		</div>
		<div class="text-center lg:text-left space-y-4">
			<h1 class="text-4xl lg:text-6xl font-extrabold text-gray-800">Jesse Metzger</h1>
			<div class="space-y-3">
				{#each links as link}
					<div class="flex items-center justify-center lg:justify-start space-x-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 text-blue-500"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d={link.path} />
						</svg>
						<a
							href={link.ref}
							target="_blank"
							rel="noopener noreferrer"
							class="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
						>
							{link.info}
						</a>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="w-full max-w-5xl">
		<div class="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
			Current Activities
		</div>
		<div class="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
			<p class="text-lg text-gray-700 leading-relaxed">
				I relocated to Nashville in March 2023 to join a rapidly growing logistics company focused
				on digitalizing business processes. As the third developer hired, I played a pivotal role in
				building and scaling critical systems, including price predictors, a warehouse management
				system, bidding platforms, automated reporting tools, label printing solutions, order
				tracking, and dashboards. My contributions were instrumental in transforming the IT
				department, which has since grown from a small team to nearly 20 employees, driving
				innovation and operational efficiency.
			</p>
		</div>
	</div>
	<div class="w-full max-w-5xl">
		<div class="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
			Background
		</div>
		<div class="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
			<p class="text-lg text-gray-700 leading-relaxed">
				In graduate school, I developed a strong foundation in statistics and econometrics through
				advanced coursework. This expertise led to roles as a Data Analyst and Data Scientist, where
				I honed my skills in analyzing and interpreting complex datasets. Over time, I shifted my
				focus to the entire data lifecycle, including data creation, transformation, visualization,
				and application. My ability to build predictive models when needed adds significant value to
				my approach, enabling data-driven decision-making across diverse projects.
			</p>
		</div>
	</div>
	<div class="w-full max-w-5xl">
		<div class="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
			Sample Projects
		</div>
		<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{#each projects as project}
				<li
					class="p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow transform hover:-translate-y-1"
				>
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						class="text-xl font-semibold text-blue-600 hover:text-blue-800 hover:underline"
					>
						{project.name}
					</a>
					<p class="mt-2 text-gray-600 text-sm">{project.description}</p>
				</li>
			{/each}
		</ul>
	</div>
	<div class="w-full max-w-5xl">
		<div>
			<div class="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
				Skills
			</div>
			<div
				class="bg-white p-8 rounded-lg shadow-lg border border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-lg"
			>
				<div>
					<strong>Frontend:</strong> React, Svelte, Redux, Tailwind CSS, Bootstrap
				</div>
				<div>
					<strong>Backend:</strong> Gin, Django, FastAPI, Express
				</div>
				<div>
					<strong>DevOps:</strong> AWS, Docker, Git
				</div>
				<div>
					<strong>Languages:</strong> Python, JavaScript, TypeScript, Go, Rust
				</div>
				<div>
					<strong>Databases:</strong> PostgreSQL, MySQL, MongoDB
				</div>
				<div>
					<strong>Other:</strong> Russian, Spanish, BJJ, Dogs
				</div>
			</div>
		</div>
	</div>
</section>

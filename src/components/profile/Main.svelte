<script>
  import Step from './Step.svelte';

  let steps = [
    {
      name: 'Project A',
      icon: 'fa-solid fa-truck-moving',
      href: 'https://seemyfamily.net/logistics',
    },
    {
      name: 'Project B',
      icon: 'fa-solid fa-weight-scale',
      href: 'https://seemyfamily.net/health',
    },
    {
      name: 'Project C',
      icon: 'fa-solid fa-sack-dollar',
      href: 'https://seemyfamily.net/budget',
    },
    {
      name: 'Family Tree',
      icon: 'fa-solid fa-people-roof',
      href: 'https://seemyfamily.net',
    },
  ];

  let benefits = [
    {
      name: 'a donkey boy',
      description:
        'blablah blha asdflkj as;klfj;l as;flkjas f;lkjas f;lkjsf ;aksflj as;kflja s;fdlkjas ;fdkljasd; fdlksjaf ;lkdjsf; askfdjlfksdjldkjfl ;asdlfkjsdlkfj safldkjasdf lskfjh blah blah blah',
    },
    {
      name: 'a data dork',
      description:
        'blah blah bblah blha asdflkj as;klfj;l as;flkjas f;lkjas f;lkjsf ;aksflj as;kflja s;fdlkjas ;fdkljasd; fdlksjaf ;lkdjsf; askfdjlfksdjldkjfl ;asdlfkjsdlkfj safldkjasdf lskfjlah blah',
    },
    {
      name: 'background stuff',
      description:
        'blah blha asdflkj as;klfj;l as;flkjas f;lkjas f;lkjsf ;aksflj as;kflja s;fdlkjas ;fdkljasd; fdlksjaf ;lkdjsf; askfdjlfksdjldkjfl ;asdlfkjsdlkfj safldkjasdf lskfj',
    },
  ];
</script>

<main class="flex flex-col flex-1 p-4">
  <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Hi! I'm <span class="poppins text-violet-400">Jesse</span> Metzger <br />
        Full <span class="poppins text-violet-400">Stack</span> & <br />
        Data <span class="poppins text-violet-400">Science</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        My <span class="text-violet-400">tech stack</span> includes SvelteKei, React, Redux,
        Apex Charts, boostrap, tailwinds, express.js, Django, fastapi, rust something, postgres,
        mysql, mongodb
      </p>
      <a
        href="https://www.linkedin.com/in/jmetzg11/"
        target="_blank"
        class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
        />
        <h4 class="relative z-9">Get in touch &rarr;</h4>
      </a>
    </div>
    <div class="relative shadow-2xl grid place-items-center">
      <img
        src={'images/download.jpeg'}
        alt="Profile pic"
        class="object-cover z-[2] max-h-[70vh]"
      />
    </div>
  </section>

  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-lg sm:text-xl md:text-2xl">A few of my creative endeavors</h6>
      <h3>Courious to <span class="poppins text-violet-400">see</span> my work?</h3>
    </div>
    <a
      href="https:///www.youtube.com/watch?v=dQw4w0WgXcQ"
      target="_blank"
      class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
      ><i class="fa-regular fa-circle-play"></i></a
    >
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      <Step step={steps[0]}
        >Some fake text that needs to be added that describes the project <strong
          class="text-violet-400">Some cool info heere</strong
        > some more info how much more info can fit in here</Step
      >
      <Step step={steps[1]}
        >Some fake text that needs to be added that describes the project <strong
          class="text-violet-400">Some cool info heere</strong
        ></Step
      >
      <Step step={steps[2]}
        >Some fake text that needs to be added that describes the project <strong
          class="text-violet-400">Some cool info heere</strong
        ></Step
      >
      <Step step={steps[3]}
        >Some fake text that needs to be added that describes the project <strong
          class="text-violet-400">Some cool info heere</strong
        ></Step
      >
    </div>
  </section>

  <section
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
      <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A bit <span class="poppins text-violet-400">about</span> me.
      </h3>
    </div>
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am . . .</p>
    {#each benefits as benefit, index}
      <div class="flex gap-6 sm:gap-8">
        <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
          0{index + 1}
        </p>
        <div class="flex flex-col gap-6 sm:gap-8">
          <h3 class="text-2xl sm:text-3xl md:text-5xl">{benefit.name}</h3>
          <p>{benefit.description}</p>
        </div>
      </div>
    {/each}
  </section>
</main>

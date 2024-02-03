"use client";
import { Icon } from '@iconify/react';
import Card from 'src/components/card';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-10 md:pt-16 bg-white dark:bg-neutral-950">
      <span className="inline-flex items-center rounded-lg bg-gray-100 dark:bg-zinc-800 mb-4 md:mb-3 px-3 py-1 text-sm font-semibold">
        🎉
        <div className="shrink-0 bg-border w-[1px] mx-2 h-4"></div>
        <span className='sm:hidden'>Nuevos recursos y más.</span>
        <span className='hidden sm:inline'>Nuevos recursos, actualizados y más.</span>
      </span>

      <h1 className="font-bold text-4xl text-center md:text-6xl mb-5 text-black dark:text-white">
        ¡Biblioteca de recursos para
        <span className="tracking-tight inline from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b"> desarrolladores</span>
        !
      </h1>

      <div className="font-normal text-center w-full max-w-6xl px-4 py-0 rounded-lg bg-white dark:bg-neutral-950 mx-auto">
        <div className="max-w-2xl mx-auto pb-10">
          <span className="text-lg sm:text-xl mb-6 font-normal text-black dark:text-gray-400">
            Recursos cuidadosamente seleccionados para potenciar tus proyectos. Accesibles. Versatiles. De código abierto.
          </span>
        </div>



        <div className="hidden lg:grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 pb-14">
          {/* Primera fila */}
          <div className="bg-transparent p-4" style={{ animation: "levitate 16s ease infinite" }}>
            <Card title="Vercel" link="https://vercel.com" iconDark="/icons/Vercel_dark.svg" iconLight="/icons/Vercel_light.svg" />
          </div>
          <div className="bg-transparent p-4" style={{ animation: "levitate 17s ease 1s infinite" }}>
            <Card title="Firebase" link="https://firebase.google.com" iconDark="/icons/firebase.svg" iconLight="/icons/firebase.svg" />
          </div>
          <div className="bg-transparent p-4" style={{ animation: "levitate 12s ease 1s infinite" }}>
            <Card title="Tabler Icons" link="https://tablericons.com" iconDark="/icons/tablerio.svg" iconLight="/icons/tablerio.svg" />
          </div>
          <div className="col-span-2 bg-transparent p-4" style={{ animation: "levitate 14s ease 1s infinite" }}>
            <Card title="Fly.io" link="https://fly.io"  iconDark="/icons/fly.svg" iconLight="/icons/fly.svg" />
          </div>
          <div className="col-span-2 bg-transparent p-4" style={{ animation: "levitate 12s ease 1s infinite" }}>
            <Card title="Github Copilot" link="https://coolors.co" iconDark="/icons/GithubCopilot_dark.svg" iconLight="/icons/GithubCopilot_light.svg" />
          </div>

          <div className="bg-transparent p-4" style={{ animation: "levitate 17s ease infinite" }}>
            <Card title="Svgl" link="https://svgl.vercel.app/" iconDark="/icons/Svgl.svg" iconLight="/icons/Svgl.svg" />
          </div>
          <div className="bg-transparent p-4" style={{ animation: "levitate 12s ease infinite" }}>
            <Card title="Adobe Color" link="https://color.adobe.com/es" iconDark="/icons/Adobecolor_dark.svg" iconLight="/icons/Adobecolor_light.svg" />
          </div>
          <div className="bg-transparent p-4" style={{ animation: "levitate 16s ease infinite" }}>
            <Card title="NHost" link="https://nhost.io" iconDark="/icons/nhost.svg" iconLight="/icons/nhost.svg" />
          </div>
          

        </div>

        <div className='lg:hidden flex justify-center border border-zinc-300 dark:border-zinc-800 rounded-3xl mb-14'>
          <Image src="/dark.png" className='hidden dark:block rounded-3xl' alt="Next.js" width={1000} height={1000} />
          <Image src="/light.png" className='block dark:hidden rounded-3xl' alt="Next.js" width={1000} height={1000} />
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 font-medium mb-14">
          <div className="flex items-center justify-center p-4 bg-black/5 hover:bg-zinc-200/60 dark:hover:bg-zinc-900 dark:bg-white/5 rounded-2xl md:rounded-3xl">
            <p className="flex md:flex-col items-center gap-x-3 sm:gap-x-0 text-base md:gap-y-2 sm:text-xl text-black dark:text-white">
              <Icon icon="flowbite:search-solid" className='size-6 ' /> Iconos para tu proyecto
            </p>
          </div>
          <div className="flex items-center justify-center p-4 bg-black/5 hover:bg-zinc-200/60 dark:hover:bg-zinc-900 dark:bg-white/5 rounded-2xl md:rounded-3xl">
            <p className="flex md:flex-col items-center gap-x-3 sm:gap-x-0 text-base md:gap-y-2 sm:text-xl text-black dark:text-white">
              <Icon icon="ic:round-rocket-launch" className='size-6 ' /> Donde subir tu base de datos
            </p>
          </div>
          <div className="flex items-center justify-center p-4 bg-black/5 hover:bg-zinc-200/60 dark:hover:bg-zinc-900 dark:bg-white/5 rounded-2xl md:rounded-3xl">
            <p className="flex md:flex-col items-center gap-x-3 sm:gap-x-0 md:gap-y-2 text-base sm:text-xl text-black dark:text-white">
              <Icon icon="mdi:extension" className='size-6 ' /> Extensiones para usar en tu IDE
            </p>
          </div>
          <div className="flex items-center justify-center p-4 bg-black/5 dark:bg-white/5 rounded-2xl md:rounded-3xl">
            <p className="flex md:flex-col items-center gap-x-3 sm:gap-x-0 text-base md:gap-y-2 sm:text-xl text-black dark:text-white">
              <Icon icon="ion:book" className='size-6 ' /> Cursos gratis sobre desarrollo
            </p>
          </div>
        </div>

        

        <span className="flex items-center justify-center gap-x-2.5 tracking-tight font-bold text-3xl md:text-4xl from-[#1b1b1b] to-[#000000] dark:from-[#ffffff] dark:to-[#b3b4b0] bg-clip-text text-transparent bg-gradient-to-b">
          <Icon icon="mdi:warning-circle" className='text-blue-500 dark:text-blue-500 rotate-180' />README
        </span>
        <div className="mt-4 rounded-3xl max-w-5xl mx-auto bg-gray-100 dark:bg-neutral-900 p-6">
          <div className='flex flex-col items-center pb-5'>
            <Icon icon="simple-icons:github" className='mb-5 text-transparent text-zinc-950 dark:text-white' width={60} height={60} />
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 ">
              ¡Contribuye al proyecto de Resources Dev!
            </h2>
          </div>
          <div className="flex flex-col space-y-4 text-base md:text-lg">
            <div className="flex items-center space-x-2">
              <Icon icon="octicon:issue-opened-16" className="text-black dark:text-white" width="16" height="16" />
              <p className=" text-black dark:text-gray-300">¿Tienes alguna idea de recurso que te gustaría ver aquí? ¡Haz un pull request!</p>
            </div>
            <div className="flex items-center space-x-2">
              <Icon icon="octicon:issue-opened-16" className="text-black dark:text-white" width="16" height="16" />
              <p className=" text-black dark:text-gray-300">¿No te sientes seguro? ¡Abre un issue y te ayudaremos a agregarlo!</p>
            </div>
            <div className="flex items-center space-x-2">
              <Icon icon="octicon:issue-opened-16" className="text-black dark:text-white" width="16" height="16" />
              <p className=" text-black dark:text-gray-300">Toda recomendacion, mejora o cambios sugeridos son bienvenidos.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-sm sm:text-base mt-4 text-gray-600 dark:text-zinc-300 pt-20 ">
        Esta pagina esta inspirada en <a href="https://recursostech.vercel.app/" target="_blank" className='text-blue-500 font-semibold'>Recursos Tech</a>
      </div>
    </div>
  );
}

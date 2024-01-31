"use client";
import {Icon} from '@iconify/react';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-10 md:pt-16 bg-white dark:bg-neutral-950">
      <span className="inline-flex items-center rounded-lg bg-gray-100 dark:bg-zinc-800 mb-4 md:mb-3 px-3 py-1 text-sm font-semibold">
        🎉
        <div className="shrink-0 bg-border w-[1px] mx-2 h-4"></div>    
        <span>Nuevos recursos, actualizados y más.</span>
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-medium mb-10">
          <div className="flex items-center justify-center p-4 bg-black/5 dark:bg-white/5 rounded-2xl md:rounded-3xl">
            <p className="text-lg sm:text-xl text-black dark:text-white">
              🔍 ¿Necesitas iconos para tu proyecto?
            </p>
          </div>
          <div className="flex items-center justify-center p-4 bg-black/5 dark:bg-white/5 rounded-2xl md:rounded-3xl">
            <p className="text-lg sm:text-xl text-black dark:text-white">
              🚀 ¿No sabes dónde deployar tu base de datos?
            </p>
          </div>
          <div className="flex items-center justify-center p-4 bg-black/5 dark:bg-white/5 rounded-2xl md:rounded-3xl">
            <p className="text-lg sm:text-xl text-black dark:text-white">
              ⚙️ ¿Te preguntas cómo configurar esa extensión o herramienta en tu IDE?
            </p>
          </div>
        </div>
        <span className="flex items-center justify-center gap-x-3 tracking-tight font-bold text-3xl md:text-4xl from-[#1b1b1b] to-[#000000] dark:from-[#ffffff] dark:to-[#b3b4b0] bg-clip-text text-transparent bg-gradient-to-b">
          <Icon icon="mdi:warning-circle" className='text-blue-500 dark:text-blue-500 rotate-180'  />README
        </span>
    <div className="mt-4 rounded-3xl max-w-5xl mx-auto bg-gray-100 dark:bg-neutral-900 p-6">
      <div className='flex flex-col items-center pb-5'>
        <Icon icon="simple-icons:github" className='mb-5 text-zinc-900 dark:text-white' width={60} height={60} />
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 ">
          ¡Contribuye al proyecto de Resources Dev!
        </h2>
      </div>
  <div className="flex flex-col space-y-4 text-base md:text-lg">
    <div className="flex items-center space-x-2">
      <Icon icon="octicon:issue-opened-16" className="text-black dark:text-white" width="16" height="16"/>
      <p className=" text-black dark:text-gray-300">¿Tienes alguna idea de recurso que te gustaría ver aquí? ¡Haz un pull request!</p>
    </div>
    <div className="flex items-center space-x-2">
      <Icon icon="octicon:issue-opened-16" className="text-black dark:text-white" width="16" height="16"/>
      <p className=" text-black dark:text-gray-300">¿No te sientes seguro? ¡Abre un issue y te ayudaremos a agregarlo!</p>
    </div>
    <div className="flex items-center space-x-2">
      <Icon icon="octicon:issue-opened-16" className="text-black dark:text-white" width="16" height="16"/>
      <p className=" text-black dark:text-gray-300">Toda recomendacion, mejora o cambios sugeridos son bienvenidos.</p>
    </div>
  </div>
</div>


      </div>
    </div>
  );
}

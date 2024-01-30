export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-10 md:pt-16 bg-white dark:bg-neutral-950">
      <span className="inline-flex items-center rounded-lg bg-gray-100 dark:bg-zinc-800 mb-3 px-3 py-1 text-sm font-semibold">
        🎉
        <div className="shrink-0 bg-border w-[1px] mx-2 h-4"></div>    
        <span>Nuevos recursos, actualizados y más.</span>
      </span>
      <h1 className="font-bold text-4xl md:text-6xl mb-5  text-black dark:text-white">Libreria de recursos</h1>
      <div className="font-normal text-center w-full max-w-6xl px-4 py-0 rounded-lg bg-white dark:bg-neutral-950 shadow-md mx-auto">
        <div className="max-w-2xl mx-auto pb-5">
          <span className="text-lg sm:text-xl mb-6 font-normal text-black dark:text-gray-400">Recursos cuidadosamente seleccionados para potenciar tus proyectos. Accesibles. Versatiles. De código abierto.</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-medium">
          <div className="flex items-center justify-center p-4 bg-blue-100 dark:bg-blue-700/50 rounded-2xl">
            <p className="text-lg sm:text-xl text-black dark:text-white">🔍 ¿Necesitas iconos para tu proyecto?</p>
          </div>
          <div className="flex items-center justify-center p-4 bg-green-100 dark:bg-green-700/50 rounded-2xl">
            <p className="text-lg sm:text-xl text-black dark:text-white">🚀 ¿No sabes dónde deployar tu base de datos?</p>
          </div>
          <div className="flex items-center justify-center p-4 bg-yellow-100 dark:bg-yellow-700/50 rounded-2xl">
            <p className="text-lg sm:text-xl text-black dark:text-white">⚙️ ¿Te preguntas cómo configurar esa extensión o herramienta en tu IDE?</p>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-lg sm:text-xl mb-4 text-black dark:text-white">📌 ¿Crees que debería haber un recurso aquí y no lo encuentras? ¡Haz un pull request y añádela vos mismo!</p>
          <p className="text-lg sm:text-xl mb-4 text-black dark:text-white">😨 Si no te sientes seguro, no hay problema. ¡Simplemente abre un issue con la opción &quot;Agregar nuevo recurso&quot; y nosotros lo agregaremos por vos!</p>
          <p className="text-lg sm:text-xl text-black dark:text-white">🤔 ¿Te gustaría tener videos tutoriales para algunas herramientas? ¡Genial! Abre un issue con la opción &quot;Agregar nuevo video para recurso&quot; y haremos todo lo posible para proporcionarlo.</p>
        </div>
      </div>
    </div>
  );
}


export default function Home() {
  return (
    <>
            <span className="font-bold text-4xl mb-5 underline underline-offset-8 decoration-pink-500">Inicio</span>
            <div className="font-semibold w-full h-12 rounded-lg text-lg sm:text-3xl">
            💫 La mejor lista de recursos para desarrolladores.
            </div>
            <div className="w-full h-32 rounded-lg">
              <p className="sm:text-xl">🔍 ¿Necesitas iconos para tu proyecto?</p>
              <p className="sm:text-xl">🚀 ¿No sabes donde deployar tu base de datos?</p>
              <p className="sm:text-xl">⚙️ ¿Te preguntas cómo configurar esa extensión o herramienta en tu IDE?</p>            
            </div>

            <div className="w-full sm:text-xl h-96">
              <p>
                📌 ¿Crees que debería haber un recurso aquí y no lo encuentras? ¡Haz un pull request y añádelo tú mismo!
              </p>
              <p>
                😨 Si no te sientes seguro, no hay problema. ¡Simplemente abre un issue con la opción "Agregar nuevo recurso" y nosotros lo agregaremos por ti!
              </p>
              <p>
                🤔 ¿Te gustaría tener videos tutoriales para algunas herramientas? ¡Genial! Abre un issue con la opción "Agregar nuevo video para recurso" y haremos todo lo posible para proporcionarlo.
              </p>
            </div>
    </>
  );
}

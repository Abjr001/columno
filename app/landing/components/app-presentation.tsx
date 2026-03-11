import TryItOut from "./try-but";
import { OrbitalTools } from "./orbital-tools";

function AppPresentation() {
  return (
    <div>
      <div className="flex justify-between items-center max-xl:flex-col max-xl:pt-16">
        <div className="w-1/2 max-lg:w-xl max-xl:w-3xl max-xl:text-center">
          <div className="text-5xl max-lg:text-3xl max-md:text-xl">
            Transformer vos idées en projet. Suivez les progrès. Livrez plus
            rapidement 🚀
          </div>
          <p className="w-1/2 py-7 text-white/60 max-xl:w-2/3 max-xl:mx-auto">
            Notre platforme mets à votre disposition des fonctionnalités et
            outils vous permettant de suivre toutes les étapes et tâche
            spéficique de la conception à l&apos;implémentation
          </p>
          <div className="flex items-center max-xl:justify-center">
            <TryItOut />{" "}
            <span className="pl-4 text-white/80 max-lg:hidden">
              Découvrer Columno
            </span>
          </div>
          <p className="mt-6 w-max py-5 px-8 bg-gray-600/30">
            Plusieurs clients satisfait
          </p>
        </div>
        <div className="w-1/2 flex justify-center">
          <OrbitalTools />
        </div>
      </div>
    </div>
  );
}

export default AppPresentation;

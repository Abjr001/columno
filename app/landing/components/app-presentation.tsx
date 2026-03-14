import TryItOut from "./try-but";
import { OrbitalTools } from "./orbital-tools";
import EnterprisesImage from "./enterprises-img";

function AppPresentation() {
  return (
    <div className="flex flex-col items-center sm:pt-16 xl:flex-row xl:justify-around xl:pt-0">
      <div className="w-full flex justify-center sm:hidden xl:w-1/2">
        <OrbitalTools />
      </div>
      <div className="w-full text-center flex flex-col gap-14 justify-around md:w-3xl lg:w-xl xl:w-1/2 xl:text-left">
        <div className="h-full flex flex-col gap-4">
          <div className="text-xl md:text-3xl lg:text-5xl">
            Transformer vos idées en projet. Suivez les progrès. Livrez plus
            rapidement 🚀
          </div>
          <p className="w-2/3 mx-auto text-white/60 xl:w-1/2 xl:mx-0">
            Notre platforme mets à votre disposition des fonctionnalités et
            outils vous permettant de suivre toutes les étapes et tâche
            spéficique de la conception à l&apos;implémentation
          </p>
          <div className="flex items-center justify-center xl:justify-start">
            <TryItOut />
            <span className="pl-4 text-white/80 hidden lg:block">
              Découvrer Columno
            </span>
          </div>
        </div>
        <div className="py-4">
          <div className="flex justify-center xl:justify-start">
            <EnterprisesImage />
            <p className="text-3xl pl-2">135+</p>
          </div>
          <p className="w-full mx-auto text-white/60 pt-3 xl:w-2/4 3xl:w-1/4 xl:mx-0">
            Les particuliers choisissent la simplicité et nous rejoignent
          </p>
        </div>
      </div>
      <div className="w-full hidden sm:flex sm:justify-center xl:w-1/2">
        <OrbitalTools />
      </div>
    </div>
  );
}

export default AppPresentation;

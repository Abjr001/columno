"use client";

import Image from "next/image";
import Logo from "@/public/assets/black-log-rmbg.png";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-app-background flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <div className="flex justify-center mb-8 mx-auto w-56 h-max">
          <Image src={Logo} alt="Columno" width={140} height={20} />
        </div>

        <div className="bg-app-surface border border-app-border rounded-2xl p-8 space-y-6 shadow-sm">
          <div className="space-y-2">
            <p className="text-6xl">⚠️</p>
            <h1 className="text-app-text text-2xl font-semibold">
              Une erreur est survenue
            </h1>
            <p className="text-app-text-muted text-sm">
              {error.message || "Quelque chose s'est mal passé. Réessaie."}
            </p>
          </div>

          {/* reset() recharge le segment qui a échoué sans recharger toute la page */}
          <button
            onClick={reset}
            className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-2.5 rounded-lg transition text-sm cursor-pointer"
          >
            Réessayer
          </button>
        </div>
      </div>
    </div>
  );
}

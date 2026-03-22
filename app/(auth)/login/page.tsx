import { signIn, auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default async function LoginPage() {
  const session = await auth();
  if (session) redirect("/dashboard");

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/assets/white-log-rmbg.png"
            alt="Columno"
            width={140}
            height={40}
          />
        </div>

        {/* Card */}
        <div className="bg-surface border border-border rounded-2xl p-8 space-y-6">
          <div className="space-y-1">
            <h1 className="text-text text-2xl font-semibold">Bon retour 👋</h1>
            <p className="text-text-muted text-sm">
              Connecte-toi à ton espace Columno
            </p>
          </div>

          {/* Formulaire credentials */}
          <form
            action={async (formData) => {
              "use server";
              await signIn("credentials", {
                email: formData.get("email"),
                password: formData.get("password"),
                redirectTo: "/dashboard",
              });
            }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <label className="text-text-muted text-sm">Email</label>
              <input
                name="email"
                type="email"
                placeholder="ton@email.com"
                className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text text-sm outline-none focus:border-primary transition"
              />
            </div>

            <div className="space-y-2">
              <label className="text-text-muted text-sm">Mot de passe</label>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text text-sm outline-none focus:border-primary transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-2.5 rounded-lg transition text-sm cursor-pointer"
            >
              Se connecter
            </button>
          </form>

          {/* Séparateur */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-border" />
            <span className="text-text-muted text-xs">ou continuer avec</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* OAuth buttons */}
          <div className="grid grid-cols-2 gap-3">
            <form
              action={async () => {
                "use server";
                await signIn("github", { redirectTo: "/dashboard" });
              }}
            >
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 border border-border rounded-lg py-2.5 text-text text-sm hover:bg-border transition cursor-pointer"
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </button>
            </form>

            <form
              action={async () => {
                "use server";
                await signIn("google", { redirectTo: "/dashboard" });
              }}
            >
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 border border-border rounded-lg py-2.5 text-text text-sm hover:bg-border transition cursor-pointer"
              >
                <FaGoogle className="w-4 h-4" />
                Google
              </button>
            </form>
          </div>

          {/* Lien vers register */}
          <p className="text-center text-text-muted text-sm">
            Pas encore de compte ?{" "}
            <Link href="/register" className="text-primary hover:underline">
              S&apos;inscrire
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

import { signIn, auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Logo from "@/public/assets/black-log-rmbg.png";
import { register } from "@/lib/actions/auth.actions";
import PasswordInput from "../components/password-input";

export default async function RegisterPage() {
  const session = await auth();
  if (session) redirect("/app");

  return (
    <div className="min-h-screen bg-app-background flex items-center py-8 justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8 mx-auto w-56 h-max">
          <Image src={Logo} alt="Columno" width={140} height={20} />
        </div>

        {/* Card */}
        <div className="bg-app-surface max-h-[90vh] overflow-y-auto border border-app-border rounded-2xl p-8 space-y-6 shadow-sm">
          <div className="space-y-1">
            <h1 className="text-app-text text-2xl font-semibold">
              Créer un compte 🚀
            </h1>
            <p className="text-app-text-muted text-sm">
              Rejoins Columno et commence à gérer tes projets
            </p>
          </div>

          {/* Formulaire register */}
          <form action={register} className="space-y-4">
            {/* Firstname + Lastname sur la même ligne */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <label className="text-app-text text-sm font-medium">
                  Prénom
                </label>
                <input
                  name="firstname"
                  type="text"
                  placeholder="Jules"
                  required
                  className="w-full bg-app-background border border-app-border rounded-lg px-4 py-2.5 text-app-text text-sm outline-none focus:border-primary transition placeholder:text-app-text-muted"
                />
              </div>
              <div className="space-y-2">
                <label className="text-app-text text-sm font-medium">Nom</label>
                <input
                  name="lastname"
                  type="text"
                  placeholder="Olofe"
                  required
                  className="w-full bg-app-background border border-app-border rounded-lg px-4 py-2.5 text-app-text text-sm outline-none focus:border-primary transition placeholder:text-app-text-muted"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-app-text text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                placeholder="julesolofe@email.com"
                required
                className="w-full bg-app-background border border-app-border rounded-lg px-4 py-2.5 text-app-text text-sm outline-none focus:border-primary transition placeholder:text-app-text-muted"
              />
            </div>

            <div className="space-y-2">
              <label className="text-app-text text-sm font-medium">
                Mot de passe
              </label>
              <PasswordInput />
            </div>

            <div className="space-y-2">
              <label className="text-app-text text-sm font-medium">
                Confirmer le mot de passe
              </label>
              <PasswordInput name="confirmPassword" placeholder="••••••••" />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-2.5 rounded-lg transition text-sm cursor-pointer"
            >
              Créer mon compte
            </button>
          </form>

          {/* Séparateur */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-app-border" />
            <span className="text-app-text-muted text-xs">
              ou continuer avec
            </span>
            <div className="flex-1 h-px bg-app-border" />
          </div>

          {/* OAuth buttons */}
          <div className="grid grid-cols-2 gap-3">
            <form
              action={async () => {
                "use server";
                await signIn("github", { redirectTo: "/app" });
              }}
            >
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 border border-app-border rounded-lg py-2.5 text-app-text text-sm hover:bg-app-background transition cursor-pointer"
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </button>
            </form>

            <form
              action={async () => {
                "use server";
                await signIn("google", { redirectTo: "/app" });
              }}
            >
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 border border-app-border rounded-lg py-2.5 text-app-text text-sm hover:bg-app-background transition cursor-pointer"
              >
                <FcGoogle className="w-4 h-4" />
                Google
              </button>
            </form>
          </div>

          {/* Lien login */}
          <p className="text-center text-app-text-muted text-sm">
            Déjà un compte ?{" "}
            <Link
              href="/login"
              className="text-primary hover:underline font-medium"
            >
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

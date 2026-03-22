import { auth, signOut } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <div>
      {/* Vérifie que la session est bien accessible et que firstname est remonté */}
      <h1>Bonjour {session.user.firstname} 👋</h1>

      {/* Server Action pour se déconnecter */}
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/login" });
        }}
      >
        <button type="submit">Se déconnecter</button>
      </form>
    </div>
  );
}

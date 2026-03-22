"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { signIn } from "@/lib/auth";

export async function register(formData: FormData) {
  const firstname = formData.get("firstname") as string;
  const lastname = formData.get("lastname") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // Vérifie si l'email est déjà utilisé
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return { error: "Cet email est déjà utilisé." };
  }

  // Hash le mot de passe avant de stocker en base
  const hashedPassword = await bcrypt.hash(password, 12);

  // Crée l'utilisateur
  await prisma.user.create({
    data: {
      firstname,
      lastname,
      name: `${firstname} ${lastname}`,
      email,
      password: hashedPassword,
    },
  });

  // Connecte directement après inscription
  await signIn("credentials", {
    email,
    password,
    redirectTo: "/dashboard",
  });
}

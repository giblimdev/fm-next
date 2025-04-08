//@/app/auth/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuthUser } from "@/stores/useAuthUser"; // Assurez-vous que le chemin vers votre store est correct
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Définir le schéma de validation avec Zod
const loginSchema = z.object({
  email: z.string().email({ message: "Veuillez entrer un email valide." }),
  password: z.string().min(6, { message: "Le mot de passe doit contenir au moins 6 caractères." }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuthUser();
  const [error, setError] = useState<string | null>(null);

  // Utiliser React Hook Form avec le resolver Zod
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    setError(null); // Réinitialiser les erreurs précédentes

    // Simuler une tentative de connexion
    if (data.email === "test@example.com" && data.password === "password") {
      login(); // Connecter l'utilisateur (en utilisant l'utilisateur fictif de votre store)
      router.push("/"); // Rediriger vers la page d'accueil après la connexion
    } else {
      setError("Identifiants incorrects.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-blue-50 p-5 flex justify-center items-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Connexion</CardTitle>
          <CardDescription className="text-muted-foreground text-center">
            Entrez vos identifiants pour accéder à votre compte.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Votre email"
                className="rounded-md"
                {...register("email")}
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Mot de passe
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Votre mot de passe"
                className="rounded-md"
                {...register("password")}
              />
              {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="my-3  w-full rounded-md ">
              Se connecter
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center text-sm text-muted-foreground">
        Pas encore de compte ? <Link href="/auth/register" className="text-blue-800 hover:underline">
        &nbsp;S'inscrire
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
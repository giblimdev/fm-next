"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Définir le schéma de validation avec Zod
const registerSchema = z.object({
  email: z.string().email({ message: "Veuillez entrer un email valide." }),
  password: z.string().min(6, { message: "Le mot de passe doit contenir au moins 6 caractères." }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas.",
  path: ["confirmPassword"], // Indique à quel champ l'erreur s'applique
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  // Utiliser React Hook Form avec le resolver Zod
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    setError(null); // Réinitialiser les erreurs précédentes

    // Simuler une tentative d'inscription
    if (data.email && data.password === data.confirmPassword) {
      // Ici, vous feriez l'appel à votre backend pour enregistrer l'utilisateur
      console.log("Inscription réussie avec les données :", data);
      setRegistrationSuccess(true);
      // Rediriger l'utilisateur après un délai (facultatif)
      setTimeout(() => {
        router.push("/auth/login");
      }, 1500);
    } else {
      // Normalement, l'erreur de non-correspondance des mots de passe est gérée par Zod
      // Cette condition est plus pour d'autres erreurs potentielles côté client
      if (!errors.confirmPassword) {
        setError("Une erreur s'est produite lors de l'inscription.");
      }
    }
  };

  if (registrationSuccess) {
    return (
      <div className="min-h-screen w-full bg-blue-50 p-5 flex justify-center items-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Inscription réussie !</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p>Votre compte a été créé avec succès.</p>
            <Button asChild className="mt-4 rounded-md">
              <Link href="/auth/login">Se connecter</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-blue-50 p-5 flex justify-center items-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Inscription</CardTitle>
          <CardDescription className="text-muted-foreground text-center">
            Créez votre nouveau compte.
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
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Confirmer le mot de passe
              </label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirmer votre mot de passe"
                className="rounded-md"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="my-3 w-full rounded-md">
              S'inscrire
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center text-sm text-muted-foreground">
          Déjà un compte ? <Link href="/auth/login" className="text-blue-800 hover:underline">&nbsp;Se connecter</Link>
        </CardFooter>
      </Card>
    </div>
  );
}
// stores/useAuthUser.ts
import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string | null;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: () => void;
  logout: () => void;
}

export const useAuthUser = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: () => {
    // Simuler une connexion réussie avec un utilisateur fictif
    set({
      isAuthenticated: true,
      user: {
        id: 'fakeUserId',
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatarUrl: '/fake-avatar.png', // Vous pouvez créer une image d'avatar fictive dans votre dossier public
      },
    });
  },
  logout: () => {
    // Simuler une déconnexion
    set({ isAuthenticated: false, user: null });
  },
}));
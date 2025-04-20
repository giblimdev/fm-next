"use client"; // Nécessaire si vous utilisez Next.js 13+ avec le dossier app

import { useState } from "react";

export default function TextToSpeechButton() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  let speech = null;

  // Vérifie si l'API Web Speech est disponible
  if (typeof window !== "undefined") {
    speech = window.speechSynthesis;
  }

  const handleSpeak = () => {
    if (!speech) return;

    if (isSpeaking) {
      speech.cancel();
      setIsSpeaking(false);
      return;
    }

    // Récupère tout le texte de la page (vous pouvez cibler un élément spécifique)
    const pageText = document.body.innerText;

    const utterance = new SpeechSynthesisUtterance(pageText);
    utterance.lang = "fr-FR"; // Définit la langue (français)

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    speech.speak(utterance);
    setIsSpeaking(true);
  };

  return (
    <button
      onClick={handleSpeak}
      className={`p-2 rounded-md ${
        isSpeaking ? "bg-red-500" : "bg-blue-500"
      } text-white`}
      aria-label={
        isSpeaking ? "Arrêter la lecture" : "Lire le texte à haute voix"
      }
    >
      {isSpeaking ? "⏹ Arrêter" : "▶ Lire"}
    </button>
  );
}

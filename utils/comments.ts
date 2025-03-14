// utils/comments.ts

export const fetchComments = async () => {
  try {
    const res = await fetch('/api/comments');
    if (!res.ok) throw new Error('Failed to fetch comments');
    const data = await res.json();
    return data; // Retourne les données des commentaires
  } catch (error) {
    console.error(error);
    return []; // Retourne un tableau vide en cas d'erreur
  }
};

export const addComment = async (newComment: string) => {
  try {
    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: newComment }),
    });
    if (!res.ok) throw new Error('Failed to add comment');
    return true; // Retourne true si l'ajout a réussi
  } catch (error) {
    console.error(error);
    return false; // Retourne false en cas d'erreur
  }
};

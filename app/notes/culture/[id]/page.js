import { notes } from "@/data/notes";
import { notFound } from "next/navigation";

export default async function CultureNotePage({ params }) {
  const { id } = await params;

  const note = notes.find(
    (note) =>
      note.id === Number(id) &&
      note.category === "culture"
  );

  if (!note) {
    notFound();
  }

  return (
    <main>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <p>Category: {note.category}</p>
    </main>
  );
}
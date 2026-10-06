import { notes } from "@/data/notes";

export default async function CultureNotePage({ params }) {
  const { id } = await params;

  const note = notes.find(
    (note) => note.id === Number(id)
  );

  if (!note) {
    return (
      <main>
        <h1>Note not found</h1>
      </main>
    );
  }

  return (
    <main>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <p>Category: {note.category}</p>
    </main>
  );
}
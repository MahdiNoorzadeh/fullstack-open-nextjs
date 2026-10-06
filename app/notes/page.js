import { notes } from "@/data/notes";

export default function NotesPage() {
  return (
    <main>
      <h1>Notes</h1>

      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
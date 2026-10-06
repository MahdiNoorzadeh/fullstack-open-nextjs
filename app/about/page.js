export default async function CultureNotePage({ params }) {
  const { id } = await params;

  return (
    <main>
      <h1>Culture Note {id}</h1>
      <p>
        This is a dynamic culture note.
      </p>
    </main>
  );
}
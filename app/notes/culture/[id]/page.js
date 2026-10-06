export default async function NotePage({ params }) {
  const { id } = await params;

  return (
    <main>
      <h1>Note for our culture team work {id}</h1>

      <p>
        This is a dynamic route example.
      </p>
    </main>
  );
}
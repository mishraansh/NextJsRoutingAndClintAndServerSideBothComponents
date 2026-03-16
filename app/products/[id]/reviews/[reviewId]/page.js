export default async function About({ params }) {
  const { id, reviewId } = await params;

  return (
    <div>page {id} {reviewId}</div>
  );
}
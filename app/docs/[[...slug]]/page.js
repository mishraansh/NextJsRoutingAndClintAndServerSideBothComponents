export default async function Page({ params }) {
  const { slug } = await params;

  return (
    
    <div>
      <h1> welcome wev page</h1>
      {slug}
      </div>
  );
}

// [[...slug]] esliye use kiya jata hai kyunki usl mai sirf docs kai aageai kush na likanai per error aata hai
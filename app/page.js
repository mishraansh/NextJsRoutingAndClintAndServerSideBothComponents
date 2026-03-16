// import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://api.github.com/users/aestheticsuraj234");
  const data = await res.json();
  return (
    <>
    <h1>{JSON.stringify(data)}</h1>
    </>
    
  );
}

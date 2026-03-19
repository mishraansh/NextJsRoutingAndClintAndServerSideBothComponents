// import Image from "next/image";
// this default backend  like node.js yahab node js ka code lika jata hai because server side commponent is default  yahan backend ka code likaha jata hai

export default async function Home() {
  const res = await fetch("https://api.github.com/users/aestheticsuraj234");
  const data = await res.json();
  return (
    <>
    <h1>{JSON.stringify(data)}</h1>
    </>
    
  );
}







// / In Next.js (App Router), a Server Component is a React component that runs on the server instead of the browser. The HTML is generated on the server and then sent to the client (browser).

// By default, all components inside the app folder are Server Components unless you add "use client".

// 1️⃣ Simple Definition

// Server Component = React component that executes on the server and sends rendered HTML to the browser.

// So:

// Runs on server

// Browser receives ready HTML

// No JavaScript sent for that component

// 2️⃣ Example of Server Component
// export default function HomePage() {
//   return (
//     <div>
//       <h1>Hello from Server Component</h1>
//     </div>
//   );
// }

// This is a Server Component because:

// No "use client"

// Located inside the app folder

// 3️⃣ Why Server Components are Useful
// ⚡ Faster Performance

// Less JavaScript is sent to the browser.

// 🔒 More Secure

// You can access database or API keys directly.

// Example:

// async function getUsers() {
//   const res = await fetch("https://api.example.com/users");
//   return res.json();
// }

// export default async function Page() {
//   const users = await getUsers();

//   return (
//     <div>
//       {users.map((user) => (
//         <p key={user.id}>{user.name}</p>
//       ))}
//     </div>
//   );
// }

// This fetch runs only on the server.

// 4️⃣ What You Cannot Use in Server Components

// Server Components cannot use browser features like:

// ❌ useState
// ❌ useEffect
// ❌ useRef
// ❌ Event handlers (onClick)

// Example (invalid):

// import { useState } from "react";

// export default function Page() {
//   const [count, setCount] = useState(0); // ❌ not allowed
// }
// 5️⃣ Client Component

// If you need interactivity (buttons, state, events), you must use a Client Component.

// Add this at the top:

// "use client";

// Example:

// "use client";

// import { useState } from "react";

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <button onClick={() => setCount(count + 1)}>
//       {count}
//     </button>
//   );
// }
// 6️⃣ Server vs Client Components
// Feature	Server Component	Client Component
// Runs on	Server	Browser
// Default in Next.js	✅ Yes	❌ No
// useState / useEffect	❌	✅
// Event handlers	❌	✅
// DB access	✅	❌

// ✅ Easy trick to remember

// No "use client" → Server Component

// With "use client" → Client Component

// If you want, I can also explain the most important interview question:

// “When should you use Server Component vs Client Component in Next.js?” (very important for React/Next.js developers).
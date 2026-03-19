export default async function Page({ params }) {
  const { id } = await params;

  return (
    <div>page {id}</div>
  );
}






// // import React from 'react'

// // const page = ({ params }) => {
// //   return (
// //     <div>page { params.id }</div>
// //   )
// // }

// // export default page
// // params is a Promise and must be unwrapped with await



// Next.js App Router me @ ka use Parallel Routes ke liye hota hai.
// Parallel Routes ka matlab hai ek hi layout me multiple pages ek saath render karna.

// 📌 Parallel Routes kya hote hain?

// Normal routing me:

// ➡️ ek route → ek page render hota hai

// Lekin Parallel Routes me:

// ➡️ ek layout me multiple routes ek saath render ho sakte hain.

// Example:

// Sidebar

// Main content

// Notifications panel

// Ye sab same time par alag routes se render ho sakte hain.

// 📂 Folder Structure Example
// app
//  ├ dashboard
//  │   ├ layout.js
//  │   ├ page.js
//  │
//  ├ @analytics
//  │   └ page.js
//  │
//  ├ @team
//  │   └ page.js

// Yaha:

// dashboard → main route

// @analytics → parallel slot

// @team → parallel slot

// 📌 Layout me use kaise hota hai

// layout.js

// export default function DashboardLayout({ children, analytics, team }) {
//   return (
//     <div>
//       <div>{children}</div>

//       <div style={{ display: "flex", gap: "20px" }}>
//         <div>{analytics}</div>
//         <div>{team}</div>
//       </div>
//     </div>
//   );
// }

// Yaha:

// children → main page

// analytics → @analytics

// team → @team

// 📊 Visual Layout
// -----------------------
// |      Dashboard      |
// -----------------------
// | Analytics |  Team   |
// -----------------------

// Sab parallel me render ho rahe hain.

// 📌 Real World Use Cases

// Parallel Routes mostly use hote hain:

// 1️⃣ Dashboard widgets
// 2️⃣ Sidebar + content area
// 3️⃣ Chat + contacts panel
// 4️⃣ Analytics dashboards
// 5️⃣ Admin panels

// ⚡ Important Rule

// @folderName ka naam layout props me aata hai.

// Example:

// @analytics

// Layout me:

// analytics
// 🚀 Short Interview Definition

// Parallel Routes in Next.js allow multiple routes to render simultaneously within the same layout using @ named slots.

// ✅ Agar chaho to mai 3 advanced Next.js routing concepts ek saath clear kar sakta hoon (jo sabko confuse karte hain):

// Route Groups ( )

// Parallel Routes @

// Intercepting Routes (.)

// Ek single diagram se sab clear ho jata hai.
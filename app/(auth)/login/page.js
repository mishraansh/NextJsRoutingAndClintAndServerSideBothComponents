import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page

// (_) lagakar jo folder banaye jatai unaka route nahin banata matlab unka route serch karnai per error dega  kyonki _ esai private banata hai toh next.js esai ignore karta hai name esh tarah rakhatai hai _components ,
// what is intercepting routes

// Intercepting Routes Next.js App Router ka ek advanced routing feature hai jisse aap current page ko change kiye bina kisi dusre route ka UI temporarily show kar sakte ho.

// Simple words me:
// ➡️ Ek route dusre route ko “intercept” karke uska UI overlay / modal ke form me dikha deta hai.

// Ye mostly modals, previews, side panels ke liye use hota hai.

// 📌 Real Example (Instagram Style)

// Socho aap posts list page par ho:

// /posts

// Agar aap kisi post par click karo:

// /posts/1

// Normally kya hota hai?
// ➡️ Pura page change ho jata hai.

// But Intercepting Routes me kya hota hai?

// Background me /posts page rehta hai

// Post detail modal ke form me open hoti hai

// Exactly Instagram photo preview jaisa.

// 📂 Folder Structure Example

// Next.js intercepting routes me special folders use karta hai.

// app
//  ├ posts
//  │   ├ page.js
//  │   ├ [id]
//  │   │   └ page.js
//  │
//  ├ @modal
//  │   └ (.)posts
//  │       └ [id]
//  │           └ page.js
// 📌 Special Syntax

// Next.js intercepting ke liye special folder naming use karta hai:

// Syntax	Meaning
// (.)	same level intercept
// (..)	one level up intercept
// (..)(..)	two levels up
// (...)	root intercept

// Example:

// (.)posts

// Matlab:
// ➡️ same level route ko intercept karo.

// ⚡ Simple Code Example
// Posts Page
// import Link from "next/link";

// export default function Posts() {
//   return (
//     <div>
//       <h1>Posts</h1>
//       <Link href="/posts/1">Open Post</Link>
//     </div>
//   );
// }
// Modal Intercept Route
// app/@modal/(.)posts/[id]/page.js
// export default function PostModal({ params }) {
//   return (
//     <div className="modal">
//       Post ID: {params.id}
//     </div>
//   );
// }
// 🎯 Use Cases

// Intercepting routes mostly use hote hain:

// 1️⃣ Image gallery preview modal
// 2️⃣ Login modal
// 3️⃣ Product quick view
// 4️⃣ Instagram photo preview
// 5️⃣ Cart popup

// 🚀 Difference
// Normal Route	Intercepting Route
// Full page change	Overlay / modal
// Background replace	Background same
// New navigation	UI intercept

// ✅ Short Definition (Interview Ready):

// Intercepting Routes in Next.js allow a route to load another route’s UI within the current layout, enabling features like modals and overlays without navigating away from the current page.

// If you want, I can also explain Parallel Routes + Intercepting Routes together (with a real project structure) — this is one of the most confusing but powerful Next.js concepts. 🚀
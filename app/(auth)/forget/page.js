import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page

// _components aisa route kab banaya  jata hai

// Next.js me _components ya _folder waise official routing feature nahi hai, balki ye developer convention hai. Iska use tab kiya jata hai jab aap folder ko organize karna chahte ho lekin usse route nahi banana chahte.

// 📌 _components folder kab banate hain?

// Jab aapke paas reusable UI components hote hain jo sirf us route ke andar use honge, tab unko _components folder me rakhte hain.

// Example:

// app
//  ├ products
//  │   ├ page.js
//  │   ├ _components
//  │   │   ├ ProductCard.js
//  │   │   ├ ProductList.js
//  │   │   └ Filter.js

// Yaha:

// /products → route banega

// _components → route nahi banega

// 📌 _ (underscore) kyun use karte hain?

// Underscore ka matlab hota hai:

// Ye folder sirf internal use ke liye hai, routing ke liye nahi.

// Isse project clean aur organized rehta hai.

// 📌 Import kaise karte hain
// import ProductCard from "./_components/ProductCard";
// 📌 Real Project Example
// app
//  ├ dashboard
//  │   ├ page.js
//  │   ├ _components
//  │   │   ├ Sidebar.js
//  │   │   ├ Header.js
//  │   │   └ StatsCard.js

// Dashboard page me:

// import Sidebar from "./_components/Sidebar";
// import Header from "./_components/Header";
// ⚠️ Important

// _components Next.js rule nahi hai, ye sirf naming convention hai.

// Next.js officially route ignore karta hai:

// () → route groups

// @ → parallel routes

// [...] → dynamic routes

// Lekin _ folder sirf developer organization ke liye hota hai.

// 🚀 Best Practice

// Large Next.js projects me aksar structure aisa hota hai:

// app
//  ├ blog
//  │   ├ page.js
//  │   ├ _components
//  │   │   ├ BlogCard.js
//  │   │   └ BlogList.js

// Isse feature-based architecture ban jata hai.

// ✅ Interview Answer (Short):

// _components folder is used to store reusable UI components related to a specific route without creating additional routes, helping keep the project structure organized.

// Agar chaho to mai Next.js App Router ka ek professional folder structure (jo big companies use karti hain) bhi dikha sakta hoon. Ye portfolio + job interviews ke liye bahut useful hota hai. 🚀
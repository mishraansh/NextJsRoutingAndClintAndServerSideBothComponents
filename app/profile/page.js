import React from 'react'

const Profile = () => {
  return (
    <div>Profile page</div>
  )
}

export default Profile




// kon si keys ek sath dabanai per saari winow ek sath aa jaaati aa phir unami sai jo window  choose karo wah khul jaati hai

// Aap jis shortcut ki baat kar rahe ho usse Windows me open applications switch karne ke liye use kiya jata hai.

// 🖥️ Shortcut Key

// ➡️ Alt + Tab

// Kaise use karein:

// Alt key press karke hold karein

// Phir Tab key press karein

// Screen par saari open windows ka preview aa jayega

// Tab dabate rahenge to window change hoti rahegi

// Jis window par rukna ho Alt chhod dein

// ✅ Us window par switch ho jayega.

// 📌 Dusra similar shortcut

// ➡️ Windows Key + Tab

// Isse Task View open hota hai jisme:

// Saari open windows

// Virtual desktops

// ek saath dikhte hain aur aap mouse se select kar sakte ho.

// ⚡ Quick Summary
// Shortcut	Kaam
// Alt + Tab	Open apps ke beech switch karna
// Win + Tab	Task View (sab windows preview)

// Agar chaho to mai 20 most useful Windows shortcut keys (developers ke liye) bhi bata sakta hoon jo coding karte time bahut kaam aate hain. 🚀

// (.) (..) eshka matlab kya intercepting routes mai

// Next.js Intercepting Routes me (.) aur (..) special folder syntax hote hain jo batate hain ki kis level ka route intercept karna hai.

// Simple words me:
// ➡️ Current route kis level ke route ko intercept karega (same level, parent level, etc.)

// 1️⃣ (.) → Same Level Intercept

// (.) ka matlab hai same level ka route intercept karna.

// Example structure:

// app
//  ├ feed
//  │   └ page.js
//  │
//  ├ photo
//  │   └ [id]
//  │       └ page.js
//  │
//  ├ @modal
//  │   └ (.)photo
//  │       └ [id]
//  │           └ page.js

// URL:

// /feed

// Agar user click kare:

// /photo/1

// To:

// /feed page background me rahega

// /photo/1 modal me open hoga

// Yaha (.) ka matlab hai same level route intercept karo.

// 2️⃣ (..) → One Level Up Intercept

// (..) ka matlab hai parent level route intercept karna.

// Example:

// app
//  ├ dashboard
//  │   ├ page.js
//  │   └ settings
//  │       └ page.js
//  │
//  ├ @modal
//  │   └ (..)settings
//  │       └ page.js

// Yaha:

// (..) → ek level upar jaake route intercept karo

// 3️⃣ (..)(..) → Two Levels Up

// Agar do level upar ka route intercept karna ho.

// Example:

// (..)(..)photo

// Matlab:

// ➡️ 2 folders upar ka route intercept karo

// 4️⃣ (...) → Root Level Intercept

// (...) ka matlab hai root route se intercept karna.

// Example:

// (...)login

// Matlab:

// ➡️ project ke root /login route ko intercept karo.

// 📊 Quick Table
// Syntax	Meaning
// (.)	same level route
// (..)	one level up
// (..)(..)	two levels up
// (...)	root level
// 🎯 Real Use Case

// Example: Instagram style image modal

// /feed → posts list

// /photo/1 → photo detail page

// intercept → modal preview

// ✅ Interview Ready Line

// (.) and (..) in Next.js intercepting routes define the relative level of the route to intercept, similar to how . and .. work in file paths.

// Agar chaho to mai Parallel Routes + Intercepting Routes ka ek real project structure (Instagram modal system) bhi dikha sakta hoon jo Next.js ka sabse powerful routing pattern hai. 🚀
"use client";
import { useState, useEffect } from "react";
// {then this is frontend like react example of client component}
import React from "react";

const Client = () => {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.github.com/users/aestheticsuraj234");
      const data = await res.json();
      setUserData(data);
    }
    fetchData()
  },[]);
  return (
    <div>
      <h2>client components counter</h2>
      <p> Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
      {JSON.stringify(userData)}
      
          </div>
  );
};

export default Client;

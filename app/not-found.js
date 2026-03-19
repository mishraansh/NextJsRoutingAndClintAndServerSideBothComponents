import React from "react";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image src="/not-found.svg" alt="Not-Found-Image" height={400} width={400} />
      <h1 className="text-4xl font-bold">404</h1>
      <p>Not Found Page</p>
    </div>
  );
};

export default NotFoundPage; 













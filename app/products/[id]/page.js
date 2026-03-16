export default async function Page({ params }) {
  const { id } = await params;

  return (
    <div>page {id}</div>
  );
}






// import React from 'react'

// const page = ({ params }) => {
//   return (
//     <div>page { params.id }</div>
//   )
// }

// export default page
// params is a Promise and must be unwrapped with await
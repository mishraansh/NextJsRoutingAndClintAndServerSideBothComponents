import Link from 'next/link'
import React from 'react'

const DashboardPage = () => {
  return (
    <div>
        <h1>Dashboard</h1>
        <Link href={"/profile"}>View profile</Link>
         {/* <Link href={"/dashboard/reports"}>View profile</Link> */}
    </div>
  )
}

export default DashboardPage
import Link from 'next/link'
import React from 'react'

const SectionPage = () => {
  return (
    <div>
        
        <h1>section</h1>
        <Link href={"/admin"}>Go to admin</Link>
        {/* <Link href={"/setting"}>Go to settings</Link> */}

    </div>
  )
}

export default SectionPage
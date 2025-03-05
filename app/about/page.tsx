import React from 'react'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1> 
      <Link href={"/dashboard"}>Dashboard</Link>
    </div>
  )
}

export default AboutPage

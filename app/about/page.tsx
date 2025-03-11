import React from 'react'
import Link from 'next/link'
import { title } from 'process'

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1> 
      <Link href={"/dashboard"}>Dashboard</Link>
    </div>
  )
}

export default AboutPage

export const  metadata = {
  title:"About Blog",
};

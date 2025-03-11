'use client'

import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

const DashboardPage = () => {
    const [name, setName] = useState("")
  return (
    <div>
      <h1>Dashboard</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}!</p>
      <Image 
      alt='example'
      src=""
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit:'cover'
      }}
      />
    </div>
  )
}

export default DashboardPage

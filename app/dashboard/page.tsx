'use client'

import React from 'react'
import { useState } from 'react'

const DashboardPage = () => {
    const [name, setName] = useState("")
  return (
    <div>
      <h1>Dashboard</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}!</p>
    </div>
  )
}

export default DashboardPage

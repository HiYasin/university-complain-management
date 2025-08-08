import React from 'react'
import { Link } from 'react-router'

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full h-screen flex-col">
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/auth" className="text-blue-500">Auth Page</Link></li>
          <li><Link to="/" className="text-blue-500">Home</Link></li>
          <li><Link to="/dashboard" className="text-blue-500">Dashboard</Link></li>
        </ul>
      </nav>
      <h1 className='text-5xl'>This is homepage</h1>
    </div>
  )
}

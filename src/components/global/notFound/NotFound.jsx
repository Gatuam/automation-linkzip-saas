import { AlertTriangle, Home } from 'lucide-react'
import React from 'react'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="text-center space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <AlertTriangle className="w-16 h-16 text-yellow-500 dark:text-yellow-400" />
          <h1 className="text-5xl font-extrabold">404</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Oops! Page not found.</p>
          <p className="text-md text-gray-500 dark:text-gray-400 max-w-md">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFound
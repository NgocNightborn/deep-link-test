// This file creates a new page at the URL "/dashboard".
// Next.js uses the folder name to define the route.
"use client"

import { useEffect } from "react";

// We define the page component as a standard React functional component.
export default function DashboardPage() {
  useEffect(() => {

  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to the Dashboard!
        </h1>
        <p className="text-lg text-gray-600">
          This is a new page created inside the `app` directory.
        </p>
      </div>
    </main>
  );
}

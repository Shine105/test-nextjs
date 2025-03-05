"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.zippopotam.us/us/33162/002")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col h-auto">
      <header className="bg-gray-800 text-white p-4 text-center">
        My pesonal Blog
      </header>

      <main className="flex-grow flex items-center justify-center">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <div className="p-4 border rounded shadow-md">
            <h1 className="text-lg font-bold">{data.title}</h1>
            <p>{data.body}</p>
          </div>
        )}
      </main>

      <div className="bg-gray-800 text-white p-4 text-center">
        Lower Static Container
      </div>
    </div>
  );
}

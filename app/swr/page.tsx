"use client"; 

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data: contents, isLoading, error } = useSWR(
    "https://catfact.ninja/fact.23",
    fetcher,
    { revalidateOnFocus: false, revalidateOnReconnect: false }
  );

  return (
    <div className="flex flex-col h-screen">
    
      <header className="bg-gray-800 text-white p-4 text-center">
        My Personal Blog
      </header>

    
      <main className="flex-grow flex items-center justify-center">
        {error ? (
          <p className="text-red-500">Failed to fetch the API.</p>
        ) : isLoading ? (
          <p>Loading ...</p>
        ) : (
          <div className="p-4 border rounded shadow-md">
            <h1 className="text-lg font-bold"></h1>
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        Lower Static Container
      </footer>
    </div>
  );
}

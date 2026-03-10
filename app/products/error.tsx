"use client";

import { ErrorProps } from "@/lib/types";

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="p-8">
      <h2 className="text-red-500 text-xl font-bold">Something went wrong</h2>
      <p className="text-gray-600 mt-2">{error.message}</p>
      <button
        onClick={reset}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Try again
      </button>
    </main>
  );
}
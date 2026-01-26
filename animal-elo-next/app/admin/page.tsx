"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Link from "next/link";
import { useState } from "react";

export default function AdminPage() {
  const animals = useQuery(api.animals.getAnimals);
  const initializeAnimals = useMutation(api.animals.initializeAnimals);
  const resetScores = useMutation(api.animals.resetScores);
  const [message, setMessage] = useState<string>("");

  const handleInitialize = async () => {
    try {
      const result = await initializeAnimals();
      setMessage(result.message);
    } catch (error) {
      setMessage(`Error: ${error}`);
    }
  };

  const handleResetScores = async () => {
    try {
      const result = await resetScores();
      setMessage(result.message);
    } catch (error) {
      setMessage(`Error: ${error}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🔧 Admin Panel
          </h1>
          <Link
            href="/"
            className="inline-block text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium"
          >
            ← Back to Leaderboard
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Database Status
          </h2>
          <div className="space-y-2">
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Animals in database:</span>{" "}
              {animals ? animals.length : "Loading..."}
            </p>
            {animals && animals.length === 0 && (
              <p className="text-red-600 dark:text-red-400 font-semibold">
                ⚠️ No animals found! Please initialize the database.
              </p>
            )}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Actions
          </h2>
          <div className="space-y-4">
            <div>
              <button
                onClick={handleInitialize}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors"
              >
                Initialize Animals (100 animals)
              </button>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Populates the database with 100 animals, each with a score of 0.
                Only works if the database is empty.
              </p>
            </div>

            <div>
              <button
                onClick={handleResetScores}
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors"
              >
                Reset All Scores
              </button>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Resets all animal scores back to 0. Use this to start fresh.
              </p>
            </div>
          </div>
        </div>

        {message && (
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-blue-800 dark:text-blue-200">{message}</p>
          </div>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mt-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Instructions
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              If this is your first time, click "Initialize Animals" to populate
              the database.
            </li>
            <li>
              Go to the{" "}
              <Link href="/" className="text-indigo-600 hover:underline">
                Leaderboard
              </Link>{" "}
              to see all animals.
            </li>
            <li>
              Click "Start Ranking" to begin voting on animals.
            </li>
            <li>
              Use "Reset All Scores" if you want to start the rankings over.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}


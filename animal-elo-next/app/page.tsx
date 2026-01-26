"use client";

import Link from "next/link";
import { getLeaderboard } from "@/lib/animals";
import { useState, useEffect } from "react";

export default function Home() {
  const [leaderboard, setLeaderboard] = useState(getLeaderboard());

  // Refresh leaderboard when page gains focus (after returning from rank page)
  useEffect(() => {
    const handleFocus = () => {
      setLeaderboard(getLeaderboard());
    };

    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            🏆 Animal Elo Leaderboard
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Vote for your favorite animals and see how they rank!
          </p>
          <Link
            href="/rank"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-colors text-lg"
          >
            Start Ranking 🎯
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
          <div className="bg-indigo-600 text-white px-6 py-4">
            <div className="grid grid-cols-12 gap-4 font-semibold">
              <div className="col-span-2 text-center">Rank</div>
              <div className="col-span-7">Animal</div>
              <div className="col-span-3 text-center">Score</div>
            </div>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-gray-700 max-h-[600px] overflow-y-auto">
            {leaderboard.map((animal, index) => (
              <div
                key={animal.id}
                className={`px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                  index < 3 ? "bg-yellow-50 dark:bg-yellow-900/20" : ""
                }`}
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2 text-center">
                    <span className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                      {index === 0 && "🥇"}
                      {index === 1 && "🥈"}
                      {index === 2 && "🥉"}
                      {index > 2 && `#${index + 1}`}
                    </span>
                  </div>
                  <div className="col-span-7 flex items-center gap-3">
                    <span className="text-4xl">{animal.emoji}</span>
                    <span className="text-lg font-medium text-gray-900 dark:text-white">
                      {animal.name}
                    </span>
                  </div>
                  <div className="col-span-3 text-center">
                    <span
                      className={`text-xl font-bold ${
                        animal.score > 0
                          ? "text-green-600 dark:text-green-400"
                          : animal.score < 0
                          ? "text-red-600 dark:text-red-400"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {animal.score > 0 ? "+" : ""}
                      {animal.score}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-gray-600 dark:text-gray-400">
          Total Animals: {leaderboard.length}
        </div>
      </div>
    </div>
  );
}

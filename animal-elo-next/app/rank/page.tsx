"use client";

import { useState } from "react";
import Link from "next/link";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";

interface Animal {
  _id: Id<"animals">;
  name: string;
  emoji: string;
  score: number;
}

export default function RankPage() {
  const randomPair = useQuery(api.animals.getRandomPair);
  const updateScoreMutation = useMutation(api.animals.updateScore);

  const [votesCount, setVotesCount] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);
  const [winner, setWinner] = useState<Animal | null>(null);
  const [isVoting, setIsVoting] = useState(false);

  const handleVote = async (winnerId: Id<"animals">, loserId: Id<"animals">) => {
    if (isVoting || !randomPair) return;

    setIsVoting(true);

    // Show animation
    const winningAnimal = randomPair.find(a => a._id === winnerId);
    setWinner(winningAnimal || null);
    setShowAnimation(true);

    // Update scores in the background
    updateScoreMutation({ winnerId, loserId });

    // Get new pair after animation
    setTimeout(() => {
      setVotesCount(votesCount + 1);
      setShowAnimation(false);
      setWinner(null);
      setIsVoting(false);
    }, 800);
  };

  if (!randomPair) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔄</div>
          <p className="text-xl text-gray-600 dark:text-gray-300">Loading animals...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-block text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium mb-4"
          >
            ← Back to Leaderboard
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Which animal is better?
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Votes cast: <span className="font-semibold">{votesCount}</span>
          </p>
        </div>

        {showAnimation && winner && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 animate-fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl animate-bounce">
              <div className="text-8xl mb-4 text-center">{winner.emoji}</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                {winner.name} wins! 🎉
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {randomPair.map((animal, index) => (
            <button
              key={animal._id}
              onClick={() => handleVote(animal._id, randomPair[1 - index]._id)}
              disabled={showAnimation || isVoting}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="text-9xl mb-6 text-center animate-float">
                  {animal.emoji}
                </div>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
                  {animal.name}
                </h2>

                <div className="text-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Current Score:
                  </span>
                  <div
                    className={`text-2xl font-bold ${
                      animal.score > 0
                        ? "text-green-600 dark:text-green-400"
                        : animal.score < 0
                        ? "text-red-600 dark:text-red-400"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {animal.score > 0 ? "+" : ""}
                    {animal.score}
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <span className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold group-hover:bg-indigo-700 transition-colors">
                    Vote for {animal.name}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Click on an animal to vote for it!
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}


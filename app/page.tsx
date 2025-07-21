"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  Users,
  TrendingUp,
  Camera,
  Zap,
  Crown,
  Target,
} from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";

// Dummy data for runners
const dummyRunners = [
  {
    id: 1,
    name: "Troy Legacy",
    position: 1,
    score: 190,
    avatar: "🏃‍♂️",
    streak: 4,
  },
  {
    id: 2,
    name: "Daniel Astrav",
    position: 2,
    score: 166,
    avatar: "🏃‍♀️",
    streak: 0,
  },
  {
    id: 3,
    name: "Denis Hacker",
    position: 3,
    score: 164,
    avatar: "🏃‍♂️",
    streak: 2,
  },
  {
    id: 4,
    name: "Caleb",
    position: 4,
    score: 153,
    avatar: "🏃‍♀️",
    streak: 0,
  },
  {
    id: 5,
    name: "Justine",
    position: 5,
    score: 130,
    avatar: "🏃‍♀️",
    streak: 2,
  },
  {
    id: 6,
    name: "Mercy",
    position: 7,
    score: 75,
    avatar: "🏃‍♂️",
    streak: 0,
  },
];

const stats = [
  { label: "Total Runners", value: "16", icon: Users, color: "text-blue-500" },
  {
    label: "Weeks Running",
    value: "3",
    icon: TrendingUp,
    color: "text-green-500",
  },
  { label: "Active Bets", value: "4", icon: Target, color: "text-purple-500" },
  {
    label: "Moments Captured",
    value: "47",
    icon: Camera,
    color: "text-orange-500",
  },
];

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const topRunners = dummyRunners.slice(0, 3);
  const bottomRunners = dummyRunners.slice(-3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 px-2 md:px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium mb-6"
            >
              <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
              Week 5 Results Are In!
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                LOWER LEAGUE IN SHOCK!
              </span>
              <br />
            </h1>

            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Last Wednesday, the post-5PM air was charged with anticipation, sweat, and the occasional sound of heavy breathing — and not for the reasons you might think. What started as a routine jog evolved into an action-packed race.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link href="/leaderboard">
                <Button
                  size="lg"
                  className="cursor-pointer w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg"
                >
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  View Leaderboard
                </Button>
              </Link>
              <Link href="/gallery">
                <Button
                  size="lg"
                  variant="outline"
                  className="cursor-pointer w-full sm:w-auto border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-6 sm:px-8 py-3 text-base sm:text-lg bg-transparent"
                >
                  <Camera className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  View Gallery
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-2 pt-4 md:pt-8 relative px-2 md:px-4">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
                  <CardContent className="p-6">
                    <stat.icon
                      className={`w-8 h-8 mx-auto mb-3 ${stat.color}`}
                    />
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Top Performers */}
      <section className="py-2 px-2 md:px-4">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              🏆 This Week&#39;s Champions
            </h2>
            <p className="text-gray-300 text-lg">
              Leading the pack with outstanding performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-16">
            {topRunners.map((runner, index) => (
              <motion.div
                key={runner.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              >
                <Card
                  className={`bg-gradient-to-br ${
                    index === 0
                      ? "from-yellow-500/20 to-orange-500/20 border-yellow-500/30"
                      : index === 1
                      ? "from-gray-400/20 to-gray-600/20 border-gray-400/30"
                      : "from-amber-600/20 to-amber-800/20 border-amber-600/30"
                  } backdrop-blur-sm relative overflow-hidden`}
                >
                  <CardContent className="p-6 text-center">
                    {index === 0 && (
                      <Crown className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                    )}
                    <div className="text-4xl mb-3">{runner.avatar}</div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {runner.name}
                    </h3>
                    <Badge
                      className={`${
                        index === 0
                          ? "bg-yellow-500"
                          : index === 1
                          ? "bg-gray-400"
                          : "bg-amber-600"
                      } text-white mb-3`}
                    >
                      #{runner.position}
                    </Badge>
                    <div className="text-2xl font-bold text-white mb-2">
                      {runner.score} pts
                    </div>
                    <div className="text-sm text-gray-300">
                      {runner.streak > 0
                        ? `🔥 ${runner.streak} week streak`
                        : "Building momentum"}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Performers - Motivation Section */}
      <section className="py-2 px-2 md:px-4">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              💪 Rising Stars
            </h2>
            <p className="text-gray-300 text-lg">
              Every champion started from the bottom - your time is coming!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-16">
            {bottomRunners.map((runner, index) => (
              <motion.div
                key={runner.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
              >
                <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{runner.avatar}</div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {runner.name}
                    </h3>
                    <Badge
                      variant="outline"
                      className="border-purple-400 text-purple-400 mb-3"
                    >
                      #{runner.position}
                    </Badge>
                    <div className="text-2xl font-bold text-white mb-2">
                      {runner.score} pts
                    </div>
                    <div className="text-sm text-gray-300">
                      Ready to climb! 🚀
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-2 md:pt-4 md:pb-8 relative px-2 md:px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30" />
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join the Movement?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Every Wednesday at 5 PM, we lace up and chase greatness. Will you
              be the next champion?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link href="/leaderboard">
                <Button
                  size="lg"
                  className="cursor-pointer w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                >
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Check Full Rankings
                </Button>
              </Link>
              <Link href="/gallery">
                <Button
                  size="lg"
                  variant="outline"
                  className="cursor-pointer w-full sm:w-auto border-white/30 text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent"
                >
                  <Camera className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  View Moments
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

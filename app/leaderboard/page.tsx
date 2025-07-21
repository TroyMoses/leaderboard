"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Trophy,
  TrendingUp,
  TrendingDown,
  Minus,
  Crown,
  Medal,
  Award,
} from "lucide-react";
import { Navigation } from "@/components/navigation";

// Extended dummy data for all runners
const allRunners = [
  {
    id: 1,
    name: "Troy Legacy",
    position: 1,
    score: 190,
    avatar: "🏃‍♂️",
    streak: 4,
    lastWeekPosition: 1,
    totalRuns: 4,
  },
  {
    id: 2,
    name: "Daniel Astrav",
    position: 2,
    score: 166,
    avatar: "🏃‍♀️",
    streak: 0,
    lastWeekPosition: 4,
    totalRuns: 3,
  },
  {
    id: 3,
    name: "Denis Hacker",
    position: 3,
    score: 164,
    avatar: "🏃‍♂️",
    streak: 2,
    lastWeekPosition: 3,
    totalRuns: 3,
  },
  {
    id: 4,
    name: "Caleb",
    position: 4,
    score: 153,
    avatar: "🏃‍♀️",
    streak: 0,
    lastWeekPosition: 5,
    totalRuns: 3,
  },
  {
    id: 5,
    name: "Justine",
    position: 5,
    score: 130,
    avatar: "🏃‍♀️",
    streak: 2,
    lastWeekPosition: 7,
    totalRuns: 3,
  },
  {
    id: 6,
    name: "Daniel Magero",
    position: 6,
    score: 88,
    avatar: "🏃‍♂️",
    streak: 3,
    lastWeekPosition: 2,
    totalRuns: 3,
  },
  {
    id: 7,
    name: "Mercy",
    position: 7,
    score: 75,
    avatar: "🏃‍♂️",
    streak: 0,
    lastWeekPosition: 0,
    totalRuns: 1,
  },
  {
    id: 8,
    name: "Shahid",
    position: 8,
    score: 0,
    avatar: "🏃‍♀️",
    streak: 0,
    lastWeekPosition: 0,
    totalRuns: 0,
  },
  {
    id: 9,
    name: "Iqra",
    position: 9,
    score: 0,
    avatar: "🏃‍♀️",
    streak: 0,
    lastWeekPosition: 0,
    totalRuns: 0,
  },
  {
    id: 10,
    name: "Nina",
    position: 10,
    score: 0,
    avatar: "🏃‍♀️",
    streak: 0,
    lastWeekPosition: 0,
    totalRuns: 0,
  },
  {
    id: 11,
    name: "Mercy",
    position: 11,
    score: 0,
    avatar: "🏃‍♀️",
    streak: 0,
    lastWeekPosition: 0,
    totalRuns: 0,
  },
  {
    id: 12,
    name: "Hannah",
    position: 12,
    score: 0,
    avatar: "🏃‍♀️",
    streak: 0,
    lastWeekPosition: 0,
    totalRuns: 0,
  },
];

export default function LeaderboardPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const getPositionChange = (current: number, last: number) => {
    if (current < last) return "up";
    if (current > last) return "down";
    return "same";
  };

  const getPositionIcon = (position: number) => {
    if (position === 1) return <Crown className="w-5 h-5 text-yellow-500" />;
    if (position === 2) return <Medal className="w-5 h-5 text-gray-400" />;
    if (position === 3) return <Award className="w-5 h-5 text-amber-600" />;
    return null;
  };

  const getCardGradient = (position: number) => {
    if (position === 1)
      return "from-yellow-500/20 to-orange-500/20 border-yellow-500/30";
    if (position === 2)
      return "from-gray-400/20 to-gray-600/20 border-gray-400/30";
    if (position === 3)
      return "from-amber-600/20 to-amber-800/20 border-amber-600/30";
    if (position <= 8)
      return "from-green-500/20 to-emerald-500/20 border-green-500/30";
    if (position <= 12)
      return "from-blue-500/20 to-cyan-500/20 border-blue-500/30";
    return "from-purple-500/20 to-pink-500/20 border-purple-500/30";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />

      <div className="pt-20 pb-16 px-2 md:px-4">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-4 mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              🏆 Weekly Leaderboard
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 px-4">
              Week 12 - Updated every Wednesday
            </p>
            <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 sm:px-4 py-2 text-xs sm:text-sm">
              Next Update: Wednesday 6:00 PM
            </Badge>
          </motion.div>

          {/* Top 3 Podium */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12"
          >
            {allRunners.slice(0, 3).map((runner, index) => (
              <Card
                key={runner.id}
                className={`bg-gradient-to-br ${getCardGradient(
                  runner.position
                )} backdrop-blur-sm relative overflow-hidden`}
              >
                <CardContent className="p-6 text-center">
                  <div className="absolute top-4 right-4">
                    {getPositionIcon(runner.position)}
                  </div>
                  <div className="text-5xl mb-4">{runner.avatar}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {runner.name}
                  </h3>
                  <Badge
                    className={`${
                      index === 0
                        ? "bg-yellow-500"
                        : index === 1
                        ? "bg-gray-400"
                        : "bg-amber-600"
                    } text-white mb-4 text-lg px-3 py-1`}
                  >
                    #{runner.position}
                  </Badge>
                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-white">
                      {runner.score} pts
                    </div>
                    <Progress
                      value={(runner.score / 100) * 100}
                      className="h-3"
                    />
                    <div className="flex justify-between text-sm text-gray-300">
                      <span>Runs: {runner.totalRuns}</span>
                      <span>
                        {runner.streak > 0 ? `🔥 ${runner.streak}` : "💪"}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Full Leaderboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Trophy className="w-6 h-6" />
                  Complete Rankings
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-2">
                  {allRunners.map((runner, index) => {
                    const change = getPositionChange(
                      runner.position,
                      runner.lastWeekPosition
                    );
                    return (
                      <motion.div
                        key={runner.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.6 + index * 0.05,
                          duration: 0.4,
                        }}
                        className={`p-3 sm:p-4 rounded-lg bg-gradient-to-r ${getCardGradient(
                          runner.position
                        )} border-l-4 ${
                          runner.position <= 3
                            ? "border-yellow-500"
                            : runner.position <= 8
                            ? "border-green-500"
                            : runner.position <= 12
                            ? "border-blue-500"
                            : "border-purple-500"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
                            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                              {getPositionIcon(runner.position)}
                              <span className="text-lg sm:text-2xl font-bold text-white">
                                #{runner.position}
                              </span>
                            </div>
                            <div className="text-2xl sm:text-3xl flex-shrink-0">
                              {runner.avatar}
                            </div>
                            <div className="min-w-0 flex-1">
                              <h3 className="text-sm sm:text-lg font-semibold text-white truncate">
                                {runner.name}
                              </h3>
                              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                                <span>{runner.totalRuns} runs</span>
                                {runner.streak > 0 && (
                                  <span className="text-orange-400">
                                    🔥 {runner.streak}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 sm:gap-6 flex-shrink-0">
                            <div className="text-right">
                              <div className="text-lg sm:text-2xl font-bold text-white">
                                {runner.score}
                              </div>
                              <div className="text-xs sm:text-sm text-gray-300">
                                points
                              </div>
                            </div>

                            <div className="w-16 sm:w-32 hidden sm:block">
                              <Progress
                                value={(runner.score / 100) * 100}
                                className="h-2"
                              />
                            </div>

                            <div className="flex items-center gap-1 flex-shrink-0">
                              {change === "up" && (
                                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                              )}
                              {change === "down" && (
                                <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
                              )}
                              {change === "same" && (
                                <Minus className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                              )}
                              <span className="text-xs sm:text-sm text-gray-300 w-4 sm:w-8">
                                {Math.abs(
                                  runner.position - runner.lastWeekPosition
                                ) || "-"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Admin Update Button */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button className="cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3">
              Update Positions (Admin Only)
            </Button>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}

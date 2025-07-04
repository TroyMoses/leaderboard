"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Handshake,
  DollarSign,
  Trophy,
  Users,
  Plus,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";
import { Navigation } from "@/components/navigation";

// Dummy data for existing agreements
const existingAgreements = [
  {
    id: 1,
    challenger: "Iqra Abdi",
    challenged: "Daniel Astrav",
    bet: "UGX 50,000",
    condition: "First to finish the race",
    status: "active",
    createdAt: "2025-07-03",
    deadline: "2025-07-09",
  },
  {
    id: 2,
    challenger: "Caleb",
    challenged: "Daniel Astrav",
    bet: "UGX 10,000",
    condition: "First to reach the finishing line",
    status: "completed",
    winner: "Daniel Astrav",
    createdAt: "2025-07-30",
    completedAt: "2025-07-02",
  },
  {
    id: 3,
    challenger: "Denis Hacker",
    challenged: "Mercy & Nina",
    bet: "Buy breakfast for a week",
    condition: "Participate and finish the next race",
    status: "pending",
    createdAt: "2025-07-03",
    deadline: "2025-07-09",
  },
];

const runners = [
  "Troy Legacy",
  "Daniel Magero",
  "Denis Hacker",
  "Daniel Astrav",
  "Brennan Baingana",
  "Caleb",
  "Justine",
  "Shahid",
  "Iqra",
  "Mercy",
  "Nina",
  "Hannah",
];

export default function AgreementsPage() {
  const [mounted, setMounted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    challenger: "",
    challenged: "",
    betAmount: "",
    betType: "money",
    condition: "",
    deadline: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would save to localStorage or send to backend
    console.log("New agreement:", formData);
    setShowForm(false);
    setFormData({
      challenger: "",
      challenged: "",
      betAmount: "",
      betType: "money",
      condition: "",
      deadline: "",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "completed":
        return "bg-blue-500";
      case "pending":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="w-4 h-4" />;
      case "completed":
        return <Trophy className="w-4 h-4" />;
      case "pending":
        return <Clock className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />

      <div className="pt-20 pb-16 px-2 md:px-4">
        <div className="container mx-auto px-2 md:px-4 max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-4 mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              🤝 Runner Agreements
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 px-4">
              Challenge your teammates and make it interesting!
            </p>
            <Button
              onClick={() => setShowForm(!showForm)}
              className="cursor-pointer w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3"
            >
              <Plus className="w-5 h-5 mr-2" />
              Create New Agreement
            </Button>
          </motion.div>

          {/* New Agreement Form */}
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-2">
                    <Handshake className="w-6 h-6" />
                    Create New Agreement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="challenger" className="text-white">
                          Challenger
                        </Label>
                        <Select
                          value={formData.challenger}
                          onValueChange={(value) =>
                            setFormData({ ...formData, challenger: value })
                          }
                        >
                          <SelectTrigger className="bg-white/10 border-white/20 text-white cursor-pointer">
                            <SelectValue placeholder="Select challenger" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-slate-700">
                            {runners.map((runner) => (
                              <SelectItem
                                key={runner}
                                value={runner}
                                className="text-white hover:bg-slate-700 focus:bg-slate-700"
                              >
                                {runner}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="challenged" className="text-white">
                          Challenged
                        </Label>
                        <Select
                          value={formData.challenged}
                          onValueChange={(value) =>
                            setFormData({ ...formData, challenged: value })
                          }
                        >
                          <SelectTrigger className="bg-white/10 border-white/20 text-white cursor-pointer">
                            <SelectValue placeholder="Select challenged" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-slate-700">
                            {runners
                              .filter((r) => r !== formData.challenger)
                              .map((runner) => (
                                <SelectItem
                                  key={runner}
                                  value={runner}
                                  className="text-white hover:bg-slate-700 focus:bg-slate-700"
                                >
                                  {runner}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="betType" className="text-white">
                          Bet Type
                        </Label>
                        <Select
                          value={formData.betType}
                          onValueChange={(value) =>
                            setFormData({ ...formData, betType: value })
                          }
                        >
                          <SelectTrigger className="bg-white/10 border-white/20 text-white cursor-pointer">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-slate-700">
                            <SelectItem
                              value="money"
                              className="text-white hover:bg-slate-700 focus:bg-slate-700"
                            >
                              Money
                            </SelectItem>
                            <SelectItem
                              value="task"
                              className="text-white hover:bg-slate-700 focus:bg-slate-700"
                            >
                              Task/Favor
                            </SelectItem>
                            <SelectItem
                              value="treat"
                              className="text-white hover:bg-slate-700 focus:bg-slate-700"
                            >
                              Buy Treat
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="betAmount" className="text-white">
                          {formData.betType === "money"
                            ? "Amount (UGX)"
                            : "Description"}
                        </Label>
                        <Input
                          id="betAmount"
                          value={formData.betAmount}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              betAmount: e.target.value,
                            })
                          }
                          placeholder={
                            formData.betType === "money"
                              ? "20"
                              : "Buy coffee for a week"
                          }
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="condition" className="text-white">
                        Winning Condition
                      </Label>
                      <Textarea
                        id="condition"
                        value={formData.condition}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            condition: e.target.value,
                          })
                        }
                        placeholder="e.g., First to reach top 5 for 2 consecutive weeks"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="deadline" className="text-white">
                        Deadline
                      </Label>
                      <Input
                        id="deadline"
                        type="date"
                        value={formData.deadline}
                        onChange={(e) =>
                          setFormData({ ...formData, deadline: e.target.value })
                        }
                        className="bg-white/10 border-white/20 text-white cursor-pointer"
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white cursor-pointer"
                      >
                        <Handshake className="w-4 h-4 mr-2" />
                        Create Agreement
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowForm(false)}
                        className="border-white/30 text-white hover:bg-white/10 cursor-pointer"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Existing Agreements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="container mx-auto px-2 md:px-4 max-w-7xl"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
              <Users className="w-8 h-8" />
              Current Agreements
            </h2>

            <div className="grid gap-6">
              {existingAgreements.map((agreement, index) => (
                <motion.div
                  key={agreement.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Badge
                            className={`${getStatusColor(
                              agreement.status
                            )} text-white flex items-center gap-1`}
                          >
                            {getStatusIcon(agreement.status)}
                            {agreement.status.toUpperCase()}
                          </Badge>
                          {agreement.status === "completed" &&
                            agreement.winner && (
                              <Badge className="bg-yellow-500 text-white">
                                <Trophy className="w-3 h-3 mr-1" />
                                Winner: {agreement.winner}
                              </Badge>
                            )}
                        </div>
                        <div className="text-right text-sm text-gray-300">
                          Created:{" "}
                          {new Date(agreement.createdAt).toLocaleDateString()}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                            {agreement.challenger} vs {agreement.challenged}
                          </h3>
                          <div className="space-y-2 text-gray-300">
                            <div className="flex items-center gap-2">
                              <DollarSign className="w-4 h-4 flex-shrink-0" />
                              <span className="break-words">
                                Stake: {agreement.bet}
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Trophy className="w-4 h-4 mt-1 flex-shrink-0" />
                              <span className="break-words">
                                {agreement.condition}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col justify-between">
                          {agreement.deadline && (
                            <div className="text-sm text-gray-300 mb-2">
                              Deadline:{" "}
                              {new Date(
                                agreement.deadline
                              ).toLocaleDateString()}
                            </div>
                          )}
                          {agreement.status === "active" && (
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                className="bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                              >
                                Mark Complete
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white bg-transparent cursor-pointer"
                              >
                                Cancel
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Camera,
  Heart,
  MessageCircle,
  Share,
  MapPin,
  Play,
  Video,
  ImageIcon,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import Image from "next/image";

// Types for gallery and video moments
type GalleryMoment = {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  location: string;
  likes: number;
  comments: number;
  tags: string[];
  type: "photo";
};

type VideoMoment = {
  id: number;
  video: string;
  thumbnail: string;
  title: string;
  description: string;
  date: string;
  location: string;
  duration: string;
  likes: number;
  comments: number;
  tags: string[];
  type: "video";
};

// Dummy data for gallery moments (photos)
const galleryMoments: GalleryMoment[] = [
  {
    id: 1,
    image: "/caleb.jpg",
    title: "Challenger Loses Bet to Astrav",
    description: "Caleb loses a bet to Astrav after a close race!",
    date: "2025-07-02",
    location: "Rashida Towers, Mabua Road",
    likes: 30,
    comments: 10,
    tags: ["loss", "bet", "week3"],
    type: "photo",
  },
  {
    id: 2,
    image: "/brennan2.png",
    title: "Rising Star Debut Run",
    description: "Brennan finishes 5th on her first appearance!",
    date: "2025-07-02",
    location: "Rashida Towers Entrance Gate",
    likes: 23,
    comments: 12,
    tags: ["teamwork", "motivation", "squad"],
    type: "photo",
  },
  {
    id: 3,
    image: "/denis2.png",
    title: "Finishing Drama",
    description: "Denis and Astrav in an epic sprint to the finish line!",
    date: "2025-07-02",
    location: "Finish Line",
    likes: 31,
    comments: 18,
    tags: ["dramatic", "sprint", "competition"],
    type: "photo",
  },
];

// Dummy data for video moments
const videoMoments = [
  {
    id: 7,
    video: "/videos/teamtalk_ele.mp4",
    thumbnail: "/thumbnails/elevator_th.jpg",
    title: "A brief team talk, waiting for the elevator",
    description:
      "While waiting for the elevator to the ground floor, the team had a brief talk about the race. ",
    date: "2025-07-02",
    location: "5th Floor Corridor",
    duration: "0:45",
    likes: 67,
    comments: 23,
    tags: ["team", "warmup", "routine", "preparation"],
    type: "video",
  },
  {
    id: 8,
    video: "/videos/warmup.mp4",
    thumbnail: "/thumbnails/warmup_th.jpg",
    title: "Team Warm-up Routine",
    description: "Our signature pre-run warm-up that gets everyone pumped!",
    date: "2024-07-02",
    location: "Starting Area",
    duration: "1:20",
    likes: 34,
    comments: 11,
    tags: ["warmup", "routine", "team", "preparation"],
    type: "video",
  },
  {
    id: 9,
    video: "/videos/caleb_bet.mp4",
    thumbnail: "/caleb.jpg",
    title: "A bet placed by Caleb",
    description: "Caleb bets on winning Astrav in the next race!",
    date: "2024-01-20",
    location: "6th Floor Lounge",
    duration: "2:15",
    likes: 89,
    comments: 31,
    tags: ["bet", "money", "competition", "challenge"],
    type: "video",
  },
];

const allMoments = [...galleryMoments, ...videoMoments].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default function GalleryPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const getFilteredMoments = () => {
    switch (activeTab) {
      case "photos":
        return galleryMoments;
      case "videos":
        return videoMoments;
      default:
        return allMoments;
    }
  };

  const filteredMoments = getFilteredMoments();

  const totalStats = {
    photos: galleryMoments.length,
    videos: videoMoments.length,
    totalLikes: allMoments.reduce((sum, moment) => sum + moment.likes, 0),
    totalComments: allMoments.reduce((sum, moment) => sum + moment.comments, 0),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 mx-auto max-w-7xl md:max-w-full">
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
              📸 Run Moments
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 px-4">
              Capturing the spirit, sweat, and victories of IntLeaderBoard 25
            </p>
            {/* <Button className="cursor-pointer w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3">
              <Upload className="w-5 h-5 mr-2" />
              Upload New Moment
            </Button> */}
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12"
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-4">
                <ImageIcon className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                <div className="text-2xl font-bold text-white">
                  {totalStats.photos}
                </div>
                <div className="text-sm text-gray-300">Photos</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-4">
                <Video className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                <div className="text-2xl font-bold text-white">
                  {totalStats.videos}
                </div>
                <div className="text-sm text-gray-300">Videos</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-4">
                <Heart className="w-6 h-6 mx-auto mb-2 text-red-400" />
                <div className="text-2xl font-bold text-white">
                  {totalStats.totalLikes}
                </div>
                <div className="text-sm text-gray-300">Total Likes</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-4">
                <MessageCircle className="w-6 h-6 mx-auto mb-2 text-green-400" />
                <div className="text-2xl font-bold text-white">
                  {totalStats.totalComments}
                </div>
                <div className="text-sm text-gray-300">Comments</div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tabs for filtering */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-8 px-4"
          >
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-white/10 backdrop-blur-sm border-white/20">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-300 text-xs sm:text-sm"
                >
                  All ({allMoments.length})
                </TabsTrigger>
                <TabsTrigger
                  value="photos"
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-300 text-xs sm:text-sm"
                >
                  <ImageIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  <span className="hidden sm:inline">Photos</span> (
                  {totalStats.photos})
                </TabsTrigger>
                <TabsTrigger
                  value="videos"
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-300 text-xs sm:text-sm"
                >
                  <Video className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  <span className="hidden sm:inline">Videos</span> (
                  {totalStats.videos})
                </TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab} className="mt-8">
                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mx-auto max-w-7xl">
                  {filteredMoments.map((moment, index) => (
                    <motion.div
                      key={moment.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                      className="cursor-pointer"
                      onClick={() => setSelectedMedia(moment.id)}
                    >
                      <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300">
                        <div className="relative">
                          {moment.type === "video" ? (
                            <div className="relative">
                              <Image
                                src={
                                  moment.type === "video"
                                    ? typeof moment.thumbnail === "string" &&
                                      moment.thumbnail
                                      ? moment.thumbnail
                                      : "/placeholder.svg"
                                    : "image" in moment &&
                                      typeof moment.image === "string" &&
                                      moment.image
                                    ? moment.image
                                    : "/placeholder.svg"
                                }
                                alt={moment.title}
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover"
                              />
                              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                                  <Play className="w-8 h-8 text-white" />
                                </div>
                              </div>
                              <div className="absolute bottom-4 right-4">
                                <Badge className="bg-black/70 text-white">
                                  {"duration" in moment ? moment.duration : ""}
                                </Badge>
                              </div>
                            </div>
                          ) : (
                            <Image
                              src={
                                "image" in moment
                                  ? moment.image || "/placeholder.svg"
                                  : "/placeholder.svg"
                              }
                              alt={moment.title}
                              width={600}
                              height={400}
                              className="w-full h-64 object-cover"
                            />
                          )}
                          <div className="absolute top-4 left-4">
                            <Badge
                              className={`${
                                moment.type === "video"
                                  ? "bg-blue-600"
                                  : "bg-purple-600"
                              } text-white`}
                            >
                              {moment.type === "video" ? (
                                <Video className="w-3 h-3 mr-1" />
                              ) : (
                                <Camera className="w-3 h-3 mr-1" />
                              )}
                              {moment.type.toUpperCase()}
                            </Badge>
                          </div>
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-black/50 text-white">
                              {new Date(moment.date).toLocaleDateString()}
                            </Badge>
                          </div>
                        </div>

                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {moment.title}
                          </h3>
                          <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                            {moment.description}
                          </p>

                          <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                            <MapPin className="w-3 h-3" />
                            <span>{moment.location}</span>
                          </div>

                          <div className="flex flex-wrap gap-1 mb-3">
                            {moment.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs border-purple-400 text-purple-400"
                              >
                                #{tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-gray-300">
                              <div className="flex items-center gap-1">
                                <Heart className="w-4 h-4 text-red-400" />
                                <span>{moment.likes}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageCircle className="w-4 h-4 text-blue-400" />
                                <span>{moment.comments}</span>
                              </div>
                            </div>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-gray-300 hover:text-white cursor-pointer"
                            >
                              <Share className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              className="cursor-pointer border-white/30 text-white hover:bg-white/10 px-8 py-3 bg-transparent"
            >
              Load More Moments
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Modal for selected media */}
      {selectedMedia &&
        (() => {
          const selectedMoment = allMoments.find((m) => m.id === selectedMedia);
          if (!selectedMoment) return null;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedMedia(null)}
            >
              <div
                className="max-w-4xl w-full bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-right mb-4">
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedMedia(null)}
                    className="text-white cursor-pointer"
                  >
                    ✕
                  </Button>
                </div>
                <div>
                  {selectedMoment.type === "video" ? (
                    <video
                      controls
                      className="w-full h-auto rounded-lg mb-4"
                      poster={
                        (selectedMoment as VideoMoment).thumbnail ||
                        "/placeholder.svg"
                      }
                    >
                      <source
                        src={(selectedMoment as VideoMoment).video}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      src={
                        (selectedMoment as GalleryMoment).image ||
                        "/placeholder.svg"
                      }
                      alt={selectedMoment.title}
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-lg mb-4"
                    />
                  )}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge
                      className={`${
                        selectedMoment.type === "video"
                          ? "bg-blue-600"
                          : "bg-purple-600"
                      } text-white`}
                    >
                      {selectedMoment.type === "video" ? (
                        <Video className="w-3 h-3 mr-1" />
                      ) : (
                        <Camera className="w-3 h-3 mr-1" />
                      )}
                      {selectedMoment.type.toUpperCase()}
                    </Badge>
                    {selectedMoment.type === "video" && (
                      <Badge className="bg-gray-600 text-white">
                        {(selectedMoment as VideoMoment).duration}
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 break-words">
                    {selectedMoment.title}
                  </h3>
                  <p className="text-gray-300 mb-4 break-words">
                    {selectedMoment.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-gray-400">
                    <span>
                      {new Date(selectedMoment.date).toLocaleDateString()}
                    </span>
                    <span>•</span>
                    <span className="break-words">
                      {selectedMoment.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })()}
    </div>
  );
}

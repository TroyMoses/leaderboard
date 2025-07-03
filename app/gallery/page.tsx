"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Camera,
  Heart,
  MessageCircle,
  Share,
  Upload,
  MapPin,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import Image from "next/image";

// Dummy data for gallery moments
const galleryMoments = [
  {
    id: 1,
    image: "/caleb.jpg",
    title: "Challenger Loses Bet to Astrav",
    description: "Caleb loses a bet to Astrav after a close race!",
    date: "2025-07-02",
    location: "Rashida Towers, Mabua Road",
    likes: 30,
    comments: 8,
    tags: ["loss", "bet", "week3"],
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
  },
];

export default function GalleryPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />

      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-4 mb-12"
          >
            <h1 className="text-5xl font-bold text-white mb-4">
              📸 Run Moments
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Capturing the spirit, sweat, and victories of IntLeaderBoard 25
            </p>
            <Button className="cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3">
              <Upload className="w-5 h-5 mr-2" />
              Upload New Moment
            </Button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-4">
                <Camera className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                <div className="text-2xl font-bold text-white">47</div>
                <div className="text-sm text-gray-300">Total Photos</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-4">
                <Heart className="w-6 h-6 mx-auto mb-2 text-red-400" />
                <div className="text-2xl font-bold text-white">312</div>
                <div className="text-sm text-gray-300">Total Likes</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-4">
                <MessageCircle className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                <div className="text-2xl font-bold text-white">156</div>
                <div className="text-sm text-gray-300">Comments</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-4">
                <Share className="w-6 h-6 mx-auto mb-2 text-green-400" />
                <div className="text-2xl font-bold text-white">89</div>
                <div className="text-sm text-gray-300">Shares</div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {galleryMoments.map((moment, index) => (
              <motion.div
                key={moment.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer"
                onClick={() => setSelectedImage(moment.id)}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300">
                  <div className="relative">
                    <div className="flex justify-center items-center">

                    <Image
                      src={moment.image || "/placeholder.svg"}
                      alt={moment.title}
                      width={600}
                      height={400}
                      className="w-[350px] h-[350px] object-cover item-center"
                    />
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-black/50 text-white">
                        {new Date(moment.date).toLocaleDateString()}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="px-4">
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
                        className="text-gray-300 hover:text-white"
                      >
                        <Share className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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

      {/* Modal for selected image (simplified) */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-right mb-4">
              <Button
                variant="ghost"
                onClick={() => setSelectedImage(null)}
                className="text-white"
              >
                ✕
              </Button>
            </div>
            {galleryMoments.find((m) => m.id === selectedImage) && (
              <div>
                <Image
                  src={
                    galleryMoments.find((m) => m.id === selectedImage)!.image ||
                    "/placeholder.svg"
                  }
                  alt={
                    galleryMoments.find((m) => m.id === selectedImage)!.title
                  }
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {galleryMoments.find((m) => m.id === selectedImage)!.title}
                </h3>
                <p className="text-gray-300">
                  {
                    galleryMoments.find((m) => m.id === selectedImage)!
                      .description
                  }
                </p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}

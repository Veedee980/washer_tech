"use client";
import React from "react";

export default function VideoPage() {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <video 
        src="/washertech-video.mp4" 
        controls 
        autoPlay 
        className="w-full h-full object-contain"
      />
    </div>
  );
}

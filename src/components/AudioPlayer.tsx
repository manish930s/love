import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="bg-white rounded-full p-3 shadow-lg hover:bg-rose-50 transition-colors mb-4"
      >
        {!isPlaying ? (
          <VolumeX className="w-6 h-6 text-gray-600" />
        ) : (
          <Volume2 className="w-6 h-6 text-rose-500" />
        )}
      </button> 
      
      {isPlaying && (
        <div className="bg-white rounded-lg shadow-lg p-2">
          <iframe
            width="280"
            height="157"
            src="https://www.youtube-nocookie.com/embed/P3wSn5K9quo?autoplay=1"
            title="Happy Birthday song Romantic version"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      )}
    </div>
  );
}